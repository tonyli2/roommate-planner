import React, { useContext } from 'react';

export const DoneTaskContext = React.createContext({Donetasks: [], setDoneTasks: () => {}});

export function useDoneTasks(){
    return useContext(DoneTaskContext);
}