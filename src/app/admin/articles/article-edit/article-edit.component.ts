import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Router, ActivatedRoute } from "@angular/router";
import { isDefined } from "@angular/compiler/src/util";

@Component({
  selector: "app-article-edit",
  templateUrl: "./article-edit.component.html",
  styleUrls: ["./article-edit.component.scss"]
})
export class ArticleEditComponent implements OnInit {
  db: AngularFirestore;
  router: Router;
  article = {};
  id: any;

  constructor(db: AngularFirestore, route: ActivatedRoute, router: Router) {
    this.id = route.snapshot.paramMap.get("id");
    this.db = db;
    this.router = router;
    this.checkId();

    //check if doc exists with id, if no return and show message
  }

  ngOnInit() {}

  checkId() {
    this.db
      .collection("artikel")
      .doc(this.id)
      .valueChanges()
      .subscribe(doc => {
        if (isDefined(doc)) {
          this.article = doc;
        } else {
          this.router.navigate(["/admin"]); //Page not found
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
