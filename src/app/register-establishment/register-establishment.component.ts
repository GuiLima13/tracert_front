import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Adress } from 'src/assets/shared/model/Adress';
import { Establishment } from 'src/assets/shared/model/Establishment';
import { EstablishmentService } from '../service/http/establishment/establishment.service';

@Component({
  selector: 'app-register-establishment',
  templateUrl: './register-establishment.component.html',
  styleUrls: ['./register-establishment.component.css']
})
export class RegisterEstablishmentComponent implements OnInit {

  name:string = "";
  street:string = "";
  number:string = "";
  city:string = "";
  state:string = "";
  description:string = "";

  establishment = {} as Establishment
  adress = {} as Adress

  constructor(private service : EstablishmentService,
              private router : Router) { }

  ngOnInit(): void {
  }

  create(){
    this.adress.city = this.city;
    this.adress.number = this.number;
    this.adress.state = this.state;
    this.adress.street = this.street;
    this.establishment.adress = this.adress;
    this.establishment.description = this.description;
    this.establishment.name = this.name;

    if(this.city === "" || this.number === "" || this.state === "" || this.street === "" || this.description === "" || this.name === ""){
      alert("Informe todos os campos")
    }else{
      this.service.create(this.establishment).subscribe(resp =>{
        this.router.navigate(['/inicio']);
      })
    }
    
  }
}