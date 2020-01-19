import { ActionReducerMap } from '@ngrx/store';
import { DashboardFeatureState } from '../state';
import { dashboardReducer } from './dashboard.reducer';

export * from './dashboard.reducer';

export const DashboardFeatureReducers: ActionReducerMap<
    DashboardFeatureState
> = {
    dashboard: dashboardReducer,
}
