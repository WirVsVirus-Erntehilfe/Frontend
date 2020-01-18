import { Action } from '@ngrx/store';

export enum Types {
    SET_EXAMPLE_FLAG = '[App] Set example flag',
    TOGGLE_EXAMPLE_FLAG = '[App] Toggle example flag',
}

export type UnionType =
    | SetExampleFlagAction
    | ToggleExampleFlagAction;

export class SetExampleFlagAction implements Action {
    readonly type = Types.SET_EXAMPLE_FLAG;

    constructor(public payload: {exampleFlag: boolean}) {}
}

export class ToggleExampleFlagAction implements Action {
    readonly type = Types.TOGGLE_EXAMPLE_FLAG;
}
