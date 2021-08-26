import { Component } from '@angular/core';
import axios from 'axios';

import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  // styles : [""]
})
export class LoginComponent { 
constructor(private router:Router) {
      
}
  onSubmit(data){
    
    axios.post('http://localhost:3000/user/api/company/user/login',data)
    .then((res)=>{
      localStorage.setItem('token',res.data.data.token);
      this.router.navigate(['dashboard']);
    })
  }

  onClick() {
    this.router.navigate(['register']);
  }

}
