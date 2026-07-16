import { Injectable, signal } from '@angular/core';
import type { LeetCodeStats } from '../models/leetcode.model';

export type LeetCodeStatus = 'loading' | 'success' | 'error';

/** Fetches live problem-solved counts via the /api/leetcode-stats serverless proxy (avoids LeetCode's CORS-less GraphQL endpoint). */
@Injectable({ providedIn: 'root' })
export class LeetCodeService {
  readonly status = signal<LeetCodeStatus>('loading');
  readonly stats = signal<LeetCodeStats | null>(null);

  constructor() {
    this.fetchStats();
  }

  private async fetchStats(): Promise<void> {
    try {
      const response = await fetch('/api/leetcode-stats');
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      const data = (await response.json()) as LeetCodeStats;
      this.stats.set(data);
      this.status.set('success');
    } catch {
      this.status.set('error');
    }
  }
}
