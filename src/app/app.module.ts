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
import { Lap2Component } from './lap2/lap2.component';
import { StudentComponent } from './student/student.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  
];

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    DetailproductComponent,
    Bai3Component,
    Lap2Component,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    RatingModule,
    Ng2SearchPipeModule,
    FormsModule,
    RouterModule.forRoot(
      [
        { path: 'detailproduct', component: DetailproductComponent },
        { path: 'bai3', component: Bai3Component },
        { path: 'products', component: ProductsComponent },
        { path: 'lap2', component: Lap2Component },
        { path: 'student', component: StudentComponent },
        { path: 'student/:ID', component: StudentComponent },
        // { path: 'lap2/:id', component: StudentComponent },
        
      
      
        {
          path: '',
          component: Bai3Component,
          data: { title: 'Heroes List' }
        },
      
      
      ]
      ,
      { enableTracing: true } // <-- debugging purposes only
    ), HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
