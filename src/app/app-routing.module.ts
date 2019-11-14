import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailArticleComponent } from './detail-article/detail-article.component';
import { CatalogComponent } from './catalog/catalog.component';
import { AdminComponent } from './admin/admin.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { LoginComponent } from './admin/login/login.component';
import { LogoutComponent } from './admin/logout/logout.component';


const redirectToCatalog = () => redirectUnauthorizedTo(['']);

export const routes: Routes = [
{ 
  path: 'detail-article', component: DetailArticleComponent
},
{ 
  path: '', component: CatalogComponent 
},
{ 
  path: 'admin', component: AdminComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectToCatalog }, 
  children: [
    {
      path: 'logout', component: LogoutComponent 
    }
  ]
},
{
  path: 'admin/login', component: LoginComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
