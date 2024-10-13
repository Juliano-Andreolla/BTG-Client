import { NgModule } from '@angular/core';

import { BtgScreenComponent } from './btg-screen.component';
import { SharedModule } from '../shared/modules/shared.module';

import { AngularMaterialModule } from '../shared/modules/angular-material.module';
import { ToastrModule } from 'ngx-toastr';
import { NumericInputPipe } from '../shared/pipes/numeric-input.pipe';

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
  providers: [NumericInputPipe]
})
export class BtgScreenModule { }
