import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public userService: UsersService
  ) { }

  ngOnInit(){
    this.getUserLogged();
  }
  getUserLogged() {
    this.userService.getUser().subscribe(user => {
      console.log(user);
    });
  }

}
