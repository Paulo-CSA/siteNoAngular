import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login';
import * as $ from 'jquery';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { ThisReceiver } from '@angular/compiler';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginModel = new Login()
  userModel = new User()
  mensagem: string = ""

  constructor(private userService: UserService, private router: Router) { }

  validacao(): boolean {
    let blackList = ["SELECT", "OR", "--", ", ", "; ", "DROP", "1=1", "'='"];

    let ataque = 0;

    blackList.forEach((palavra) => {
      if (this.loginModel.email?.toUpperCase().includes(palavra)) {
        ataque++;        
      }
    })

    if (ataque > 0) {
      return false;
    }

    if (this.loginModel.email === undefined || this.loginModel.email === '' || this.loginModel.password === undefined || this.loginModel.password === '') {
      return false
    } else {
      return true
    }

  }

  capturarDados() {
    if (this.validacao() == false) {
      this.mensagem = `Formato invalido para login!`;
    } else {
      (this.userService.signin(this.loginModel)
        .subscribe(
          {
            next: (response) => {
              //console.log(response);
              //this.mensagem = `Logado com Sucesso!`
              this.router.navigate([''])

            },
            error: (e) => { this.mensagem = `Login ou Senha Invalido!` }//${e.error}
          }
        ))
    }
  }

  ngOnInit(): void {

  }
}
