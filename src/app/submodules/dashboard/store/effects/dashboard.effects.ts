import { Injectable } from "@angular/core";
import { Effect, ofType, Actions } from '@ngrx/effects';
import { RequestDashboardDataAction, RequestDashboardDataSuccessfulAction, RequestDashboardDataFailedAction } from '../actions/dashboard.actions';
import { DashboardActions } from '../actions';
import { switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class DashboardEffects {

    @Effect()
    requestDashboardData = this.actions$.pipe(
        ofType<RequestDashboardDataAction>(DashboardActions.Types.REQUEST_DASHBOARD_DATA),
        switchMap((action) => {
            // do requests in here
            return of(new RequestDashboardDataSuccessfulAction({requestedData: {test: 'Teststring'}}));
        }),
        catchError(error => {
            return of(new RequestDashboardDataFailedAction({error}));
        })
    );

    constructor(private actions$: Actions) {}
}