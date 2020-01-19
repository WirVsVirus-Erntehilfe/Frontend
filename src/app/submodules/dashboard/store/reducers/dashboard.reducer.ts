import { initialDashboardState, DashboardState } from '../state';
import { DashboardActions } from '../actions'
export function dashboardReducer(
    state = initialDashboardState,
    action: DashboardActions.UnionType
): DashboardState {
    switch (action.type) {
        case (DashboardActions.Types.CHANGE_DASHBOARD_VALUE): {
            return {
                ...state,
                testDashboardVal: action.payload.value
            };
        }
        case (DashboardActions.Types.REQUEST_DASHBOARD_DATA): {
            return {
                ...state,
                dashboardIsLoading: true,
            };
        }
        case (DashboardActions.Types.REQUEST_DASHBOARD_DATA_SUCCESSFUL): {
            return {
                ...state,
                dashboardIsLoading: false,
                requestedData: action.payload.requestedData
            };
        }
        case (DashboardActions.Types.REQUEST_DASHBOARD_DATA_FAILED): {
            return {
                ...state,
                dashboardIsLoading: false,
                requestedData: undefined,
            };
        }
        default: return state;
    }
}