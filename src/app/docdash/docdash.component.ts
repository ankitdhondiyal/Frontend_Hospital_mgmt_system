import { Component } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';
import { DocauthService } from '../docauth.service';

@Component({
  selector: 'app-docdash',
  templateUrl: './docdash.component.html',
  styleUrl: './docdash.component.css',
})
export class DocdashComponent {
  constructor(
    private patientService: PatientService,
    private router: Router,
    private docAuth: DocauthService
  ) {}
  patients: Patient[] = [];

  ngOnInit(): void {
    this.getpatients();
  }
  getpatients() {
    this.patientService.getPatientList().subscribe((data) => {
      this.patients = data;
    });
  }
  update(id: number) {
    this.router.navigate(['update_patient', id]);
  }
  delete(id: number) {
    this.patientService.delete(id).subscribe((data) => {
      console.log(data);
      this.getpatients();
    });
  }
  view(id: number) {
    this.router.navigate(['view-patient', id]);
  }
  logout() {
    this.docAuth.logout();
    this.router.navigate(['home']);
  }
}
