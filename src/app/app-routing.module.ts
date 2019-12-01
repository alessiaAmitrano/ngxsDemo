import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListContainerComponent } from './components/list-container/list-container.component';
import { ListItemInputComponent } from './components/list-item-input/list-item-input.component';

const routes: Routes = [
  { path: '', component: ListItemInputComponent },
  { path: 'list', component: ListContainerComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
