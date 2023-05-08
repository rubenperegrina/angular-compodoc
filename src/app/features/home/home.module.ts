import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ViewComponent } from './components/view/view.component';
import { ListComponent } from './components/list/list.component';
import { TableComponent } from './components/table/table.component';
import { HomePipe } from './pipes/home.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    ViewComponent,
    ListComponent,
    TableComponent,
    HomePipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
