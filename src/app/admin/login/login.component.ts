import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth, User } from 'firebase/app';
import { ThrowStmt } from '@angular/compiler';
import { parseLazyRoute } from '@angular/compiler/src/aot/lazy_routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: any;
  constructor(
	private afAuth: AngularFireAuth,
	private router: Router
	) {

	}
  login() {
	this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider());
  }
  logout() {
	this.afAuth.auth.signOut();
  }
  
  ngOnInit() {
	  this.afAuth.user.subscribe(user => {
		  if(user != null) {
			  if (user.email != "noahsalvi@me.com") {
				  this.logout();
			  } else {
				  this.router.navigate(['/admin']);
			  }
		  } else {
			  this.login();
		  }
	  })
	
  }
}
