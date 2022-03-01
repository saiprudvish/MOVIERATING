import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-homerating',
  templateUrl: './homerating.component.html',
  styleUrls: ['./homerating.component.css']
})
export class HomeratingComponent implements OnInit {

  constructor(private ps:UserService,private ar:ActivatedRoute) { }
  first:any;
  NetflixObj:any;
  ngOnInit(): void {

    let id=this.ar.snapshot.params.id
        //get data of movie with this current id
    this.ps.getNetflixMovieRatingById(id).subscribe(
      obj=>{
  
        this.first=obj;
        this.NetflixObj=this.first[Object.keys(this.first)[0]]
        
      },
      err=>{
        console.log("err in reading movie",err)
      }
    )
}

}
