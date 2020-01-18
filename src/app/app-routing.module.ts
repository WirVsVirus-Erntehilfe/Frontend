import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { submoduleRoutes } from './submodules/submodule.routing';


@NgModule({
  imports: [RouterModule.forRoot(submoduleRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
