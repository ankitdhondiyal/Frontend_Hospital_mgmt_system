import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from './medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private HttpClient:HttpClient) { }

  private baseurl="http://localhost:8080/api/v3/medicines"
    private baseurl2="http://localhost:8080/api/v3/insert"


  getMedicines():Observable<Medicine[]>{
    return this.HttpClient.get<Medicine[]>(`${this.baseurl}`);
  }

createMedicine(medicine:Medicine):Observable<Medicine>{
return this.HttpClient.post<Medicine>(`${this.baseurl2}`,medicine);
}

getMedicineById(id:number):Observable<Medicine>{
  return this.HttpClient.get<Medicine>(`${this.baseurl}/${id}`)
}

updateMedicine(id:number, medicine : Medicine):Observable<object>{
  return this.HttpClient.put<Medicine>(`${this.baseurl}/${id}`,medicine);
 
}

deleteMedicine(id:number):Observable<Object>{
return  this.HttpClient.delete(`${this.baseurl}/${id}`);

}

}
