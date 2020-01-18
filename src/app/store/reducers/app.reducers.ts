import { AppActions } from '../actions';
import { AppState, initialAppState } from '../state';

export function appReducer(
    state = initialAppState,
    action: AppActions.UnionType
): AppState {
    switch (action.type) {
        case (AppActions.Types.SET_EXAMPLE_FLAG): {
            return {
                ...state,
                exampleAppFlag: action.payload.exampleFlag
            };
        }
        case (AppActions.Types.TOGGLE_EXAMPLE_FLAG): {
            return {
                ...state,
                exampleAppFlag: state.exampleAppFlag ? false : true
            };
        }
        default: {
            return state;
        }
    }
}