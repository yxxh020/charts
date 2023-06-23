import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsComponent } from "./charts/charts.component";
import { EchartsComponent } from "./echarts/echarts.component";

const routes: Routes = [
  {path:'', component: EchartsComponent},
  {path:'apex', component: ChartsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
