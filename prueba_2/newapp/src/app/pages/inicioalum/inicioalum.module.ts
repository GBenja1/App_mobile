import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioalumPageRoutingModule } from './inicioalum-routing.module';

import { InicioalumPage } from './inicioalum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioalumPageRoutingModule
  ],
  declarations: [InicioalumPage]
})
export class InicioalumPageModule {}
