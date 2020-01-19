import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from '../state';

export abstract class UserSelectors {
    private readonly userFeatureState = createFeatureSelector<
        UserState
    >('user');

    public readonly username = createSelector(
        this.userFeatureState,
        (state: UserState) => state.username
    );
}
