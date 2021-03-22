import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DetailComponent} from './components/detail/detail.component';
import {ListComponent} from './components/list/list.component';
import {SearchComponent} from './components/search/search.component';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
  {path: 'detail/:id', component: DetailComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'list/:searchText/:params', component: ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
