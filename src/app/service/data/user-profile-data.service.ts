import { HttpBackend, HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL_USERPROFILE } from 'src/app/app-constants';
import { UserProfile } from 'src/app/model/UserProfile';

@Injectable({
  providedIn: 'root'
})
export class UserProfileDataService {

  private http: HttpClient;
  constructor(
    private httpClient: HttpClient,
    private handler: HttpBackend,
  ) {
    this.http = new HttpClient(handler);
  }

  register(username: string,firstName: string,lastName: string,
    password: string,email: string, phone: string,dob: Date): Observable<UserProfile> {
   const user = new UserProfile();
    user.username = username;
    user.firstName=firstName;
    user.lastName=lastName;
    user.password = password;
    user.email = email;
    user.phone = phone === '' ? 0 : parseInt(phone);
    user.dateOfBirth=dob;
    return this.http.post<UserProfile>(`${API_URL_USERPROFILE}/addUser`, user);
  }
  getUserById(): Observable<UserProfile> {
    const username = localStorage.getItem('authenticatedUser');
    
     return this.httpClient.get<UserProfile>(`${API_URL_USERPROFILE}/getUserById/${username}`);
  }

  updateuser(user: any): Observable<UserProfile> {
    const username = localStorage.getItem('authenticatedUser');
    return this.httpClient.put<UserProfile>(`${API_URL_USERPROFILE}/update/${username}`, user);
  }
}
