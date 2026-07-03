import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Chip } from '../../../shared/components/chip/chip';
import { Icon } from '../../../shared/components/icon/icon';
import { SectionHeading } from '../../../shared/components/section-heading/section-heading';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { SpotlightDirective } from '../../../shared/directives/spotlight.directive';
import { EXPERIENCE } from '../../../core/data/resume-data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [Chip, Icon, SectionHeading, RevealDirective, SpotlightDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience {
  protected readonly entries = EXPERIENCE;
  protected readonly expandedId = signal<string | null>(EXPERIENCE[0]?.id ?? null);

  toggle(id: string): void {
    this.expandedId.update((current) => (current === id ? null : id));
  }
}
