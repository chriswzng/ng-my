import { Component, OnInit, HostListener } from '@angular/core';
import { PageService } from '../../services/page.service';
import socialMediaList from '../../../assets/data/social-media.json';

// @Component({
//   selector: 'my-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.scss']
// })
export class HeaderComponent implements OnInit {
  isShowMobileNav = false;
  isAnchored = false;

  navList = [
    // { link: '/logo', name: 'Logo' },
    { link: '/speakers', name: 'Featured Speakers' },
    // { link: '/schedule', name: 'Schedule' },
    // { link: '/form/speaker-training', name: 'Speaking Up!' },
    { link: '/form/call-for-presenters', name: 'Submit CFP' },
    { link: '/coc', name: 'Code of Conduct' },
    { link: '/team', name: 'Team' }
  ];

  socialMediaList = [];

  @HostListener('window:scroll', ['$event'])
  onScroll(e) {
    const maxDist = 200;
    const currentPos = window.scrollY;
    const opacity = currentPos / maxDist;
    const opacityCalc = opacity > 1 ? 1 : opacity;

    document.documentElement.style.setProperty(
      '--hero-scroll',
      `${opacityCalc}`
    );

    this.isAnchored = currentPos > 40;
  }

  constructor(private pageSvc: PageService) {}

  toggleMobileNav() {
    this.isShowMobileNav = !this.isShowMobileNav;
  }

  ngOnInit() {
    this.socialMediaList = socialMediaList;
  }

  trackEvent(event: string) {
    gtag('event', event + '_menu', {
      event_category: event,
      event_label: event,
      value: event
    });
  }
}
