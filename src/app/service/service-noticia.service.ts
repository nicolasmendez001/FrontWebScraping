import { ModelNoticia } from './../models/ModelNoticia';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceNoticiaService {

  constructor(private http: HttpClient) { }

  /**
   * getNoticias
   */
  public getNoticias(): Observable<ModelNoticia[]> {
    return this.http.get<ModelNoticia[]>('http://localhost:3000/getNoticias');
  }
}
