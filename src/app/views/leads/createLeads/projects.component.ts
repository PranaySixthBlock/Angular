import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(private router:Router) { }

  onClick() {
    this.router.navigate(['leads']);
  }

  createProject(){
    this.router.navigate(['createProjects/new']);
  }

  ngOnInit(): void {
  }

}
