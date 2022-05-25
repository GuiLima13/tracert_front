import { Component, OnInit } from '@angular/core';
import { User } from 'src/assets/shared/model/User';
import { UserService } from '../service/http/user/user.service';
import { Router} from '@angular/router';
import { UserFilterService } from '../service/filter/user/userFilter.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string = "";
  password:string = "";

  user = {} as User;
  
  constructor(private userService :UserService,
              private router : Router,
              private userFilter : UserFilterService) { }

  ngOnInit(): void {
  }

  logar(){
    this.user.username = this.username;
    this.user.password = this.password;

    this.userService.login(this.user).subscribe(resp =>{
      if(resp.status == true){
       this.userFilter.user.email = resp.email;
       this.userFilter.user.name = resp.name;
       this.userFilter.user.username = resp.username;
        localStorage.setItem('user', resp.username);
        localStorage.setItem('name', resp.name);
       this.router.navigate(['/inicio']);
      }else{
        window.alert("Usuario ou senha invalidos")
      }
    })
  }
}
