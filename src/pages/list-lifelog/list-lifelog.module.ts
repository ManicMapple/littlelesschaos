import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ListLifeLogPage } from './list-lifelog';

@NgModule({
  declarations: [
    ListLifeLogPage,
  ],
  imports: [
    IonicPageModule.forChild(ListLifeLogPage),
    TranslateModule.forChild()
  ],
  exports: [
    ListLifeLogPage
  ]
})
export class ListPersonasPageModule { }
