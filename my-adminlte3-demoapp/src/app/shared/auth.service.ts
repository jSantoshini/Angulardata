import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {}

  login(username: string, password: string) {
    return this.httpClient.post('/users/login', { username, password });
  }

//  isLoggedIn(): boolean {
//     this.httpClient.get('/users/check').subscribe({
//       next: (data) => {
//         return true;
//       },
//       error: () => {
//         return false;
//       },
//     });
//   }
}

