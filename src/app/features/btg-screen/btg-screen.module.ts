import { NgModule } from '@angular/core';

import { BtgScreenComponent } from './btg-screen.component';
import { SharedModule } from '../shared/modules/shared.module';

import { AngularMaterialModule } from '../shared/modules/angular-material.module';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    BtgScreenComponent
  ],
  exports: [
    BtgScreenComponent,
  ],
  imports: [
    SharedModule,
    AngularMaterialModule,
    ToastrModule.forRoot({
        positionClass: 'toast-top-right',
    }),
  ],
})
export class BtgScreenModule { }
