import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { map } from 'rxjs/operators';

@Injectable ({
    providedIn: 'root'
})

export class SearchUserService {

  private username: string;
  private clientid ='fe58a04e9c58f24f86b3'
  private clientsectret='d8ce7a890172d5495154e020fb0d41eccd42a1c1'

    constructor(private http: HttpClient) {
        console.log('Service Loading.....');
        this.username = 'JOFLIX';
     }

    getuser() {
        return this.http.get('https://api.github.com/users/' + this.username);
    }
    getUserRepos() {
        return this.http.get('https://api.github.com/users/' + this.username + '/repos?client_id=');
    }
    updateProfile(username: string) {
        this.username = username;
    }
}
