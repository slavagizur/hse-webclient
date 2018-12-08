import {Injectable} from '@angular/core';
import {CalcResult} from '../model/calc-result';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {CalcRequest} from '../model/calc-request';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  private resultLog: CalcResult[] = [];

  private serviceUrl: string;

  constructor(private http: HttpClient) {
    this.serviceUrl = '/api/calculator/calc';
  }

  getResultLog(): CalcResult[] {
    return this.resultLog;
  }

  startCalc(request: CalcRequest): void {
    this.http.post<CalcResult>(this.serviceUrl, request).subscribe(result => this.addResult(result));
  }

  private addResult(result: CalcResult): void {
    this.resultLog.push(result);
  }
}
