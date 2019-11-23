import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Router } from "@angular/router";
import { AngularFireStorage } from "@angular/fire/storage";
import { map, finalize } from "rxjs/operators";
import { Observable } from "rxjs";

interface Article {
  titel: string;
  beschreibung: string;
  menge: number;
  preis: number;
  bild: string;
}

@Component({
  selector: "app-article-new",
  templateUrl: "./article-new.component.html",
  styleUrls: ["./article-new.component.scss"]
})
export class ArticleNewComponent implements OnInit {
  private db: AngularFirestore;
  private router: Router;
  article = {} as Article;
  uploadProgress: Observable<any>;
  imageName: string;

  constructor(
    db: AngularFirestore,
    private storage: AngularFireStorage,
    router: Router
  ) {
    this.db = db;
    this.router = router;
  }

  ngOnInit() {}

  upload(event) {
    console.log(event);
    const randomId = Math.random()
      .toString(36)
      .substring(2);
    let ref = this.storage.ref(randomId);
    let task = ref.put(event.target.files[0]);
    this.imageName = event.target.files[0].name;

    this.uploadProgress = task
      .snapshotChanges()
      .pipe(map(s => (s.bytesTransferred / s.totalBytes) * 100));

    task
      .snapshotChanges()
      .pipe(
        finalize(() =>
          ref.getDownloadURL().subscribe(params => (this.article.bild = params))
        )
      )
      .subscribe();
  }

  addArticle() {
    if (
      this.article.titel &&
      this.article.beschreibung &&
      this.article.preis.valueOf() &&
      this.article.menge &&
      this.article.bild
    ) {
      console.log(true);
      this.db.collection("artikel").add(this.article);
      this.router.navigate(["/admin"]);
    } else {
      console.log(this.article);
    }
  }
}
