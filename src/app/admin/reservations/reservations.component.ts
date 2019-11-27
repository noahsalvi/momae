import { Component, OnInit } from "@angular/core";
import {
  AngularFirestore,
  DocumentReference,
  DocumentChangeAction,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { map, filter, finalize, tap } from "rxjs/operators";
import { of, Observable, interval, combineLatest } from "rxjs";
import { isDefined } from "@angular/compiler/src/util";

export class Reservation {
  id: string;
  vorname: string;
  name: string;
  datum: any;
  artikel: {
    id: string;
  };
  telefon: string;
  email: string;
}
@Component({
  selector: "app-reservations",
  templateUrl: "./reservations.component.html",
  styleUrls: ["./reservations.component.scss"]
})
export class ReservationsComponent implements OnInit {
  reservationCollection: AngularFirestoreCollection<Reservation>;
  reservations: Observable<Reservation[]>;

  constructor(private db: AngularFirestore) {}

  ngOnInit() {
    this.reservationCollection = this.db.collection<Reservation>(
      "reservationen",
      ref => ref.orderBy("datum", "desc")
    );

    this.reservations = this.reservationCollection.snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          let id = a.payload.doc.id;
          let data = a.payload.doc.data() as any;

          return {
            id,
            ...data,
            artikel: data.artikel.get().then(params => {
              document
                .getElementById("reservation-section")
                .classList.remove("d-none");
              console.log(params.data());
              return { ...params.data(), id: params.id };
            })
          };
        })
      )
    );
  }

  deleteReservation(reservation: Reservation, artikel: any): void {
    this.db
      .collection("artikel")
      .doc(artikel["id"])
      .update({ menge: artikel["menge"] - 1 });

    // this.reservationCollection.doc(reservation.id).delete();
  }
}
