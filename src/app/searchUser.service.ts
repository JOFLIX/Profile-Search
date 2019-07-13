import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { map } from 'rxjs/operators';

@Injectable ({
    providedIn: 'root'
})

export class SearchUserService {

  private username: string;
  private clientid ='eceebb8a453cd814436e'
  private clientsectret='4a4bb1a063ab3ea7e8d3176dbe4d04f5cb8ac514'

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
