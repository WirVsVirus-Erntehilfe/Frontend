import { initialUserState, UserState } from '../state';
import { UserActions } from '../actions';


export function userReducer(
    state = initialUserState,
    action: UserActions.UnionType
): UserState {
    switch (action.type) {
        case (UserActions.Types.SET_USER_NAME): {
            return {
                ...state,
                username: action.payload.username
            };
        }
        default: return state;
    }
};
