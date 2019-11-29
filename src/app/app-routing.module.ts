import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductInputComponent } from './product-input/product-input.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {
    path: '',
    component: ProductInputComponent
  },
  {
    path: 'list',
    component: ProductListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
