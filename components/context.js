import React, { useContext } from 'react';

export const TaskContext = React.createContext({tasks: [], setTasks: () => {}});

export function useTasks(){
    return useContext(TaskContext);
}