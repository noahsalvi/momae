import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Article } from '../admin/articles/articles.component';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: "app-catalog",
  templateUrl: "./catalog.component.html",
  styleUrls: ["./catalog.component.scss"]
})
export class CatalogComponent implements OnInit {
  
  articles: Observable<Article[]>;
 
  constructor(db:AngularFirestore) {
    this.articles = db.collection<Article>("artikel").valueChanges();
  }
  ///constructor(  private route: ActivatedRoute, private router: Router, private service: ProductService) { }

  ngOnInit() {
    console.log(this);

  }

  addToCart() {}

  showDetails() {}
}
