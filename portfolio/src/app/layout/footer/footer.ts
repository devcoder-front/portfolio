import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icon } from '../../shared/components/icon/icon';
import { PROFILE, SOCIAL_LINKS } from '../../core/data/resume-data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  protected readonly profile = PROFILE;
  protected readonly socials = SOCIAL_LINKS.filter((link) => link.href);
  protected readonly year = new Date().getFullYear();
}
