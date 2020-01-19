import { DashboardState } from '../state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export abstract class DashboardSelectors {
    private readonly dashboardFeatureState = createFeatureSelector<
        DashboardState
    >('dashboard');

    public readonly dashboardValue = createSelector(
        this.dashboardFeatureState,
        (state: DashboardState) => state.testDashboardVal
    );

    public readonly dashboardIsLoading = createSelector(
        this.dashboardFeatureState,
        (state: DashboardState) => state.dashboardIsLoading
    );

    public readonly dashboardData = createSelector(
        this.dashboardFeatureState,
        (state: DashboardState) => state.requestedData
    )
}