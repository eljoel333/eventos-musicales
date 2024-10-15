import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private baseURL = 'https://localhost:7137/api/';

  getBaseURL() {
    return this.baseURL;
  }

  constructor() {}
}
