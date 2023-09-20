import { Component, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-chats',
  templateUrl: 'chats.page.html',
  styleUrls: ['chats.page.scss'],
})
export class ChatsPage {
  @ViewChild(IonContent, { static: false }) content!: IonContent;

  items: any[] | undefined;

  loading: boolean = false;

  constructor(
    private storage: Storage
  ) { }

  ionViewDidEnter() {
    this.storage.keys()
      .then(keys => {
        const promises = keys.map(key => this.storage.get(key));
        return Promise.all(promises);
      })
      .then(items => {
        this.items = items;
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  async getFromStorage() {
    return await this.storage.get('response');
  }

}
