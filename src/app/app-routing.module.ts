import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { HeaderComponent } from './component/header/header.component';
import { ProductComponent } from './component/product/product.component';
import { DemoComponent } from './demo/demo.component';

const routes: Routes = [

  {path:'header',component:HeaderComponent},
  {path:'products',component:ProductComponent},
  {path:'cart',component:CartComponent},
  {path:'demo',component:DemoComponent},
  {path:'','redirectTo':'/products','pathMatch':'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
