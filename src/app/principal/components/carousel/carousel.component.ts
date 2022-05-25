import { Component, OnInit } from '@angular/core';
import { EstablishmentService } from 'src/app/service/http/establishment/establishment.service';
import { Establishment } from 'src/assets/shared/model/Establishment';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor(private service : EstablishmentService) { }

  
  list : any
  filter : Establishment[] = []
  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.service.findTopFive().subscribe(resp =>{
      this.list = resp
    })
  }
}
