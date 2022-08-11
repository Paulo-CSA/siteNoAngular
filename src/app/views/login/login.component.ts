import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login';
import * as $ from 'jquery';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { ThisReceiver } from '@angular/compiler';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginModel = new Login()
  userModel = new User()
  mensagem: string = ""

  constructor(private userService: UserService) { }

  validacao(): boolean {
    if (this.loginModel.email === undefined || this.loginModel.email === '' || this.loginModel.password === undefined || this.loginModel.password === '') {
      return false
    } else {
      return true
    }

  }
  capturarDados() {
    if (this.validacao() == false) {
      this.mensagem = `Forneca seus dados!`;
    } else {
      (this.userService.signin(this.loginModel)
        .subscribe(
          {
            next: (response) => {
              console.log(response);
              this.mensagem = `Logado com Sucesso!`
            },
            error: (e) => { this.mensagem = `Login ou Senha Invalido!` }//${e.error}
          }
        ))
    }
  }

  ngOnInit(): void {

  }


}
