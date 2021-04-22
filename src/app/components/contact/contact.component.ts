import { Component, OnInit, AfterViewInit } from '@angular/core';

declare function initMap(): any;
declare function initTabs(): any;
declare function initGoTo(): any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    // document - ready
    initMap();
    initTabs();
    initGoTo();
  }

  ngOnInit(): void {
  }

}
