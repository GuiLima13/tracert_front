import { Component, OnInit } from '@angular/core';
import { User } from 'src/assets/shared/model/User';
import { UserService } from '../service/http/user/user.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  name:string = "";
  email:string = "";
  password:string = "";
  username:string = "";

  
  user = {} as User;

  constructor(private userService : UserService,
              private router : Router) { }

  ngOnInit(): void {
  }

  saveUser(){
    this.user.email = this.email;
    this.user.name = this.name;
    this.user.password = this.password;
    this.user.username = this.username
    this.userService.createUser(this.user).subscribe(resp =>{
      
        alert("cadastro realizado com sucesso")
        this.router.navigate(['/login']);
      
    });
  }

}
