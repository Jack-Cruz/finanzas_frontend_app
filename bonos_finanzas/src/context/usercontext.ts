import React from 'react';
import { UserActions } from './useractions';
import { initialUserState, UserState } from './userstate';

export const UserContext = React.createContext<{
    state: UserState;
    dispatch: React.Dispatch<UserActions>;
}>({
    state: initialUserState,
    dispatch: () => null
})