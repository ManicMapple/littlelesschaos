import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {BaseEntityProvider} from "../BaseEntityProvider";
import { Storage } from '@ionic/storage';

/*
  Generated class for the PersonaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PersonaProvider extends BaseEntityProvider{

  constructor(public http: Http, public storage:Storage) {
    super(http, storage);
    console.log('Hello PersonaProvider Provider');
    this.STORAGE_KEY = "_personas";
  }
}
