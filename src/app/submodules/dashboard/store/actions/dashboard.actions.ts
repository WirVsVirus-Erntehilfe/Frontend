import { Action } from '@ngrx/store';

export enum Types {
    CHANGE_DASHBOARD_VALUE = '[Dashboard] Change dashboard value',
    REQUEST_DASHBOARD_DATA = '[Dashboard] request dashboard data',
    REQUEST_DASHBOARD_DATA_SUCCESSFUL = '[Dashboard] Request dashboard data successful',
    REQUEST_DASHBOARD_DATA_FAILED = '[Dashboard] Request dashboard data failed',
}

export type UnionType = 
    | RequestDashboardDataAction
    | RequestDashboardDataSuccessfulAction
    | RequestDashboardDataFailedAction
    | ChangeDashboardValueAction

export class ChangeDashboardValueAction implements Action {
    readonly type = Types.CHANGE_DASHBOARD_VALUE;

    constructor(public payload: {value: string}) {}
}

export class RequestDashboardDataAction implements Action {
    readonly type = Types.REQUEST_DASHBOARD_DATA;
}

export class RequestDashboardDataSuccessfulAction implements Action {
    readonly type = Types.REQUEST_DASHBOARD_DATA_SUCCESSFUL;

    constructor(public payload: {requestedData: any}) {}
}

export class RequestDashboardDataFailedAction implements Action {
    readonly type = Types.REQUEST_DASHBOARD_DATA_FAILED;

    constructor(public payload: {error: Error}) {}
}
