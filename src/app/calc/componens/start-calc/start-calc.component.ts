import {Component, OnInit} from '@angular/core';
import {CalcRequest} from '../../model/calc-request';
import {CalcService} from '../../services/calc.service';

/**
 * Компонент запуска расчетов.
 *
 * @author vbotalov
 */
@Component({
  selector: 'app-start-calc',
  templateUrl: './start-calc.component.html',
  styleUrls: ['./start-calc.component.css']
})
export class StartCalcComponent implements OnInit {

  request: CalcRequest = new CalcRequest(10, 12.5, '+');

  constructor(private calcService: CalcService) {
  }

  ngOnInit() {
  }

  startCalc(): void {
    this.calcService.startCalc(this.request);
  }

}
