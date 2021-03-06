/* tslint:disable:max-line-length */
/**
 * Test Swagger
 * v1
 * example.com/swagger
 */

import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

export interface PositionsParams {
  /**
   * Position Id
   * format: int32
   */
  positionId: number;
  /** API version */
  version: string;
}

@Injectable()
export class CareerService {
  constructor(private http: HttpClient) {}

  /**
   * get career
   * http://example.com/swagger/swagger-ui.html#!/Career/Career
   */
  positions(params: PositionsParams): Observable<object> {
    const pathParams = {
      positionId: params.positionId,
      version: params.version,
    };
    return this.http.get<object>(`/api/career/v${pathParams.version}/positions/${pathParams.positionId}`);
  }
}
