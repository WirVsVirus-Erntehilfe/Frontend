import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/core/shared/shared.module';
import { UserPageComponent } from './user-page/user-page.component';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/effects/user.effects';
import { UserFacade } from './store/user-state.facade';

const routes: Routes = [
    {
        path: '',
        component: UserPageComponent,
    }
]

@NgModule({
    declarations: [UserPageComponent],
    imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('user', userReducer),
    EffectsModule.forFeature([UserEffects])
    ],
    providers: [
        UserFacade
    ]
})
export class UserModule { }