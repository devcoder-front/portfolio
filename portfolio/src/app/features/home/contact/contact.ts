import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Icon } from '../../../shared/components/icon/icon';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { PROFILE, SOCIAL_LINKS } from '../../../core/data/resume-data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [Icon, RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  protected readonly profile = PROFILE;
  protected readonly socials = SOCIAL_LINKS;
  protected readonly copied = signal(false);

  async copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.profile.email);
      this.copied.set(true);
      window.setTimeout(() => this.copied.set(false), 2000);
    } catch {
      // Clipboard API unavailable — the email is still visible and selectable on screen.
    }
  }
}
