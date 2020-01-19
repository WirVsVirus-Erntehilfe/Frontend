import { ActionReducerMap } from '@ngrx/store';
import { UserFeatureState } from '../state';
import { userReducer } from './user.reducers';

export * from './user.reducers';

export const UserFeatureReducers: ActionReducerMap<
    UserFeatureState
> = {
    user: userReducer,
}
