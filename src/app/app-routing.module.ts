import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { CelularesComponent } from './views/celulares/celulares.component';
import { HardwareComponent } from './views/hardware/hardware.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { PerifericosComponent } from './views/perifericos/perifericos.component';
import { SoftwareComponent } from './views/software/software.component';


const routes: Routes = [{path:"", component: HomeComponent},
{path:"home", component: HomeComponent},
{path:"cadastro",component: CadastroComponent},
{path:"login",component: LoginComponent},
{path:"hardware",component: HardwareComponent},
{path:"software",component: SoftwareComponent},
{path:"celulares",component: CelularesComponent},
{path:"perifericos", component: PerifericosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
