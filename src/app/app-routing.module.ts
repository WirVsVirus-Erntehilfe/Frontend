import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { submoduleRoutes } from './submodules/submodule.routing';
import { MainPageComponent } from './core/layout/containers/main-page/main-page.component';
import { LoginComponent } from './core/login/login.component';
import { RegisterComponent } from './core/register/register.component';

export const mainRoute: Route = {
  path: '',
  component: MainPageComponent,
  children: submoduleRoutes,
}

export const loginRoute: Route = {
  path: 'login',
  component: LoginComponent,
}

export const registerRoute: Route = {
  path: 'register',
  component: RegisterComponent
}

export const redirectRoute: Route = {
  path: '**',
  redirectTo: 'login',
  pathMatch: 'full'
}

// export const registerRoute: Route = {
//   path: 'register',
//   component: 
// }

// export const loginRoute: Route = {
//   path: '**',
//   component: 
// }
export const routes: Routes = [
  loginRoute,
  registerRoute,
  redirectRoute
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
