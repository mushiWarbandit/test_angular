import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductoAddComponent} from './producto-add/producto-add.component';
import {ProductoEditComponent} from './producto-edit/producto-edit.component';
import {ProductoGetComponent} from './producto-get/producto-get.component';


const routes: Routes = [
{
  path:'product/create',
  component:ProductoAddComponent
},
{
  path:'edit/:id',
  component:ProductoEditComponent
},
{
  path:'products',
  component:ProductoGetComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
