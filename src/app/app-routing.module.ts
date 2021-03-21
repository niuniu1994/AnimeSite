import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DetailComponent} from './components/detail/detail.component';
import {ListComponent} from './components/list/list.component';
import {SearchComponent} from './components/search/search.component';

const routes: Routes = [
  {path: 'detail/:id', component: DetailComponent},
  {path: '', component: SearchComponent},
  {path: 'home', component: SearchComponent},
  {path: 'list/:searchText/:params', component: ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
