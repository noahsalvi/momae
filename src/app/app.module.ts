import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { HeaderComponent } from './header/header.component';
import { CatalogComponent } from './catalog/catalog.component';
import { FooterComponent } from './footer/footer.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';
import { AdminComponent } from './admin/admin.component';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { LoginComponent } from './admin/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbAuthFirebaseUIModule } from '@firebaseui/ng-bootstrap';
import { LogoutComponent } from './admin/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CatalogComponent,
    FooterComponent,
    DetailArticleComponent,
    AdminComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbAuthFirebaseUIModule.forRoot(environment.firebase),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    BrowserAnimationsModule
  ],
  providers: [
    AngularFireAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
