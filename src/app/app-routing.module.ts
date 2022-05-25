import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { RegisterEstablishmentComponent } from './register-establishment/register-establishment.component';
import { RegisterUserComponent } from './register-user/register-user.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'inicio', component: PrincipalComponent},
  {path: 'registro', component: RegisterUserComponent},
  {path: 'registro-estabelecimento', component: RegisterEstablishmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
