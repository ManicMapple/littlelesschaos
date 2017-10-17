import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController} from 'ionic-angular';


import {LifeLogProvider} from "../../providers/lifelog/lifelog";
import {Lifelog} from "../../models/lifelog";

@IonicPage()
@Component({
  selector: 'page-list-lifelog',
  templateUrl: 'list-lifelog.html'
})
export class ListLifeLogPage {
  currentLifeLogs: Lifelog[];

  constructor(public navCtrl: NavController, public lifeLogController: LifeLogProvider, public modalCtrl: ModalController) {

    this.lifeLogController.query().then(
      lifelogs => {
        this.currentLifeLogs = lifelogs;
        for(let i=0;i<100;i++) {
          this.currentLifeLogs.push(new Lifelog({
            'title': "test title "+i,
            'date': "2017.10.17 22:11",
            'content': "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
          }));
        }

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
        this.lifeLogController.add(item);
        this.lifeLogController.save();
      }
    });
    addModal.present();
  }

  editItem(item: Lifelog) {

    let addModal = this.modalCtrl.create('PersonaFormPage', {'persona':item});
    addModal.onDidDismiss(item => {
      if (item) {
        console.log(item);
        this.lifeLogController.updateItem(item);
        this.lifeLogController.save();
      }
    });
    addModal.present();
  }



  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    this.lifeLogController.delete(item);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Lifelog) {

    this.navCtrl.push('PersonaDetailPage', {
      persona: item
    });
    }
}
