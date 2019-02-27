import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = 'https://reqres.in/api'

  constructor(private http: HttpClient) { }


  getUser(){

    return this.http.get(`${this.url}/users?per_page=6`);
  }



}
