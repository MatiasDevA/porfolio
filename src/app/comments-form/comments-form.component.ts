import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comments-form',
  templateUrl: './comments-form.component.html',
  styleUrls: ['./comments-form.component.scss']
})
export class CommentsFormComponent {

  public formLogin: FormGroup;

  isCheck= true;
  showError=true;
  archivoImage: string = "";

  constructor(private formBuilder:FormBuilder) {
    this.formLogin = this.formBuilder.group({
      name: ["", Validators.required],
      imagen: ["", Validators.required],
      message: ["", [Validators.required,  Validators.minLength(10)]],
    });
   }

   get Name() {
    return this.formLogin.get("name");
  }
  get Imagen() {
    return this.formLogin.get("imagen");
  }
  
  get Message() {
    return this.formLogin.get("message");
  }




  changeImageBase64(event: any) {
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = () => {
      this.archivoImage = reader.result as string;
    };
  }
}

