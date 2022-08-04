import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import * as $ from 'jquery';
import 'jquery-mask-plugin';
import { UserService } from 'src/app/services/user.service';
import { Login } from 'src/app/models/login';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  loginModel = new Login()
  userModel = new User()

  constructor(private userService: UserService) { }
  myFunction() {
    $(document).ready(function () {
      $("#cpf").mask("000.000.000-00");
      $("#telefone").mask("(00) 00000-0000");
    });
  }

  capturarDados() {

    let login = $("#login").val();
    let cpf = $("#cpf").val();
    let telefone = $("#telefone").val();
    let email = $("#email").val();
    let password = $("#senha").val();

    if (login == "" || cpf == "" || telefone == "" || email == "" || password == "") {
      $(".alertas").text("Favor preencher todos os campos !");

    } else {
      this.userService.signin(this.userModel).subscribe(function (response) {
        console.log(response);
      })
      $(".alertas").text("Dados Cadastrados!");
    };

    console.log(this.userModel);
  }
  ngOnInit(): void {
  }
}
