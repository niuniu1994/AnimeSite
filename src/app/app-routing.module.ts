import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DetailComponent} from './components/detail/detail.component';
import {ListComponent} from './components/list/list.component';
import {SearchComponent} from './components/search/search.component';
import {HomeComponent} from './components/home/home.component';
import {SearchGenreComponent} from './components/search-genre/search-genre.component';
import {TopAnimeComponent} from './components/top-anime/top-anime.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'detail/:id', component: DetailComponent},
  {path: 'home', component: HomeComponent},
  {path: 'list/:searchText/:params', component: ListComponent},
  {path: 'topanime', component: TopAnimeComponent},
  {path: 'list/:genre', component: ListComponent},
  {path: 'genre', component: SearchGenreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
