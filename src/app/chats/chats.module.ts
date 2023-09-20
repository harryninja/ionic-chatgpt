import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatsPage } from './chats.page';

import { ChatsPageRoutingModule } from './chats-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ChatsPage]
})
export class ChatsPageModule { }
