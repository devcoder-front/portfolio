import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icon } from '../../../shared/components/icon/icon';
import { SectionHeading } from '../../../shared/components/section-heading/section-heading';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { SpotlightDirective } from '../../../shared/directives/spotlight.directive';
import { EDUCATION, LANGUAGES } from '../../../core/data/resume-data';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [Icon, SectionHeading, RevealDirective, SpotlightDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './education.html',
  styleUrl: './education.scss'
})
export class Education {
  protected readonly education = EDUCATION;
  protected readonly languages = LANGUAGES;
}
