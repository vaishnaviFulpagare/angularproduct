import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css']
})
export class ProductModalComponent implements OnInit {
  @Input() product: Product = {
    name: '',
    description: '',
    categories: [],
    price: 0,
    availability: { inStock: false, quantity: 0 },
    attributes: []
  };
  categories = [
    'Electronics', 'Clothing', 'Books', 'Home & Kitchen', 'Sports & Outdoors',
    'Health & Personal Care', 'Toys & Games', 'Automotive', 'Beauty & Grooming', 'Office Supplies'
  ];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  addAttribute() {
    this.product.attributes.push({ key: '', value: '' });
  }

  removeAttribute(index: number) {
    this.product.attributes.splice(index, 1);
  }

  onSubmit() {
    if (this.product.id) {
      this.productService.updateProduct(this.product).subscribe();
    } else {
      this.productService.createProduct(this.product).subscribe();
    }
  }
}
