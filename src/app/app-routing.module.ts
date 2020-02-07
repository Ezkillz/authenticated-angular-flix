import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 //import {CommonModule} from '@angular/common'
 import {HeroComponent} from './hero/hero.component'
import {MovieService} from  './Services/movie.service';
import {MovieApiService} from './Services/movie-api.service';
import {ApiService} from './Services/api.service';


const routes: Routes = [
  {path:'heros', component: HeroComponent },
  
];

@NgModule({
  imports: [MovieService,MovieApiService,ApiService, RouterModule.forRoot(routes)], //idk what CommonModule is? but its unessesary!
  //declarations: [],
  exports: [RouterModule],
  providers: [MovieApiService,MovieService,ApiService],
})
export class AppRoutingModule { }
