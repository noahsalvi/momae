import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articles: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.articles = db.collection('artikel').valueChanges();
  }
  ngOnInit() {

  }
}
