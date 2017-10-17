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
export class LifeLogProvider extends BaseEntityProvider{

  constructor(public http: Http, public storage:Storage) {
    super(http, storage);
    this.STORAGE_KEY = "_lifelogs";
  }
}
