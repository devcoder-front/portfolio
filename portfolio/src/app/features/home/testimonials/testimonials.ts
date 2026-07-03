import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icon } from '../../../shared/components/icon/icon';
import { SectionHeading } from '../../../shared/components/section-heading/section-heading';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { SOCIAL_LINKS } from '../../../core/data/resume-data';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [Icon, SectionHeading, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss'
})
export class Testimonials {
  protected readonly linkedIn = SOCIAL_LINKS.find((link) => link.icon === 'linkedin')?.href ?? '';
}
