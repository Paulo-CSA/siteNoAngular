import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import * as $ from 'jquery';
import 'jquery-mask-plugin';
import { UserService } from 'src/app/services/user.service';
import { Login } from 'src/app/models/login';
import { Router } from '@angular/router';



@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  loginModel = new Login()
  userModel = new User()
  mensagem: string = ""


  constructor(private userService: UserService, private router: Router) { }

  myFunction() {
    $(document).ready(function () {
      $("#cpf").mask("000.000.000-00");
      $("#telefone").mask("(00) 00000-0000");
    });
  }

  validacao(): boolean {
    if (
      this.userModel.cpf === undefined || this.userModel.cpf === '' ||
      this.userModel.password === undefined || this.userModel.password === '' ||
      this.userModel.email === undefined || this.userModel.email === '' ||
      this.userModel.nome === undefined || this.userModel.nome === '' ||
      this.userModel.telefone === undefined || this.userModel.telefone === ''
     ) {
      return false
    } else {
      return true
    }

  }
  capturarDados() {
    if (this.validacao() == false) {
      this.mensagem = `Favor preencher todos os campos !`;
    } else {
      (this.userService.cadastro(this.userModel)
        .subscribe(
          {
            next: (response) => {
              console.log(response);
              this.mensagem = `Dados Cadastrados com Sucesso!`
              alert("Dados Cadastrados com Sucesso!");
              this.router.navigate(['login'])
            },
            error: (e) => { this.mensagem = `${e.error}` }
          }
        ))
    }
  }



  //verificacao com jquery
  /* capturarDados() {

    let login = $("#login").val();
    let cpf = $("#cpf").val();
    let telefone = $("#telefone").val();
    let email = $("#email").val();
    let password = $("#senha").val();

    if (login == "" || cpf == "" || telefone == "" || email == "" || password == "") {
      $(".alertas").text("Favor preencher todos os campos !");
    } else {
      this.userService.cadastro(this.userModel).subscribe(function (response) {
        //console.log(response);
        //$(".alertas").text("Dados Cadastrados!");   
        alert("Dados Cadastrados com Sucesso!");     
      })
      this.router.navigate(['login'])
    }
  }; */

  ngOnInit(): void {
  }
}
