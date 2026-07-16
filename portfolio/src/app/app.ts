import { ChangeDetectionStrategy, Component, afterNextRender, inject } from '@angular/core';
import { Navbar } from './layout/navbar/navbar';
import { Footer } from './layout/footer/footer';
import { BackToTop } from './layout/back-to-top/back-to-top';
import { Hero } from './features/home/hero/hero';
import { Experience } from './features/home/experience/experience';
import { Projects } from './features/home/projects/projects';
import { Skills } from './features/home/skills/skills';
import { Leetcode } from './features/home/leetcode/leetcode';
import { Achievements } from './features/home/achievements/achievements';
import { Education } from './features/home/education/education';
import { Testimonials } from './features/home/testimonials/testimonials';
import { Contact } from './features/home/contact/contact';
import { ScrollService } from './core/services/scroll.service';

const SECTION_IDS = [
  'home',
  'experience',
  'projects',
  'skills',
  'leetcode',
  'achievements',
  'education',
  'testimonials',
  'contact'
] as const;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Navbar,
    Footer,
    BackToTop,
    Hero,
    Experience,
    Projects,
    Skills,
    Leetcode,
    Achievements,
    Education,
    Testimonials,
    Contact
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private readonly scroll = inject(ScrollService);

  constructor() {
    afterNextRender(() => this.scroll.observeSections(SECTION_IDS));
  }
}
