import { Directive, ElementRef, inject } from '@angular/core';

/**
 * Tracks the pointer over the host and exposes its position as `--spot-x` / `--spot-y`
 * CSS custom properties (percentages), which component styles use to paint a soft glow
 * that follows the cursor. Pointer-only — skipped for touch, where there's no hover to track.
 */
@Directive({
  selector: '[appSpotlight]',
  standalone: true,
  host: {
    class: 'spotlight',
    '(pointermove)': 'onPointerMove($event)',
    '(pointerleave)': 'onPointerLeave()'
  }
})
export class SpotlightDirective {
  private readonly elementRef = inject(ElementRef<HTMLElement>);

  onPointerMove(event: PointerEvent): void {
    if (event.pointerType !== 'mouse') {
      return;
    }
    const rect = this.elementRef.nativeElement.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    const style = this.elementRef.nativeElement.style;
    style.setProperty('--spot-x', `${x}%`);
    style.setProperty('--spot-y', `${y}%`);
    style.setProperty('--spot-opacity', '1');
  }

  onPointerLeave(): void {
    this.elementRef.nativeElement.style.setProperty('--spot-opacity', '0');
  }
}
