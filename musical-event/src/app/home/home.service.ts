import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { HomeApiResponse } from './home.model';
import { ConfigService } from '../shared/services/config.service';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private http = inject(HttpClient);
  private configUrl = inject(ConfigService);

  getData(): Observable<HomeApiResponse> {
    const apiURL = this.configUrl.getBaseURL() + 'home';
    return this.http.get<HomeApiResponse>(apiURL).pipe(
      catchError((error: any) => {
        console.error(error);
        throw new error('algo pasó');
      })
    );
  }
}
