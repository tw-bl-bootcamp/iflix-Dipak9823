import { Injectable } from '@angular/core';
import { HttpClient}  from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RootServiceService {

  url="http://localhost:3000";
  constructor(private http:HttpClient) { }

  login(loginData){ 
    return this.http.post(`${this.url}/login`,loginData);     
  }

  getMovies(){ 
    return this.http.get(`${this.url}/movies`);     
  }

  getTheater() {
    return this.http.get(`${this.url}/theater`);
  }
}
