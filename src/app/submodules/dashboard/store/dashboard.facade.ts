import { Injectable } from "@angular/core";
import { DashboardSelectors } from './selectors/dashboard.selectors';
import { DashboardFeatureState } from './state';
import { Store } from '@ngrx/store';
import { ChangeDashboardValueAction, RequestDashboardDataAction } from './actions/dashboard.actions';
import { Observable } from 'rxjs';

@Injectable()
export class DashboardFacade extends DashboardSelectors {
    constructor(private store: Store<DashboardFeatureState>) {
        super();
    }

    // ───────────────────────────────────────────────────────────────── DISPATCH ─────
    changeDashboardValue(value: string) {
        this.store.dispatch(new ChangeDashboardValueAction({value}));
    }

    requestDashboardData() {
        this.store.dispatch(new RequestDashboardDataAction());
    }

    // ─────────────────────────────────────────────────────────────────── SELECT ─────

    getDashboardValue(): Observable<string> {
        return this.store.select(this.dashboardValue);
    }

    getDashboardIsLoading(): Observable<boolean> {
        return this.store.select(this.dashboardIsLoading);
    }

    getDashboardData(): Observable<any> {
        return this.store.select(this.dashboardData);
    }
}
