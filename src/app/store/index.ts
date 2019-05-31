import { Person } from '../model/person';
import { ActionReducerMap, createSelector } from '@ngrx/store';
import * as fromPersonReducer from './person.reducer';

export interface AppState {
    people: fromPersonReducer.PeopleState;
}

export const appReducers: ActionReducerMap<AppState> = {
    people: fromPersonReducer.reducer
};

