import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form:any;
  constructor( private formBuilder:FormBuilder) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      name: ["", Validators.required, Validators.minLength(4)],
      email: ["", Validators.required, Validators.email],
      password: ["",Validators.required, Validators.minLength(5),Validators.maxLength(15) ]
    })
  }

}
