import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import * as $ from 'jquery';
import 'jquery-mask-plugin';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  userModel = new User()

  constructor() { }

  capturarDados() {

    $(document).ready(function () {
      $("#cpf").mask("000.000.000-00");
      $("#telefone").mask("(00) 00000-0000");
     
        let login = $("#login").val();
        let cpf = $("#cpf").val();
        let telefone = $("#telefone").val();
        let email = $("#email").val();
        let senha = $("#senha").val();

        if (login == "" || cpf == "" || telefone == "" || email == "" || senha == "") {
          $(".alertas").text("Favor preencher todos os campos !");

        } else {
          $(".alertas").text("Dados Cadastrados!");
        };
      });
  
    console.log(this.userModel);
  }

  ngOnInit(): void {
  }


}
