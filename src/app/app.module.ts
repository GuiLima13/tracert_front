import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../assets/shared/header/header.component';
import { LoginModule } from './login/login.module';
import { RegisterUserModule } from './register-user/register-user.module';
import { PrincipalModule } from './principal/principal.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from'@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { RegisterEstablishmentModule } from './register-establishment/register-establishment.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    RegisterUserModule,
    PrincipalModule,
    BrowserAnimationsModule,
    MatMenuModule,
    HttpClientModule,
    RegisterEstablishmentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
