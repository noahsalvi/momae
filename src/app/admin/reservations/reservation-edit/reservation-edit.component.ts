import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { isDefined } from "@angular/compiler/src/util";
import { Observable, of, Timestamp } from "rxjs";
import { Router, ActivatedRoute } from "@angular/router";
import { Reservation } from "../reservations.component";

@Component({
  selector: "app-reservation-edit",
  templateUrl: "./reservation-edit.component.html",
  styleUrls: ["./reservation-edit.component.scss"]
})
export class ReservationEditComponent implements OnInit {
  id: string;
  reservation: Reservation = new Reservation();
  date;

  constructor(
    private db: AngularFirestore,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.id = route.snapshot.paramMap.get("id");
    this.checkId();
  }

  ngOnInit() {}

  checkId() {
    this.db
      .collection("reservationen")
      .doc(this.id)
      .valueChanges()
      .subscribe(doc => {
        if (isDefined(doc)) {
          this.reservation = doc as Reservation;
        } else {
          this.router.navigate(["/admin/reservations"]); //Page not found
        }
      });
  }

  changeReservation() {
    this.db
      .collection("reservationen")
      .doc(this.id)
      .update(this.reservation)
      .then(() => this.router.navigate(["/admin/reservations"]));
  }
}
