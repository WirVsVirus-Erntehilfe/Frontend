import { Route, Routes } from "@angular/router";

const userRoute: Route = {
    path: 'user',
    loadChildren: () => import('../submodules/user/user.module').then(mod => mod.UserModule),
}

const dashboardRoute: Route = {
    path: 'dashboard',
    loadChildren: () => import('../submodules/dashboard/dashboard.module').then(mod => mod.DashboardModule),
}

const defaultPath: Route = {
    path: '**',
    redirectTo: 'dashboard'
}
export const submoduleRoutes: Routes = [
    userRoute,
    dashboardRoute,
    defaultPath, // Wildcard match, needs to be last element of the array
]