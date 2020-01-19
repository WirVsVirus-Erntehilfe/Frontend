import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/core/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StoreModule } from '@ngrx/store';
import { dashboardReducer } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { DashboardEffects } from './store/effects/dashboard.effects';
import { DashboardFacade } from './store/dashboard.facade';

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
    StoreModule.forFeature('dashboard', dashboardReducer),
    EffectsModule.forFeature([DashboardEffects])
    ],
    providers: [
        DashboardFacade
    ]
})
export class DashboardModule { }