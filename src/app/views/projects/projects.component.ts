import { Component, OnInit, ViewChild } from '@angular/core';
import {Router} from "@angular/router";
import { ColumnMode } from '../../../../projects/swimlane/ngx-datatable/src/public-api';
import { DatatableComponent } from '../../../../projects/swimlane/ngx-datatable/src/lib/components/datatable.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  loadingIndicator = true;
  reorderable = true;

  editing = {};
  rows = [
    {
      "title": "Pranay",
      "assignedTo": 123456,
      "startDate": 10,
      "endDate": 3,
      "createdBy" : "Member",
      "createdAt": "Yesterday",
      "archived" : "No",
    },
    {
      "title": "teja",
      "assignedTo": 123456,
      "startDate": 20,
      "endDate": 9,
      "createdBy" : "Member",
      "createdAt": "Today",
      "archived" : "Yes",
    },
  ];

  temp = [];
  @ViewChild(DatatableComponent) table: DatatableComponent;

  ColumnMode = ColumnMode;

  constructor(private router:Router) {
    this.temp = [...this.rows];
    // this.fetch(data => {
    //   this.rows = data;
    // });
  }

  // fetch(cb) {
  //   const req = new XMLHttpRequest();
  //   req.open('GET', `assets/data/company.json`);

  //   req.onload = () => {
  //     cb(JSON.parse(req.response));
  //   };

  //   req.send();
  // }

  updateFilter(event){
    const val = event.target.value.toLowerCase();
    // filter our data
    const temp = this.temp.filter(function (d) {
      return d.title.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rows = temp;
  }

  updateValue(event, cell, rowIndex) {
    // console.log('inline editing rowIndex', rowIndex);
    // this.editing[rowIndex + '-' + cell] = false;
    // this.rows[rowIndex][cell] = event.target.value;
    // this.rows = [...this.rows];
    // console.log('UPDATED!', this.rows[rowIndex][cell]);
  }
  

  onClick() {
    this.router.navigate(['leads']);
  }

  createProject(){
    this.router.navigate(['createProjects/new']);
  }

  ngOnInit(): void {
  }

}
