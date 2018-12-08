import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartCalcComponent } from './componens/start-calc/start-calc.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CalcLogComponent } from './componens/calc-log/calc-log.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [StartCalcComponent, CalcLogComponent],
  exports: [StartCalcComponent, CalcLogComponent]
})
export class CalcModule { }
