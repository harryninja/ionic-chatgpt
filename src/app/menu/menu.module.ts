import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuPage } from './menu.page';

import { MenuPageRoutingModule } from './menu-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [MenuPage]
})
export class MenuPageModule { }
