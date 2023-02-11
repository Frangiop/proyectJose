import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicsComponent } from './pages/comics/comics.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '' ,component:HomeComponent},  // agregamos esta 
  {path: 'comics',component:ComicsComponent}, // y agergamos esta antes también , la  agregamos con el error arroba  n
  {path: 'gestion' ,component:GestionComponent}, // esta tb . la teniamos la creamos antes 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
