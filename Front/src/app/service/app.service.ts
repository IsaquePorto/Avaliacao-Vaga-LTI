import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private URL = 'http://localhost:8080/conta';

  constructor(private http: HttpClient) { }

  listarContas() {
    return this.http.get(this.URL);
  }

  get() {
    return this.http.get(this.URL);
  }

  post(obj: any) {
    return this.http.post('http://localhost:8080/addConta', obj);
  }

  getPagination(req: any) {
    const options = this.createRequestOption(req);
    return this.http.get('http://localhost:8080/extrato/'+1, { params: options });
  }



  createRequestOption = (req?: any): HttpParams => {

    let options: HttpParams = new HttpParams();
    if (req) {
      Object.keys(req).forEach((key) => {
        if (key !== 'sort' && req[key] !== undefined && req[key] !== null) {
          options = options.set(key, req[key]);
        }
      });
      if (req.sort) {
        req.sort.forEach((val: any) => {
          options = options.append('sort', val);
        });
      }
    }
    return options;

  };
}
