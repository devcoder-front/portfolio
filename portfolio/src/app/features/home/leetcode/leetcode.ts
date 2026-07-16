import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { Icon } from '../../../shared/components/icon/icon';
import { SectionHeading } from '../../../shared/components/section-heading/section-heading';
import { StatCounter } from '../../../shared/components/stat-counter/stat-counter';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { SpotlightDirective } from '../../../shared/directives/spotlight.directive';
import { LeetCodeService } from '../../../core/services/leetcode.service';
import { LEETCODE_PROFILE_URL } from '../../../core/data/resume-data';
import type { LeetCodeDifficultyBreakdown } from '../../../core/models/leetcode.model';

interface DifficultyLevel {
  readonly key: 'easy' | 'medium' | 'hard';
  readonly label: string;
  readonly solved: number;
  readonly total: number;
  readonly percent: number;
  readonly color: string;
}

interface RingSegment {
  readonly key: string;
  readonly color: string;
  readonly dasharray: string;
  readonly dashoffset: number;
}

const RING_RADIUS = 86;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;
// Small breathing room between adjacent donut segments (the surface-gap spacer).
const SEGMENT_GAP = 3;

@Component({
  selector: 'app-leetcode',
  standalone: true,
  imports: [Icon, SectionHeading, StatCounter, RevealDirective, SpotlightDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './leetcode.html',
  styleUrl: './leetcode.scss'
})
export class Leetcode {
  private readonly leetcode = inject(LeetCodeService);

  protected readonly status = this.leetcode.status;
  protected readonly stats = this.leetcode.stats;
  protected readonly profileUrl = LEETCODE_PROFILE_URL;

  protected readonly ringLabel = computed(() => {
    const data = this.stats();
    return data ? `${data.totalSolved} problems solved — ${data.easy.solved} easy, ${data.medium.solved} medium, ${data.hard.solved} hard` : '';
  });

  protected readonly levels = computed<readonly DifficultyLevel[]>(() => {
    const data = this.stats();
    if (!data) {
      return [];
    }
    return [
      this.toLevel('easy', 'Easy', data.easy, 'var(--difficulty-easy)'),
      this.toLevel('medium', 'Medium', data.medium, 'var(--difficulty-medium)'),
      this.toLevel('hard', 'Hard', data.hard, 'var(--difficulty-hard)')
    ];
  });

  // A donut split by each difficulty's share of problems *solved* — always reads as a
  // confident, fully-coloured ring, unlike solved-vs-entire-question-bank (which stays
  // visually near-empty for almost everyone, since nobody clears LeetCode's full catalog).
  protected readonly ringSegments = computed<readonly RingSegment[]>(() => {
    const data = this.stats();
    if (!data || data.totalSolved === 0) {
      return [];
    }
    const shares: readonly [string, number, string][] = [
      ['easy', data.easy.solved, 'var(--difficulty-easy)'],
      ['medium', data.medium.solved, 'var(--difficulty-medium)'],
      ['hard', data.hard.solved, 'var(--difficulty-hard)']
    ];

    const nonZeroCount = shares.filter(([, solved]) => solved > 0).length;
    const gap = nonZeroCount > 1 ? SEGMENT_GAP : 0;

    let cumulative = 0;
    return shares
      .filter(([, solved]) => solved > 0)
      .map(([key, solved, color]) => {
        const rawLength = (solved / data.totalSolved) * RING_CIRCUMFERENCE;
        const length = Math.max(0, rawLength - gap);
        const segment: RingSegment = {
          key,
          color,
          dasharray: `${length} ${RING_CIRCUMFERENCE - length}`,
          dashoffset: -(cumulative + gap / 2)
        };
        cumulative += rawLength;
        return segment;
      });
  });

  private toLevel(
    key: DifficultyLevel['key'],
    label: string,
    breakdown: LeetCodeDifficultyBreakdown,
    color: string
  ): DifficultyLevel {
    const percent = breakdown.total > 0 ? Math.round((breakdown.solved / breakdown.total) * 1000) / 10 : 0;
    return { key, label, solved: breakdown.solved, total: breakdown.total, percent, color };
  }
}
