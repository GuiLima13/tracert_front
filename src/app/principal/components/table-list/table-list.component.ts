import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EstabelecimentoFilterService } from 'src/app/service/filter/estabelecimento/estabelecimento-filter.service';
import { EstablishmentService } from 'src/app/service/http/establishment/establishment.service';
import { Establishment } from 'src/assets/shared/model/Establishment';
import { LiveFormDialogComponent } from '../live-form-dialog/live-form-dialog.component';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})


export class TableListComponent implements OnInit {

  
  constructor(private service : EstablishmentService,
    public dialog: MatDialog,
    private filterEstabelecimento : EstabelecimentoFilterService,
    private router : Router) { }

    filterEstab = this.filterEstabelecimento;

  list : any
  filter : string = ""

  ngOnInit(): void {
    this.getListEstablishment();

  }

  getListEstablishment(){
    this.service.findAll().subscribe(resp =>{
      console.log(resp)
      this.list = resp;
    })
  }

  getFilter(){
    if(this.filter.trim() === "" ){
      this.getListEstablishment();
    }else{
      this.service.findByName(this.filter).subscribe(resp =>{
        this.list = resp;
        console.log(this.list)
      })
    }
  }

  openEstabelecimento(value:Establishment): void {
    this.filterEstab.estabelecimentoAtual = value
    console.log( this.filterEstab.estabelecimentoAtual)
    const dialogRef = this.dialog.open(LiveFormDialogComponent, {
      width: '650px',
      height:'500px',
      hasBackdrop:true,
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  
}
