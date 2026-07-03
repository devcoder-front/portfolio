import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  readonly progress = signal(0);
  readonly showBackToTop = signal(false);
  readonly activeSectionId = signal<string>('');

  private observer?: IntersectionObserver;
  private mutationObserver?: MutationObserver;
  private ticking = false;

  constructor() {
    window.addEventListener('scroll', this.onScroll, { passive: true });
    this.onScroll();
  }

  /**
   * Sets up scrollspy over the given section element ids. Several sections are behind
   * `@defer` blocks and mount after the initial render, so a MutationObserver keeps
   * re-attaching the IntersectionObserver until every id has resolved to an element.
   */
  observeSections(sectionIds: readonly string[]): void {
    const attach = (): boolean => {
      const elements = sectionIds
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null);

      if (elements.length === 0) {
        return false;
      }

      this.observer?.disconnect();
      this.observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

          if (visible.length > 0) {
            this.activeSectionId.set(visible[0].target.id);
          }
        },
        { rootMargin: '-15% 0px -60% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
      );

      elements.forEach((el) => this.observer?.observe(el));
      return elements.length === sectionIds.length;
    };

    if (attach()) {
      return;
    }

    this.mutationObserver?.disconnect();
    this.mutationObserver = new MutationObserver(() => {
      if (attach()) {
        this.mutationObserver?.disconnect();
      }
    });
    this.mutationObserver.observe(document.body, { childList: true, subtree: true });
  }

  private readonly onScroll = (): void => {
    if (this.ticking) {
      return;
    }
    this.ticking = true;

    requestAnimationFrame(() => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      const pct = scrollable > 0 ? (doc.scrollTop / scrollable) * 100 : 0;

      this.progress.set(Math.min(100, Math.max(0, pct)));
      this.showBackToTop.set(doc.scrollTop > 480);

      this.ticking = false;
    });
  };
}
