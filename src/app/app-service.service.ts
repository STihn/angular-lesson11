import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) { }

  loadUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  deleteUser(i) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/users/${i}`)
  }

  addUser(item) {
    return this.http.post('https://jsonplaceholder.typicode.com/users', {item}).pipe(map(data => {
      console.log(data);
      return data;
    })).subscribe(data => {
      console.log(data)
    })
  }

  putUser(item) {
    return this.http.put(`https://jsonplaceholder.typicode.com/users/${item.id}`, {item}).pipe(map(data => {
      console.log(data);
      return data;
    })).subscribe(data => {
      console.log(data)
    })
  }
}
