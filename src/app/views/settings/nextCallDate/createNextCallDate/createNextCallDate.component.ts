import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-createNextCallDate',
  templateUrl: './createNextCallDate.component.html',
  styleUrls: ['./createNextCallDate.component.scss']
})
export class CreateNextCallDateComponent implements OnInit {

  constructor(private router:Router) { }

  onClick() {
    this.router.navigate(['leads']);
  }

  ngOnInit(): void {
  }

}
