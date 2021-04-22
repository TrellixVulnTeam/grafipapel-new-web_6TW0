import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '@modules/shared.module';
import { ProductsRoutingModule } from '@modules/products-routing.module';
import { ProductService } from '@services/product.service';

import { ProductsComponent } from '@components/products/products.component';
import { ProductsListComponent } from '@components/products/products-list/products-list.component';
import { ProductsDetailComponent } from '@components/products/products-detail/products-detail.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductsListComponent,
    ProductsDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductsRoutingModule,
    SharedModule
  ],
  providers: [
    ProductService
  ] 
})
export class ProductsModule { }
