import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { DetailproductComponent } from './detailproduct/detailproduct.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RatingModule } from 'ng-starrating';
import { FormsModule } from '@angular/forms';
import { Bai3Component } from './bai3/bai3.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'detailproduct', component: DetailproductComponent },
  { path: 'bai3', component: Bai3Component },
  { path: 'products', component: ProductsComponent },

  {
    path: '',
    component: Bai3Component,
    data: { title: 'Heroes List' }
  },


];

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    DetailproductComponent,
    Bai3Component
  ],
  imports: [
    BrowserModule,
    RatingModule,
    Ng2SearchPipeModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
