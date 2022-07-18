import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsFormComponent } from './comments-form/comments-form.component';
import { CommentsComponent } from './comments/comments.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundcomponentComponent } from './pagenotfoundcomponent/pagenotfoundcomponent.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import { UsersFormComponent } from './users/users-form/users-form.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

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
    path: "comment/form", component:CommentsFormComponent, ...canActivate(() => redirectUnauthorizedTo(['/register']))
  },
  {
    path: "list",
    component: UsersComponent,  ...canActivate(() => redirectUnauthorizedTo(['/register']))
  },
  {
    path: "list/form/:id",
    component: UsersFormComponent,  ...canActivate(() => redirectUnauthorizedTo(['/register']))
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
