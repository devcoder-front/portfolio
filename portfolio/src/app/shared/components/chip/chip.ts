import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-chip',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<span class="chip" [class.chip--accent]="tone() === 'accent'"><ng-content /></span>`,
  styleUrl: './chip.scss'
})
export class Chip {
  readonly tone = input<'neutral' | 'accent'>('neutral');
}
