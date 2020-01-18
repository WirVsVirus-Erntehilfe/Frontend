import { AppState } from '../state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export abstract class AppSelectors {
    private readonly appState = createFeatureSelector<
        AppState
    >('app');

    public readonly exampleFlagSelector = createSelector(
        this.appState,
        (state: AppState) => {
            return state.exampleAppFlag
        }
    )
}