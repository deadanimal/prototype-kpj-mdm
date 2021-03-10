import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publish-products',
  templateUrl: './publish-products.component.html',
  styleUrls: ['./publish-products.component.scss']
})
export class PublishProductsComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  navigatePage(path: string) {
    this.router.navigate([path])
  }

}
