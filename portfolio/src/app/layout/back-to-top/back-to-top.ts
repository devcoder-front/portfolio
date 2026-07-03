import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Icon } from '../../shared/components/icon/icon';
import { ScrollService } from '../../core/services/scroll.service';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (scroll.showBackToTop()) {
      <button type="button" class="back-to-top" (click)="scrollToTop()" aria-label="Back to top">
        <app-icon name="arrow-up" [size]="18" />
      </button>
    }
  `,
  styleUrl: './back-to-top.scss'
})
export class BackToTop {
  protected readonly scroll = inject(ScrollService);

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
