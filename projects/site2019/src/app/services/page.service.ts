import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  public readonly postfix = ' | NG-MY 2019';
  private trackingID = environment.gaTrackingID;

  constructor(private title: Title) {}

  setPage(config: { title: string; path: string; skipTitlePostfix?: boolean }) {
    const postfix = config.skipTitlePostfix ? '' : this.postfix;
    this.title.setTitle(config.title + postfix);

    if (!environment.production || !window['gtag']) return;

    gtag('config', this.trackingID, {
      'page-title': config.title,
      'page-path': config.path
    });
  }

  scrollWindowTo(target, duration) {
    const start = window.pageYOffset;
    const dist = target - start;
    const steps = 20;
    let current = 0;

    const transitionTiming = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animateScroll = () => {
      console.log('TCL: animateScroll -> animateScroll', current);
      current += steps;
      const pos = transitionTiming(current, start, dist, duration);

      window.scrollTo(0, pos);

      if (current < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    animateScroll();
  }
}
