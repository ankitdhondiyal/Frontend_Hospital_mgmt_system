import { Component } from '@angular/core';
import { Appoitment } from '../appoitment';
import { AppoitmentService } from '../appoitment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-appoitment',
  templateUrl: './create-appoitment.component.html',
  styleUrl: './create-appoitment.component.css'
})
export class CreateAppoitmentComponent {

appoitment:Appoitment = new Appoitment();

constructor(private appoitmentService:AppoitmentService,private router:Router){}

saveAppoitment(){
this.appoitmentService.createAppoitment(this.appoitment).subscribe(data=>{
  console.log(data);

  this.goToAppoitment();
})
}

onSubmit(){
  this.saveAppoitment();

}

goToAppoitment(){
  this.router.navigate(['/appointmentlist'])
}

}
