import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { ColumnMode } from '../../../../projects/swimlane/ngx-datatable/src/public-api';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  loadingIndicator = true;
  reorderable = true;

  editing = {};
  rows = [];

  ColumnMode = ColumnMode;

  constructor(private router:Router) {
    this.fetch(data => {
      this.rows = data;
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/company.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  updateValue(event, cell, rowIndex) {
    console.log('inline editing rowIndex', rowIndex);
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
    console.log('UPDATED!', this.rows[rowIndex][cell]);
  }
  
  onClick() {
    this.router.navigate(['createLeads/new']);
  }

  onClick1() {
    this.router.navigate(['importLeads']);
  }

  ngOnInit(): void {
  }

}
