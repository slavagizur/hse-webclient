/**
 * Результат выполнения расчета.
 *
 * @author vbotalov
 */
export class CalcResult {

  constructor(public result: number,
              public success: boolean,
              public message: string,
              public executor: string,
              public sourceRequest: string) {
  }

}
