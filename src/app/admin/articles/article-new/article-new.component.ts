import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Router } from "@angular/router";

interface Article {
  titel: string;
  beschreibung: string;
  menge: number;
  preis: number;
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

  constructor(db: AngularFirestore, router: Router) {
    this.db = db;
    this.router = router;
  }

  ngOnInit() {}

  addArticle() {
    if (
      this.article.titel &&
      this.article.beschreibung &&
      this.article.preis.valueOf() &&
      this.article.menge
    ) {
      console.log(true);
      this.db.collection("artikel").add(this.article);
      this.router.navigate(["/admin"]);
    } else {
      console.log(false);
    }
  }
}
