import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {DataViewModule} from 'primeng/dataview';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    CardModule,
    DataViewModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
