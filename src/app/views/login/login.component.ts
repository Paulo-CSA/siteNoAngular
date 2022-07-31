import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginModel = new Login()

  constructor() { }

  capturarDados() {
    console.log(this.loginModel);

  }

  ngOnInit(): void {


  }
}