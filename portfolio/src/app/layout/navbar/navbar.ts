import { ChangeDetectionStrategy, Component, HostListener, inject, signal } from '@angular/core';
import { Icon } from '../../shared/components/icon/icon';
import { ThemeService } from '../../core/services/theme.service';
import { ScrollService } from '../../core/services/scroll.service';
import { PROFILE } from '../../core/data/resume-data';

interface NavLink {
  readonly id: string;
  readonly label: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  protected readonly theme = inject(ThemeService);
  protected readonly scroll = inject(ScrollService);
  protected readonly profile = PROFILE;

  protected readonly isMenuOpen = signal(false);
  protected readonly isScrolled = signal(false);

  protected readonly links: readonly NavLink[] = [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'leetcode', label: 'LeetCode' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled.set(window.scrollY > 8);
  }

  toggleMenu(): void {
    this.isMenuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  toggleTheme(): void {
    this.theme.toggle();
  }
}
