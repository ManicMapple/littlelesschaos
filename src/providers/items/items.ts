import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Item } from '../../models/item';
import { Api } from '../api/api';
import { Storage } from '@ionic/storage';

@Injectable()
export class Items {

  private STORAGE_KEY: string = '_items';

  items: Item[] = [];

  defaultItem: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };

  constructor(public http: Http, public api: Api, public storage: Storage) {
  }

  query(params?: any):Promise<any> {
    return this.load();
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
  }

  load():Promise<any> {
    return this.storage.get(this.STORAGE_KEY).then((value) => {
      if (value) {
        this.items = value;
        return this.items;
      } else {
        this.items = [];
        return this.items;
      }
    });
  }

  save():Promise<any> {
    return this.storage.set(this.STORAGE_KEY, this.items);
  }

}
