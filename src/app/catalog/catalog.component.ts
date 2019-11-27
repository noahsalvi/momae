import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-catalog",
  templateUrl: "./catalog.component.html",
  styleUrls: ["./catalog.component.scss"]
})
export class CatalogComponent implements OnInit {
  constructor() {}
  ///constructor(  private route: ActivatedRoute, private router: Router, private service: ProductService) { }

  ngOnInit() {
    console.log(this);
  }

  addToCart() {}

  showDetails() {}
}
