import { Component,OnInit } from '@angular/core';
import { AppoitmentService } from '../appoitment.service';
import { Appoitment } from '../appoitment';

@Component({
  selector: 'app-appoitment',
  templateUrl: './appoitment.component.html',
  styleUrl: './appoitment.component.css'
})
export class AppoitmentComponent  {

  appoitments:Appoitment[]=[]
  constructor(private appoitmentService:AppoitmentService){}

  ngOnInit():void{
    this.getAppoitments();
  }
getAppoitments(){
  this.appoitmentService.getAllAppoitments().subscribe(data=>{
this.appoitments=data;

  })
}
delete(id:number){

  this.appoitmentService.deleteAppoitment(id).subscribe(data=>{
    console.log(data);
    this.getAppoitments();
  });


}

}
