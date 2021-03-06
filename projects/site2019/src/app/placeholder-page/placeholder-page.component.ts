import { Component, OnInit } from '@angular/core';
import { PageService } from '../services/page.service';

// @Component({
//   selector: 'my-placeholder-page',
//   templateUrl: './placeholder-page.component.html',
//   styleUrls: ['./placeholder-page.component.scss']
// })
export class PlaceholderPageComponent implements OnInit {
  title = 'July 06-07';

  constructor(private pageSvc: PageService) { }

  ngOnInit() {
    this.pageSvc.setPage({ title: this.title });
  }
}
