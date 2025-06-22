import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appoitment } from './appoitment';

@Injectable({
  providedIn: 'root'
})
export class AppoitmentService {

  constructor(private httpClient:HttpClient) { }

  private baseUrl="http://localhost:8080/api/v2"
    private baseUrll="http://localhost:8080/api/v2/insert"
    private baseUrl3="http://localhost:8080/api/v2/appoitments"

 
  getAllAppoitments():Observable<Appoitment[]>{
    return this.httpClient.get<Appoitment[]>(`${this.baseUrl}`);
  }

  createAppoitment(appoitment:Appoitment):Observable<Appoitment>{
    return this.httpClient.post<Appoitment>(`${this.baseUrll}`,appoitment);
  }

  deleteAppoitment(id:number):Observable<object>{
  return  this.httpClient.delete(`${this.baseUrl3}/${id}`);
  }
}
