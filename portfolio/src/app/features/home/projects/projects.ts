import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Chip } from '../../../shared/components/chip/chip';
import { Icon } from '../../../shared/components/icon/icon';
import { SectionHeading } from '../../../shared/components/section-heading/section-heading';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { SpotlightDirective } from '../../../shared/directives/spotlight.directive';
import { PROJECTS } from '../../../core/data/resume-data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [Chip, Icon, SectionHeading, RevealDirective, SpotlightDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  protected readonly projects = PROJECTS;
  protected readonly expandedId = signal<string | null>(null);

  toggle(id: string): void {
    this.expandedId.update((current) => (current === id ? null : id));
  }
}
