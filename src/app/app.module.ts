import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxEchartsModule } from 'ngx-echarts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsComponent } from './charts/charts.component';
import { EchartsComponent } from './echarts/echarts.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    EchartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEchartsModule.forRoot({echarts: () => import('echarts')}),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
