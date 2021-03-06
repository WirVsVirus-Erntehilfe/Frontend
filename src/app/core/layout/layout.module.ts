import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { MainPageComponent } from './containers/main-page/main-page.component';
import { MainHeaderComponent } from './presentation/main-header/main-header.component';

@NgModule({
    declarations: [MainPageComponent, MainHeaderComponent],
    imports: [
      CommonModule,
      SharedModule,
      RouterModule
    ],
    exports: [
      MainPageComponent,
      MainHeaderComponent,
    ]
  })
  export class LayoutModule { }