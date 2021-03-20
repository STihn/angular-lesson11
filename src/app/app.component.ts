import { Component, OnInit } from '@angular/core';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  searchStr = '';
  users;
  title = 'angular-lesson11';

  constructor(public service: AppServiceService) {}

  ngOnInit(): void {
    this.service.loadUsers().subscribe(users => {
      this.users = users;
    })
  }

  removeUser() {
    const del = this.users.length;
    this.service.deleteUser(del);
    this.users.pop(del);
  }

  addUser() {
    const user = {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
      lat: "-37.3159",
      lng: "81.1496"
      }
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
      }
    }
    this.service.addUser(user);
    this.users.push(user)
  }

  changeUser() {
    const user = {
      id: 2,
      name: "Li Jo Graham",
      username: "Berta",
      email: "berta@mail.biz",
      address: {
      street: "google Light",
      suite: "Apt. 556",
      city: "London",
      zipcode: "92998",
      },
    }
    this.service.putUser(user);
    this.users.splice(2,1, user);
  }
}
