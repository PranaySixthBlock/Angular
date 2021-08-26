import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { ColumnMode } from '../../../../../projects/swimlane/ngx-datatable/src/public-api';

@Component({
  selector: 'app-result',
  templateUrl : './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

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

  createResult(){
    this.router.navigate(['settings/createResult/new']);
  }

  ngOnInit(): void {
  }

}
