import { Component, HostListener } from '@angular/core';
import { Hero } from '../hero/hero';
import { About } from '../about/about';
import { VideoSection } from '../video-section/video-section';

@Component({
  selector: 'app-home',
  imports: [Hero, About, VideoSection],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  heroOpacity = 1;
  aboutOpacity = 0;
  heroTranslate = 0;

  videoID = 'JvhOawEE0_k?playsinline=1';

  @HostListener('window:scroll', [])
  onScroll() {
    const scrollY = window.scrollY;

    // controla quando começa a desaparecer
    const fadeStart = 0;
    const fadeEnd = 600; // ajuste fino aqui

    let progress = scrollY / fadeEnd;

    if (progress > 1) progress = 1;

    this.heroOpacity = 1 - progress;
    this.aboutOpacity = progress <= 1 ? progress : 1;
    this.heroTranslate = -(scrollY * 0.4); // leve movimento
  }
}
