import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EditProfileDTO } from '../dtos/editProfileDTO';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiServerUrl = 'http://localhost:8081'; 

  constructor(private http: HttpClient,
              private router: Router) { }
  
  public updateProfile(requestBody : EditProfileDTO, id: number,headers : HttpHeaders) : Observable<string>{
    return this.http.post<string>(`${this.apiServerUrl}/Account/updateProfile`, requestBody,{headers});  
  }

  public getUsersByRole(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiServerUrl}/CityFlow/usersByRole`);
  }
}