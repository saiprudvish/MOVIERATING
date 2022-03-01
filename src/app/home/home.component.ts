import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  NetflixMovies:any;
  products=[];
  first:any;
  constructor(private fs:UserService,private router:Router) { }

  ngOnInit(): void {
    this.fs.getProducts().subscribe(
      userData=>{
        //assign movies
        this.NetflixMovies=userData;
      
        console.log(this.NetflixMovies)
         this.first=this.NetflixMovies[Object.keys(this.NetflixMovies)[0]]
         console.log(this.first)
       console.log(this.NetflixMovies[Object.keys(this.NetflixMovies)[0]])
       
      },
      err=>{
        console.log("err in getting movies data",err)
      }
  )
    }
  
  //  onSelectNetflix(){
  //   this.router.navigateByUrl('/netflix')
  // }
  // onWatch(){
  //   this.router.navigateByUrl('/watch')
  // }
  // onSelectHotstar(){
  //   this.router.navigateByUrl('/hotstar')
  // }
  // onSelectAha(){
  //   this.router.navigateByUrl('/aha')
  // }
  // onSelectPrime(){
  //   this.router.navigateByUrl('/prime')
  // }



  productsSentByChild:any=[];
  getProductDetailsFromChild(name:any){
    this.productsSentByChild.push(name)
    console.log(this.productsSentByChild)
  }

}
