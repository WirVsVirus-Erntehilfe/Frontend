import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { AppFeatureState } from '../state';
import { appReducer } from './app.reducers';
import { environment } from 'src/environments/environment';

export interface State {

}

export const reducers: ActionReducerMap<AppFeatureState> = {
    app: appReducer
}

export const metaReducers: MetaReducer<AppFeatureState>[] = !environment.production ? [] : [];