import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as _ from 'lodash';


import { Storage } from '@ionic/storage';

@Injectable()
export class BaseEntityProvider {

  protected STORAGE_KEY: string = null;

  elements: any[] = [];

  defaultElement: any = {
  };

  constructor(public http: Http, public storage: Storage) {
  }

  query(params?: any):Promise<any> {
    return this.load();
  }

  add(item: any) {
    this.elements.push(item);
  }

  updateItem(item: any) {

    let index = _.findIndex(this.elements,  {id:item.id});
    this.elements.splice(index, 1, item);
    console.log(this.elements);
  }

  delete(item: any) {
  }

  load():Promise<any> {
    return this.storage.get(this.STORAGE_KEY).then((value) => {
      if (value) {
        this.elements = value;
        return this.elements;
      } else {
        this.elements = [];
        return this.elements;
      }
    });
  }

  save():Promise<any> {
    return this.storage.set(this.STORAGE_KEY, this.elements);
  }

  getStorageKey():string {

    if(this.STORAGE_KEY == null) {
      throw new Error("tbi stoarge key");
    }
    return this.STORAGE_KEY;
  }

}
