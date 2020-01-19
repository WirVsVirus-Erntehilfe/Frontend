import { Action } from '@ngrx/store';

export enum Types {
    SET_USER_NAME = '[User] Set username',
};

export type UnionType = 
    | SetUserNameAction;


export class SetUserNameAction implements Action {
    readonly type = Types.SET_USER_NAME;

    constructor(public payload: {username: string}) {}
};
