import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CalcModule} from './calc/calc.module';
import {CalcService} from './calc/services/calc.service';

/**
 * Основной модуль приложения.
 * @author vbotalov
 */
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CalcModule
  ],
  providers: [CalcService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
