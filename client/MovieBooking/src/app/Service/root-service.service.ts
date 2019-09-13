import { Injectable } from '@angular/core';
import { HttpClient}  from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RootServiceService {

  url="http://localhost:8000";
  constructor(private http:HttpClient) { }

  login(loginData){ 
    return this.http.post(`${this.url}/login`,loginData);     
  }
}
