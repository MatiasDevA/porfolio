import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundcomponentComponent } from './pagenotfoundcomponent/pagenotfoundcomponent.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: "home", component:InicioComponent
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path:"login", component:LoginComponent
  },
  {
    path: "register", component:RegisterComponent
  },
  {
    path: "**",
    component: PagenotfoundcomponentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
