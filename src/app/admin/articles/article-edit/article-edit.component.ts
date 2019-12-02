import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Router, ActivatedRoute } from "@angular/router";
import { isDefined } from "@angular/compiler/src/util";
import { Article } from "../articles.component";

@Component({
  selector: "app-article-edit",
  templateUrl: "./article-edit.component.html",
  styleUrls: ["./article-edit.component.scss"]
})
export class ArticleEditComponent implements OnInit {
  article: Article = new Article();
  id: string;

  constructor(
    private db: AngularFirestore,
    route: ActivatedRoute,
    private router: Router
  ) {
    this.id = route.snapshot.paramMap.get("id");
    this.checkId();
  }

  ngOnInit() {}

  checkId() {
    this.db
      .collection("artikel")
      .doc(this.id)
      .valueChanges()
      .subscribe((doc: Article) => {
        if (isDefined(doc)) {
          this.article = doc;
        } else {
          this.router.navigate(["/admin"]);
        }
      });
  }

  changeArticle() {
    this.db
      .collection("artikel")
      .doc(this.id)
      .update(this.article)
      .then(() => this.router.navigate(["/admin"]));
  }
}
