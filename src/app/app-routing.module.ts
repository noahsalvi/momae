import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailArticleComponent } from './detail-article/detail-article.component';
import { CatalogComponent } from './catalog/catalog.component';


const routes: Routes = [
{ path: 'detail-article', component: DetailArticleComponent},
{ path: 'catalog', component: CatalogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
