import { Directive, ElementRef, afterNextRender, inject, input } from '@angular/core';

/**
 * Adds `.reveal` + toggles `.is-visible` once the host scrolls into view.
 * Pure IntersectionObserver — no animation library, respects prefers-reduced-motion via CSS.
 */
@Directive({
  selector: '[appReveal]',
  standalone: true,
  host: { class: 'reveal' }
})
export class RevealDirective {
  readonly appRevealDelay = input(0, { alias: 'appRevealDelay' });

  private readonly elementRef = inject(ElementRef<HTMLElement>);

  constructor() {
    afterNextRender(() => {
      const el = this.elementRef.nativeElement;
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              window.setTimeout(() => el.classList.add('is-visible'), this.appRevealDelay());
              observer.disconnect();
            }
          }
        },
        { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
      );
      observer.observe(el);
    });
  }
}
