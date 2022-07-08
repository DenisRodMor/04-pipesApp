import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {DataViewModule} from 'primeng/dataview';

@NgModule({
  exports:[
    ButtonModule,
    CardModule
  ]
})
export class PrimeNgModule { }
