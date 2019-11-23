import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";
import { Router } from "@angular/router";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"]
})
export class AdminComponent implements OnInit {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  ngOnInit() {}

  async logout() {
    await this.afAuth.auth.signOut().then(() => this.router.navigate(["/"]));
  }
}
