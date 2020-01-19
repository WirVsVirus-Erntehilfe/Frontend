import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { SetUserNameAction } from '../actions/user.actions';
import { UserActions } from '../actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class UserEffects {

    @Effect({dispatch: false})
    setNewUsername = this.actions$.pipe(
        ofType<SetUserNameAction>(UserActions.Types.SET_USER_NAME),
        tap(() => {
            console.log('Username effect');
            // implement username side effects
        })
    )

    constructor(private actions$: Actions) {}
}