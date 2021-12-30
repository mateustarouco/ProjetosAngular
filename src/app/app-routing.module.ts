import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ToggleComponent} from "./toggle/toggle.component";
import {MenuComponent} from "./menu/menu.component";
import {HomeComponent} from "./home/home.component";
import {MenudoisComponent} from "./menudois/menudois.component";
import {CheckboxComponent} from "./checkbox/checkbox.component";


const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'toggle',
    component: ToggleComponent,
  },
  {
  path:'menu',
    component: MenuComponent
  },
  {
  path:'menu2',
    component: MenudoisComponent
  },
  {
  path:'chackbox',
    component: CheckboxComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
