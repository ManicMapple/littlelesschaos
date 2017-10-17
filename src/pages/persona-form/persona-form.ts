import {Component, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Camera} from '@ionic-native/camera';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {Persona} from "../../models/persona";
import * as shortid from "shortid";
//import {generateUID} from "../../utils";

@IonicPage()
@Component({
  selector: 'page-persona-form',
  templateUrl: 'persona-form.html'
})
export class PersonaFormPage {
  @ViewChild('fileInput') fileInput;

  isReadyToSave: boolean;

  persona: Persona;

  form: FormGroup;
  is_new: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, formBuilder: FormBuilder, public camera: Camera) {

    let name = "";
    let about = "";
    let birthdate = "";
    let profile_picture = "";

    let p = this.navParams.get("persona");
    if (p) {
      this.persona = p;
      name = p.name;
      about = p.about;
      birthdate = p.birthate;
      profile_picture = p.profilePic;
      this.is_new = false;
    }else{
      this.is_new = true;
    }


    this.form = formBuilder.group({
      profilePic: [profile_picture],
      name: [name, Validators.required],
      about: [about],
      birthate: birthdate
    });

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });
  }

  ionViewDidLoad() {

  }

  getPicture() {
    if (Camera['installed']()) {
      this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        targetWidth: 96,
        targetHeight: 96
      }).then((data) => {
        this.form.patchValue({'profilePic': 'data:image/jpg;base64,' + data});
      }, (err) => {
        alert('Unable to take photo');
      })
    } else {
      this.fileInput.nativeElement.click();
    }
  }

  processWebImage(event) {
    let reader = new FileReader();
    reader.onload = (readerEvent) => {

      let imageData = (readerEvent.target as any).result;
/*
     // let uri = "data:image/jpeg;base64," + imageData;
      let options = {
        uri: imageData,
        folderName: 'cache',
        quality: 90,
        width: 800,
        height: 800
      } as ImageResizerOptions;

      this.imageResizer
        .resize(options)
        .then((filePath: string) => {
        console.log('FilePath', filePath);
          this.form.patchValue({'profilePic': filePath});
        })
        .catch(e => {
          console.log(e);
        });
      */

      this.form.patchValue({'profilePic': imageData});
    };

    reader.readAsDataURL(event.target.files[0]);
  }

  getProfileImageStyle() {
    return 'url(' + this.form.controls['profilePic'].value + ')'
  }

  /**
   * The user cancelled, so we dismiss without sending data back.
   */
  cancel() {
    this.viewCtrl.dismiss();
  }

  /**
   * The user is done and wants to create the item, so return it
   * back to the presenter.
   */
  done() {
    if (!this.form.valid) {
      return;
    }

    let data:any = this.form.value;

    if(this.persona == null) {
     //this.persona.id = generateUID();
     data.id = shortid.generate();
    }else{
      data.id = this.persona.id;
    }

    this.viewCtrl.dismiss(data);
  }
}
