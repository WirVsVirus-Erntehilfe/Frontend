import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/core/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent    
    }
]
@NgModule({
    declarations: [DashboardComponent],
    imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    ]
})
export class DashboardModule { }