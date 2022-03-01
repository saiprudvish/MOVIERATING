import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userLoginStatus=false;

  //inject http client object
  constructor(private hc:HttpClient) { 
  if(localStorage.getItem('username')!=null){
    this.userLoginStatus=true;
  }  
  }

      //to read all products
      getProducts():Observable<any>{

        return this.hc.get('/product/getproducts')
      
     
    }
    getNetflixMovieRatingById(id:any):Observable<any>{
      return this.hc.get<any>('product/getproducts/'+id)
    }


  loginUser(credentials:any):Observable<any>{
  
      return  this.hc.post("/user/login",credentials)
    
  }

  createUser(userObj:any):Observable<any>{
    return  this.hc.post("/user/createuser",userObj)
  }

  getUser(username:any):Observable<any>{
    return this.hc.get(`/user/getuser/${username}`)
}
}
