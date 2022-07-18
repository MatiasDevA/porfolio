import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public isLogged:boolean = false;

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }


  
  

  onLogOut(){
    this.auth.logout(). then(() => {
      this.router.navigate(['/login']);
    }). catch()
  }

  onCheckUser(){
    const token = localStorage.getItem("token");
    if (token == null) {
     return this.isLogged = true;
    } else {
      return  this.isLogged = false;
    }
  }
}
