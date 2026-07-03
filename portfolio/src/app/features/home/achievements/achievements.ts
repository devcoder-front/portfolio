import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icon } from '../../../shared/components/icon/icon';
import { SectionHeading } from '../../../shared/components/section-heading/section-heading';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { SpotlightDirective } from '../../../shared/directives/spotlight.directive';
import { AWARDS } from '../../../core/data/resume-data';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [Icon, SectionHeading, RevealDirective, SpotlightDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './achievements.html',
  styleUrl: './achievements.scss'
})
export class Achievements {
  protected readonly awards = AWARDS;
}
