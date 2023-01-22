import React, { useContext } from 'react';

export const TaskContext = React.createContext({tasks: [], setTask: () => {}});

export function useTasks(){
    return useContext(TaskContext);
}