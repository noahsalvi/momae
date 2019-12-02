import { Component, OnInit, RootRenderer } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth, User } from "firebase/app";
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  user: any;
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  login() {
    this.afAuth.authState.subscribe(res => {
      if (res && res.uid) {
        // console.log("user is logged in");
        this.router.navigate(["/admin"]);
      } else {
        // console.log("user not logged in");
        this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider());
      }
    });
  }
  logout() {
    this.afAuth.auth.signOut().then(() => this.router.navigate(["/"]));
  }

  ngOnInit() {
    this.afAuth.auth.getRedirectResult().then(result => {
      if (result.user) {
        if (
          result.user.email == "noahsalvi@me.com" ||
          result.user.email == "nikitaruegsegger@gmail.com" ||
          result.user.email == "guamuo@gmail.com"
        ) {
          this.router.navigate(["/admin"]);
        } else {
          this.logout();
        }
      } else {
        this.login();
      }
    });
  }
}
