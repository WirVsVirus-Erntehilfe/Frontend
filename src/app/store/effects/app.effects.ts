import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ToggleExampleFlagAction } from '../actions/app.actions';
import { AppActions } from '../actions';
import { tap } from 'rxjs/operators'
@Injectable()
export class AppEffects {
    
    @Effect({dispatch: false})
    toggleExampleFlag = this.actions$.pipe(
        ofType<ToggleExampleFlagAction>(AppActions.Types.TOGGLE_EXAMPLE_FLAG),
        tap(() => {
            console.log('Toggle effect');
            // implement side effects for toggle flag
        })
    )

    constructor(
        private actions$: Actions,
    ) {}
}