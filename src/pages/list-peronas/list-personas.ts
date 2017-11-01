import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController} from 'ionic-angular';

import {Persona} from '../../models/persona';
import {PersonaProvider} from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-list-personas',
  templateUrl: 'list-personas.html'
})
export class ListPersonasPage {
  currentPersonas: Persona[];

  constructor(public navCtrl: NavController, public personas: PersonaProvider, public modalCtrl: ModalController) {

    this.currentPersonas = [];
    this.personas.query().then(
      personas => {
        this.currentPersonas = personas;
      }
    );
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addItem() {

    let addModal = this.modalCtrl.create('PersonaFormPage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.personas.add(item);
        this.personas.save();
      }
    })
    addModal.present();
  }

  editItem(item: Persona) {

    let addModal = this.modalCtrl.create('PersonaFormPage', {'persona':item});
    addModal.onDidDismiss(item => {
      if (item) {
        console.log(item);
        this.personas.updateItem(item);
        this.personas.save();
      }
    });
    addModal.present();
  }



  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    this.personas.delete(item);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Persona) {

    this.navCtrl.push('PersonaDetailPage', {
      persona: item
    });
    }
}
