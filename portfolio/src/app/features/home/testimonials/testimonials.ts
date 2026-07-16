import { ChangeDetectionStrategy, Component, OnDestroy, computed, signal } from '@angular/core';
import { Icon } from '../../../shared/components/icon/icon';
import { SectionHeading } from '../../../shared/components/section-heading/section-heading';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { SpotlightDirective } from '../../../shared/directives/spotlight.directive';
import { SOCIAL_LINKS, TESTIMONIALS } from '../../../core/data/resume-data';

const AUTOPLAY_INTERVAL_MS = 7000;

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [Icon, SectionHeading, RevealDirective, SpotlightDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss'
})
export class Testimonials implements OnDestroy {
  protected readonly linkedIn = SOCIAL_LINKS.find((link) => link.icon === 'linkedin')?.href ?? '';
  protected readonly testimonials = TESTIMONIALS;

  protected readonly activeIndex = signal(0);
  protected readonly direction = signal<'forward' | 'backward'>('forward');
  protected readonly active = computed(() => this.testimonials[this.activeIndex()]);

  private readonly prefersReducedMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  private autoplayId: ReturnType<typeof setInterval> | null = null;

  constructor() {
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  protected initialsFor(name: string): string {
    return name
      .split(' ')
      .filter(Boolean)
      .map((part) => part[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
  }

  protected next(): void {
    this.direction.set('forward');
    this.activeIndex.update((i) => (i + 1) % this.testimonials.length);
  }

  protected prev(): void {
    this.direction.set('backward');
    this.activeIndex.update((i) => (i - 1 + this.testimonials.length) % this.testimonials.length);
  }

  protected goTo(index: number): void {
    this.direction.set(index > this.activeIndex() ? 'forward' : 'backward');
    this.activeIndex.set(index);
  }

  protected pauseAutoplay(): void {
    this.stopAutoplay();
  }

  protected resumeAutoplay(): void {
    this.startAutoplay();
  }

  private startAutoplay(): void {
    if (this.prefersReducedMotion || this.autoplayId || this.testimonials.length <= 1) {
      return;
    }
    this.autoplayId = setInterval(() => this.next(), AUTOPLAY_INTERVAL_MS);
  }

  private stopAutoplay(): void {
    if (this.autoplayId) {
      clearInterval(this.autoplayId);
      this.autoplayId = null;
    }
  }
}
