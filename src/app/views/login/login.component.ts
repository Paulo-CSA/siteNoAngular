import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login';
import * as $ from 'jquery';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginModel = new Login()
  userModel = new User()

  constructor(private userService: UserService) { }

  capturarDados() {
    let login = $("#login").val() || [];
    let senha = $("#senha").val() || [];

    if (login == "" || senha == "") {
      $(".alertas").text("Forneca seus dados!");
    } else if (login == this.loginModel.email && senha == this.loginModel.password) {
      $(".alertas").text("Verificando credenciais!");
      this.userService.signin(this.loginModel).subscribe(function (response) {
        console.log(response);
      })
    } else {
      $(".alertas").text("Login ou Senha Invalido !!");
    }
    console.log(this.loginModel);
  }
  ngOnInit(): void {

  }


}
