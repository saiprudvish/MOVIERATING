import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent  {

  constructor(private router :Router){}
  
  @Input() productObj:any;


  onSelectImage(id:any){
    console.log(id)
    this.router.navigateByUrl('home/'+ id)
  }
//create a custom event
@Output() myEvent = new EventEmitter();


sendProductDetailsToParent(name:any){
    //emit data to parent
    this.myEvent.emit(name);
}

}
