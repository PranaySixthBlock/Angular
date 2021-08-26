import { Component , OnInit} from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'my-projects',
  templateUrl: './projects.component.html',
  styleUrls: [ './projects.component.scss' ]
})
export class ProjectsComponent implements OnInit  {
  
  constructor(private router:Router) { }

  files: File[] = [ ];

	onSelect(event) {
		this.files = (event.addedFiles[0]);
    console.log(this.files);
	}

	onRemove(event) {
		console.log(event);
		this.files.splice(this.files.indexOf(event), 1);
	}

  onClick() {
      this.router.navigate(['createLeads/new']);
    }

   ngOnInit(): void {
   }
}