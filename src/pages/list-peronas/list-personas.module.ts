import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ListPersonasPage } from './list-personas';

@NgModule({
  declarations: [
    ListPersonasPage,
  ],
  imports: [
    IonicPageModule.forChild(ListPersonasPage),
    TranslateModule.forChild()
  ],
  exports: [
    ListPersonasPage
  ]
})
export class ListPersonasPageModule { }
