import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login';
import * as $ from 'jquery';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginModel = new Login()

  constructor() { }

  capturarDados() {    
      let login = $("#login").val() || [];
      let senha = $("#senha").val() || [];

      if (login == "" || senha == "") {
        $(".alertas").text("Forneca seus dados!");
      } else {
        $(".alertas").text("Verificando credenciais!");
      };
        
    console.log(this.loginModel);
  }

  ngOnInit(): void {

  }

}

