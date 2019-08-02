import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoAddComponent } from './producto-add/producto-add.component';
import { ProductoGetComponent } from './producto-get/producto-get.component';
import { ProductoEditComponent } from './producto-edit/producto-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ProductsService} from './products.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductoAddComponent,
    ProductoGetComponent,
    ProductoEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
