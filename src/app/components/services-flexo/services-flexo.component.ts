import { Component, OnInit, AfterViewInit } from '@angular/core';

declare function initCarousel(): any;
declare function initGoTo(): any;
declare function initTabs(): any;
declare function initDzsparallaxer(): any;
declare function initCubeportfolio(): any;

@Component({
  selector: 'app-services-flexo',
  templateUrl: './services-flexo.component.html',
  styleUrls: ['./services-flexo.component.css']
})
export class ServicesFlexoComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    // document - ready
    initCarousel();
    initGoTo();
    initTabs();
    initCubeportfolio();
    initDzsparallaxer();
  }

  ngOnInit(): void {
  }

}
