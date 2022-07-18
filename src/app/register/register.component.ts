import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form:FormGroup;
  constructor( private formBuilder:FormBuilder, private regAuth:AuthService, private router:Router) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      email: ["",[ Validators.required, Validators.email]],
      password: ["",[Validators.required, Validators.minLength(5),Validators.maxLength(15)] ]
    })
  }



  register(){
    this.regAuth.register(this.form.value).then(response => {
      console.log(response);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'El usuario ha sido correctamente registrado',
        showConfirmButton: false,
        timer: 3500
      })
      this.router.navigate(['/login'])
    }).catch (error => console.log(error));
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Error con la registración'
    })

  }

}
