export interface LeetCodeDifficultyBreakdown {
  readonly solved: number;
  readonly total: number;
}

export interface LeetCodeStats {
  readonly totalSolved: number;
  readonly totalQuestions: number;
  readonly ranking: number | null;
  readonly easy: LeetCodeDifficultyBreakdown;
  readonly medium: LeetCodeDifficultyBreakdown;
  readonly hard: LeetCodeDifficultyBreakdown;
  readonly updatedAt: string;
}
