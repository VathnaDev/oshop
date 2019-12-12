import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from '../../product.service';
import {Subscription} from 'rxjs';
import {Product} from '../../../models/product';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  filteredProducts: Product[];
  products: Product[];
  subscription: Subscription;

  constructor(private productService: ProductService) {
    this.subscription = this.productService.getAll()
      .subscribe(p => {
        this.filteredProducts = this.products = p;
      });
  }

  ngOnInit() {
  }

  filter(query) {
    this.filteredProducts = query
      ? this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase()))
      : this.products;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
