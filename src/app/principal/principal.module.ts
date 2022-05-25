import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { CarouselComponent } from './components/carousel/carousel.component';
import { TableListComponent } from './components/table-list/table-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from'@angular/material/dialog';
import { LiveFormDialogComponent } from './components/live-form-dialog/live-form-dialog.component';
import { AvaliationStarComponent } from './components/avaliation-star/avaliation-star.component';



@NgModule({
  declarations: [
    PrincipalComponent,
    CarouselComponent,
    TableListComponent,
    LiveFormDialogComponent,
    AvaliationStarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    IvyCarouselModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule
  ]
})
export class PrincipalModule { }
