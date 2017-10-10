import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';

import { PersonaProvider } from '../../providers/providers';
import {Persona} from "../../models/persona";

@IonicPage()
@Component({
  selector: 'page-persona-detail',
  templateUrl: 'persona-detail.html'
})
export class PersonaDetailPage {
  persona: Persona;

  constructor(public navCtrl: NavController, navParams: NavParams, public personas: PersonaProvider, public modalCtrl: ModalController) {
    this.persona = navParams.get('persona')
  }

  editItem() {

    let addModal = this.modalCtrl.create('PersonaFormPage', {'persona':this.persona});
    addModal.onDidDismiss(item => {
      if (item) {
        this.personas.updateItem(item);
        this.personas.save()
        this.persona = item;
      }
    });
    addModal.present();
  }

}
