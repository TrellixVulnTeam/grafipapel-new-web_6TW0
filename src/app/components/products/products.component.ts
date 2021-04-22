import { Component, OnInit } from '@angular/core';

declare function initTabs(): any;
declare function initGoTo(): any;
declare function initStickyBlocks(): any;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
