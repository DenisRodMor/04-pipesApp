import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//Modulo personalizado
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Cambiar el locale de la app
import localeEs from '@angular/common/locales/es-CR';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRouterModule,
    BrowserModule,
    PrimeNgModule,
    SharedModule,
    VentasModule,
    BrowserAnimationsModule


  ],
  providers: [ {provide: LOCALE_ID, useValue: 'es-CR'}//SE AGREGA ESTO TABIEN PARA CAMBIAR EL IDIOMA DE LA APP

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
