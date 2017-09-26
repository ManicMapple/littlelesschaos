import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { PersonaFormPage } from './persona-form';

@NgModule({
  declarations: [
    PersonaFormPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonaFormPage),
    TranslateModule.forChild()
  ],
  exports: [
    PersonaFormPage
  ]
})
export class ItemCreatePageModule { }
