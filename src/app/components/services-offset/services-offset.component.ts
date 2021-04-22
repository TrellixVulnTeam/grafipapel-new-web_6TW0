import { Component, OnInit, AfterViewInit } from '@angular/core';

declare function initCarousel(): any;
declare function initGoTo(): any;
declare function initTabs(): any;
declare function initDzsparallaxer(): any;

@Component({
  selector: 'app-services-offset',
  templateUrl: './services-offset.component.html',
  styleUrls: ['./services-offset.component.css']
})
export class ServicesOffsetComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    // document - ready
    initCarousel();
    initGoTo();
    initTabs();
    initDzsparallaxer();
  }

  ngOnInit(): void {
  }

}
