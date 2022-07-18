import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthGoogleService } from '../../core/auth-google.service';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
      formRecycler:FormGroup;
    public  isLogged:boolean = false
      
  constructor(private formBuilder:FormBuilder, private Auth:AuthService, private router:Router, private googleService:AuthGoogleService) { }

  ngOnInit(): void {

    this.formRecycler = this.formBuilder.group({
      email:["",[Validators.required,Validators.email]],
      password:["",[Validators.required,Validators.minLength(5)]]
    })

    this.onCheckUser();

  }

  


  onCheckUser(){
    const token = localStorage.getItem("token");
    if (token != null) {
     return this.isLogged = false;
    } else {
      return  this.isLogged = true;
    }
  }


  login(){
    this.Auth.login(this.formRecycler.value).then(response => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Usuario Correcto',
        showConfirmButton: false,
        timer: 3500
      })
      console.log(response);
      this.onCheckUser();
      this.router.navigate(['/home'])
    })
    .catch(error => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Usuario o contraseña Incorrecta'
      })
    })
  }


  onClickWithGoogle(){
    this.googleService.authGoogle().then(response => {
      this.router.navigate(['/home'])
    })
    .catch()
  }

}
