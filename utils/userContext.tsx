import React, { Context } from 'react';
import { User, AppState, Actions, initialAppState } from '../types'

const UserContext = React.createContext<{
    state: AppState; 
    dispatch: React.Dispatch<Actions>;
}>({
    state: initialAppState,
    dispatch: () => undefined
});

export default UserContext;