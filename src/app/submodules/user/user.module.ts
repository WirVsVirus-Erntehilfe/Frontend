import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/core/shared/shared.module';
import { UserPageComponent } from './user-page/user-page.component';
import { Routes, RouterModule } from '@angular/router';

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
    ]
})
export class UserModule { }