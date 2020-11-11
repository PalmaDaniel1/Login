import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UsersService } from 'src/app/users/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email : string;
  password: string;

  constructor(
    public userService: UsersService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }
  login() {
    const user = { email: this.email, password: this.password };
    this.userService.login(user).subscribe(
      data => {
        this.userService.setToken(data.token);
        this.router.navigateByUrl("/");
      },
      error => {
        console.log(error);
      }
    );
  }
}
