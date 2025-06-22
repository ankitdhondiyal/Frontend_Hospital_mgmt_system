import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClient:HttpClient) { }

private baseUrl="http://localhost:8080/api/v1"
private baseUrl2="http://localhost:8080/api/v1/insert"
private baseUrl3="http://localhost:8080/api/v1/patients"



getPatientList():Observable<Patient[]>{
  return this.httpClient.get<Patient[]>(`${this.baseUrl3}`)
}

delete(id:number):Observable<Object>{
return this.httpClient.delete(`${this.baseUrl}/${id}`);
}
createPatient(patient:Patient):Observable<Patient>{
return this.httpClient.post<Patient>(`${this.baseUrl2}`, patient);
}
getPatientById(id:number):Observable<Patient>{
return this.httpClient.get<Patient>(`${this.baseUrl3}/${id}`)
}

updatePatient(id:number,patient:Patient):Observable<object>{
  return this.httpClient.put(`${this.baseUrl3}/${id}`,patient)
}
}
