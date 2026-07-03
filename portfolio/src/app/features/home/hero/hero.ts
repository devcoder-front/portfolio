import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icon } from '../../../shared/components/icon/icon';
import { StatCounter } from '../../../shared/components/stat-counter/stat-counter';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { HERO_METRICS, PROFILE, SOCIAL_LINKS } from '../../../core/data/resume-data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [Icon, StatCounter, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
  protected readonly profile = PROFILE;
  protected readonly metrics = HERO_METRICS;
  protected readonly socials = SOCIAL_LINKS.filter((link) => link.href);
}
