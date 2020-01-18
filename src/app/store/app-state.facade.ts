import { Injectable } from "@angular/core";
import { AppSelectors } from './selectors/app.selectors';
import { AppFeatureState } from './state';
import { Store } from '@ngrx/store';
import { SetExampleFlagAction, ToggleExampleFlagAction } from './actions/app.actions';
import { Observable } from 'rxjs';

@Injectable()
export class AppStateFacade extends AppSelectors {
    constructor(
        private store: Store<AppFeatureState>,
    ) {
        super();
    }

    // ───────────────────────────────────────────────────────────────── DISPATCH ─────

    public setExpampleFlag(flag: boolean) {
        this.store.dispatch(new SetExampleFlagAction({exampleFlag: flag}));
    }

    public toggleExampleFlag() {
        this.store.dispatch(new ToggleExampleFlagAction());
    }

    // ─────────────────────────────────────────────────────────────────── SELECT ─────

    public getExampleFlag(): Observable<boolean> {
        return this.store.select(this.exampleFlagSelector);
    }

}