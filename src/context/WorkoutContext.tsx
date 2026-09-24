'use client'
import { IWorkout } from '@/types/exerciseDataTypes';
import React, { createContext, useState } from 'react';


interface IWorkoutContext {
    todayPlan:IWorkout[],
    setTodayPlan: React.Dispatch<React.SetStateAction<IWorkout[]>>,
    saved:IWorkout[],
    setSaved:React.Dispatch<React.SetStateAction<IWorkout[]>>
}
export const WorkoutContext = createContext<IWorkoutContext>({
    todayPlan:[],
    setTodayPlan:()=>{},
    saved:[],
    setSaved:()=>{}
})


const WorkoutProvider = ({ children }: { children: React.ReactNode }) => {
    const [todayPlan, setTodayPlan] = useState<IWorkout[]>([])
    const [saved, setSaved] = useState<IWorkout[]>([])
    const sharedData = {
        todayPlan,
        setTodayPlan,
        saved,
        setSaved
    }
    return (
        <WorkoutContext.Provider value={sharedData}>{children}</WorkoutContext.Provider>
    );
};

export default WorkoutProvider;