import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type IconName =
  | 'linkedin'
  | 'github'
  | 'email'
  | 'phone'
  | 'location'
  | 'download'
  | 'sun'
  | 'moon'
  | 'menu'
  | 'close'
  | 'arrow-up'
  | 'arrow-right'
  | 'external'
  | 'award'
  | 'briefcase'
  | 'graduation-cap'
  | 'check'
  | 'chevron-down'
  | 'quote'
  | 'sparkle'
  | 'code';

@Component({
  selector: 'app-icon',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './icon.html'
})
export class Icon {
  readonly name = input.required<IconName>();
  readonly size = input(20);
}
