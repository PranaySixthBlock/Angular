import { Component, OnInit, ViewChild } from '@angular/core';
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
      "fullName": "Pranay",
      "number": 123456,
      "callId": 10,
      "leadId": 3,
      "caller" : "member",
      "logType": "log",
      "result" : "result",
      "resultDetails" : 'details',
      "callDate" : '100',
      "callTime" : '100',
      "comments" : 'no comments',
      "apptDate" : 'date',
      "nextCallDate" : 27
    },
    {
      "fullName": "Teja",
      "number": 123456,
      "callId": 10,
      "leadId": 5,
      "caller" : "member",
      "logType": "log",
      "result" : "result",
      "resultDetails" : 'details',
      "comments" : 'no comments',
      "apptDate" : 'date',
      "nextCallDate" : 21
    },
  ];

  temp = [];
  @ViewChild(DatatableComponent) table: DatatableComponent;

  ColumnMode = ColumnMode;

  constructor() {
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
      return d.fullName.toLowerCase().indexOf(val) !== -1 || !val;
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
  
  ngOnInit(): void {
  }

}
