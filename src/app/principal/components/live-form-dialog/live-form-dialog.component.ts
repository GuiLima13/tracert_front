import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AvaliationService } from 'src/app/service/filter/avaliation/avaliation.service';
import { AvaliationHttpService } from 'src/app/service/http/avaliation/avaliation.service';
import { EstabelecimentoFilterService } from 'src/app/service/filter/estabelecimento/estabelecimento-filter.service';
import { EstablishmentService } from 'src/app/service/http/establishment/establishment.service';
import { Establishment } from 'src/assets/shared/model/Establishment';
import { User } from 'src/assets/shared/model/User';
import { UserDAO } from 'src/assets/shared/model/dao/UserDAO';
import { Avaliation } from 'src/assets/shared/model/Avaliation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-live-form-dialog',
  templateUrl: './live-form-dialog.component.html',
  styleUrls: ['./live-form-dialog.component.css']
})
export class LiveFormDialogComponent  implements OnInit {

  filterAvaliation = this.filterAvaliationC;
  nota = "0";
  constructor(
    public dialogRef: MatDialogRef<LiveFormDialogComponent>,
    private filterAvaliationC : AvaliationService,
    private filterEstabelecimento : EstabelecimentoFilterService,
    private router: Router,
    private httpAvaliation : AvaliationHttpService,
    ) { }

    filterEstab = this.filterEstabelecimento;

  ngOnInit(): void {
    
    
  }
  
  escolherNota(value : string){
    this.nota = value;
  }
  cancel(): void {
    this.dialogRef.close();
  }

  avaliar(){
  
   var estabelec : Establishment = this.filterEstabelecimento.estabelecimentoAtual;
    var user = {} as User
    
    user.username = localStorage.getItem('user') || '';

    var avaliation = {} as Avaliation;

    avaliation.establishment = estabelec;
    avaliation.user = user;

  //var  nota  = document.querySelector('input[name="avalia"]:checked');

  avaliation.nota = this.nota//?.outerHTML.valueOf().charAt(83) == null? "" : nota?.outerHTML.valueOf().charAt(83);
  
  if(localStorage.getItem('user') == null){
  
    alert("Necessario realizar o login para avaliar")
    this.cancel()
    this.router.navigate(['/login']);
  }else{
    
  this.httpAvaliation.create(avaliation).subscribe(resp =>{
    this.cancel()
  })
  }
  
  }

}
