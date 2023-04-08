import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoaderComponent } from './pages/loader/loader.component';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { JuegoComponent } from './pages/juego/juego.component';
import { CreadoresComponent } from './pages/creadores/creadores.component';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [

  {path: '', component: LoaderComponent},
  {path: '', component: SkeletonComponent, children: [
    {path: 'home', component: HomeComponent},

    {path: 'informacion', component: HomeComponent},
    {path: 'juego', component: JuegoComponent},
    {path: 'creadores', component: CreadoresComponent},
    {path: 'inicio', component: InicioComponent},
  ]},
  {path: '**', redirectTo: '/home'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
