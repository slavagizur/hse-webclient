import {Component, OnInit} from '@angular/core';
import {CalcService} from '../../services/calc.service';
import {CalcResult} from '../../model/calc-result';

/**
 * Компонент вывода лога расчетов.
 *
 * @author vbotalov
 */
@Component({
  selector: 'app-calc-log',
  templateUrl: './calc-log.component.html',
  styleUrls: ['./calc-log.component.css']
})
export class CalcLogComponent implements OnInit {

  constructor(private calcService: CalcService) {
  }

  ngOnInit() {
  }

  resultLogs(): CalcResult[] {
    return this.calcService.getResultLog();
  }

}
