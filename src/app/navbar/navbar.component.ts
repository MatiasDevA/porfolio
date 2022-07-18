import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

 public isLogged:boolean = false;

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {

    this.onCheckUser()
  }


  onLogOut(){
    this.auth.logout(). then(() => {
      this.router.navigate(['/login']);
      localStorage.removeItem('token')
    }). catch()
  }

  onCheckUser(){
    if (localStorage.getItem('token') == null) {
      this.isLogged = false;
    } else {
      this.isLogged = true;
    }
  }



}
