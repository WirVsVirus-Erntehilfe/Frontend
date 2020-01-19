import { UserState } from './user.state';

export * from './user.state';

export interface UserFeatureState {
    user: UserState;
}