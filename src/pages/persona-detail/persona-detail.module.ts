import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { PersonaDetailPage } from './persona-detail';

@NgModule({
  declarations: [
    PersonaDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonaDetailPage),
    TranslateModule.forChild()
  ],
  exports: [
    PersonaDetailPage
  ]
})
export class PersonaDetailPageModule {
}
