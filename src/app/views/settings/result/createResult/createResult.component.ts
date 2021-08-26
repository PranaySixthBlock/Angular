import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-createResult',
  templateUrl: './createResult.component.html',
  styleUrls: ['./createResult.component.scss']
})
export class CreateResultComponent implements OnInit {

  constructor(private router:Router) { }

  onClick() {
    this.router.navigate(['leads']);
  }

  ngOnInit(): void {
  }

}
