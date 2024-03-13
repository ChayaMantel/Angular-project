import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {User} from '../../models/user.model'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }
  getUserList():Observable<User[]>{
      return this._http.get<User[]>('http://localhost:5263/api/User')
  }
  getUserId(id: number):Observable<User>{
    return this._http.get<User>(`http://localhost:5263/api/User/${id}`)
  }

  addUser(user:User){
    return this._http.post('http://localhost:5263/api/User', user)
  }

  deleteUser(id: number){
    return this._http.delete(`http://localhost:5263/api/User/${id}`)
  }

  updateUser(id: number,user:User){
    return this._http.put(`http://localhost:5263/api/User/${id}`,user)
  }
  

}
