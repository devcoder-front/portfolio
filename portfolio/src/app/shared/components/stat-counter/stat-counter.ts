import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  afterNextRender,
  inject,
  input,
  signal
} from '@angular/core';

/** Counts up from 0 to `value` once scrolled into view. Respects prefers-reduced-motion. */
@Component({
  selector: 'app-stat-counter',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<span class="stat-counter">{{ displayValue() }}{{ suffix() }}</span>`,
  styleUrl: './stat-counter.scss'
})
export class StatCounter {
  readonly value = input.required<number>();
  readonly suffix = input('');
  readonly durationMs = input(1200);

  protected readonly displayValue = signal(0);

  private readonly elementRef = inject(ElementRef<HTMLElement>);

  constructor() {
    afterNextRender(() => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        this.displayValue.set(this.value());
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              this.animate();
              observer.disconnect();
            }
          }
        },
        { threshold: 0.4 }
      );
      observer.observe(this.elementRef.nativeElement);
    });
  }

  private animate(): void {
    const target = this.value();
    const start = performance.now();
    const duration = this.durationMs();

    const step = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      this.displayValue.set(Math.round(eased * target));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }
}
