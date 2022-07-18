import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss']
})
export class UsersFormComponent  {
  public formLogin: FormGroup;

  constructor(private formBuilder:FormBuilder) {
    this.formLogin = this.formBuilder.group({
      name: ["", Validators.required],
      apellido: ["", Validators.required],
    });
   }

   get Name() {
    return this.formLogin.get("name");
  }
  get Apellido() {
    return this.formLogin.get("apellido");
  }
  
 
  
}
