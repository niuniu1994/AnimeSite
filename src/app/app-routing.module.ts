import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DetailComponent} from './components/detail/detail.component';
import {ListComponent} from './components/list/list.component';
import {HomeComponent} from './components/home/home.component';
import {SearchGenreComponent} from './components/search-genre/search-genre.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'detail/:id', component: DetailComponent},
  {path: 'home', component: HomeComponent},
  {path: 'list/:searchText/:params', component: ListComponent},
  {path: 'list/:genre', component: ListComponent},
  {path: 'genre', component: SearchGenreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
