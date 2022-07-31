import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

userModel = new User()

  constructor() { }

  ngOnInit(): void {
  }

  capturarDados(){
    console.log(this.userModel);
  }

}
