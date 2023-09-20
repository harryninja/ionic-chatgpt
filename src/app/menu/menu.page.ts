import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.page.html',
  styleUrls: ['menu.page.scss'],
})
export class MenuPage {
  @ViewChild(IonContent, { static: false }) content!: IonContent;

  loading: boolean = false;

  constructor(
    private router: Router,
    private storage: Storage
  ) { }

  async ngOnInit() {
    await this.storage.create();
  }

  navigateToPage1() {
    this.router.navigate(['/home']);
  }

  navigateToPage2() {
    this.router.navigate(['/chats']);
  }
}
