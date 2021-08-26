import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-createLogType',
  templateUrl: './createLogType.component.html',
  styleUrls: ['./createLogType.component.scss']
})
export class CreateLogTypeComponent implements OnInit {

  constructor(private router:Router) { }

  onClick() {
    this.router.navigate(['leads']);
  }

  ngOnInit(): void {
  }

}
