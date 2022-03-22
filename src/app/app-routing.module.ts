import { LoginComponent } from './login/login.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ProductsComponent } from './products/products.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';

const routes: Routes = [
  {path :'products' , component : ProductsComponent , canActivate :[AuthGuardService]} ,
  {path :'orders' , component : MyOrdersComponent  , canActivate :[AuthGuardService ]} ,
  {path :'admin/orders' , component : AdminOrdersComponent  , canActivate :[AuthGuardService , AdminAuthGuardService]} ,
  {path :'admin/products' , component : AdminProductsComponent  , canActivate :[AuthGuardService ]} ,
  {path :'shopping-cart' , component : ShoppingCartComponent} ,
  {path :'login' , component : LoginComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
