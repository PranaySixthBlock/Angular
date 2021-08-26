import {Component} from '@angular/core';
import { navItems } from '../../_nav';

import {Router} from "@angular/router";
@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;

  constructor(private router:Router) {
        
  }
  ngOnInit(): void {
    console.log(localStorage.getItem('token'))
    if(localStorage.getItem('token')==null){
      this.router.navigate(['login']);
    }
  }
  logOut(){
    localStorage.clear();
    this.router.navigate(['login']);
  }
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
}
