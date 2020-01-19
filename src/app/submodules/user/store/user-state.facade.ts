import { Injectable } from "@angular/core";
import { UserSelectors } from './selectors/user.selectors';
import { Store } from '@ngrx/store';
import { UserFeatureState } from './state';
import { SetUserNameAction } from './actions/user.actions';
import { Observable } from 'rxjs';

@Injectable()
export class UserFacade extends UserSelectors {
    constructor(private store: Store<UserFeatureState>) {
        super();
    }

    // ───────────────────────────────────────────────────────────────── DISPATCH ─────

    setNewUsername(username: string): void {
        this.store.dispatch(new SetUserNameAction({username}));
    }

// ─────────────────────────────────────────────────────────────────── SELECT ─────

    getUsername(): Observable<string> {
        return this.store.select(this.username);
    }
}