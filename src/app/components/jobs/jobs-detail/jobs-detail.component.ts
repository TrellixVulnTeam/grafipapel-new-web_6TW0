import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Job } from '@models/job';
import { JobService } from '@services/job.service';

declare function initMap(): any;
declare function initTabs(): any;
declare function initGoTo(): any;
declare function initRating(): any;
declare function initHorizontalProgressBars(): any;

@Component({
  selector: 'app-jobs-detail',
  templateUrl: './jobs-detail.component.html',
  styleUrls: ['./jobs-detail.component.css']
})
export class JobsDetailComponent implements OnInit, AfterViewInit {

  pageTitle = 'Descripción del puesto de trabajo';
  currentObj: Job;
  id: number;
  parentPath = '/jobs';

  constructor(private objService: JobService, private router: Router, private activatedRoute: ActivatedRoute) { }
  
  ngAfterViewInit(): void {
    // document - ready
    initMap();
    initTabs();
    initGoTo();
    initRating();
    initHorizontalProgressBars();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params.id === undefined) {
        this.goToIndex();
      }
      this.clearObjs();
      this.id = parseInt(params.id);
      this.objService.get(this.id).subscribe(
        obj => this.onLoadForm(obj),
        error => this.onError(error),
        () => this.onCompleted());
    });
  }

  clearObjs() {
    this.currentObj = undefined;
    this.id = undefined;
  }

  onLoadForm(obj: Job) {
    this.currentObj = obj;
  }

  goToIndex() {
    this.router.navigate([this.parentPath]);
  }

  onError(errorResponse: HttpErrorResponse): void {
    console.error(errorResponse);
    this.router.navigate([this.parentPath]);
  }

  onCompleted(): void {
    console.log('Load job completed');
  }

  roundUp(value: number): number {
    return Math.ceil(value);
  }

}
