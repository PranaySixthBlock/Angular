import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-createCallStatus',
  templateUrl: './createCallStatus.component.html',
  styleUrls: ['./createCallStatus.component.scss']
})
export class CreateCallStatusComponent implements OnInit {

  constructor(private router:Router) { }

  onClick() {
    this.router.navigate(['leads']);
  }

  ngOnInit(): void {
  }

}
