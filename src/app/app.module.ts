import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BtgScreenModule } from './features/btg-screen/btg-screen.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BtgScreenModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
