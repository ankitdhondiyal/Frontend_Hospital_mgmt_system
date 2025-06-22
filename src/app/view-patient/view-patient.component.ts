import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../patient';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrl: './view-patient.component.css'
})
export class ViewPatientComponent {

id:number=0;
patient:Patient= new Patient();

  constructor(private patientservice:PatientService, private route:ActivatedRoute) {
  }

  ngOnInit():void{
    this.id=this.route.snapshot.params['id'];
    this.patientservice.getPatientById(this.id).subscribe(data=>{
      console.log("recevid"+data);
      
this.patient=data;
    })
  }
}
