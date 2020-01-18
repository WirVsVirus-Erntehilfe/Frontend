import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      LayoutModule,
    ],
    providers: [],
    exports: [
      LayoutModule,
      RouterModule
    ]
  })
  export class CoreModule { }