import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Chip } from '../../../shared/components/chip/chip';
import { Icon } from '../../../shared/components/icon/icon';
import { SectionHeading } from '../../../shared/components/section-heading/section-heading';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { SpotlightDirective } from '../../../shared/directives/spotlight.directive';
import { SKILLS } from '../../../core/data/resume-data';
import type { IconName } from '../../../shared/components/icon/icon';

const CATEGORY_ICONS: Record<string, IconName> = {
  Frontend: 'code',
  Architecture: 'briefcase',
  'Performance Engineering': 'sparkle',
  'AI / LLM': 'sparkle',
  Testing: 'check',
  'Cloud & Security': 'external',
  'Data & Visualization': 'award',
  'DevOps / Tools': 'code'
};

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [Chip, Icon, SectionHeading, RevealDirective, SpotlightDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {
  protected readonly skills = SKILLS;

  iconFor(category: string): IconName {
    return CATEGORY_ICONS[category] ?? 'code';
  }
}
