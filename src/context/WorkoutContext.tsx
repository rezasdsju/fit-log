'use client'
import { IWorkout } from '@/types/exerciseDataTypes';
import React, { createContext, useState } from 'react';


interface IWorkoutContext {
    todayPlan:IWorkout[],
    setTodayPlan: React.Dispatch<React.SetStateAction<IWorkout[]>>,
    saved:IWorkout[],
    setSaved:React.Dispatch<React.SetStateAction<IWorkout[]>>,
    todayPlanSelected: boolean,
    setTodayPlanSelected:React.Dispatch<React.SetStateAction<boolean>>,
    isSavedSelected: boolean,
    setIsSavedSelected:React.Dispatch<React.SetStateAction<boolean>>
}
export const WorkoutContext = createContext<IWorkoutContext>({
    todayPlan:[],
    setTodayPlan:()=>{},
    saved:[],
    setSaved:()=>{},
    todayPlanSelected: false,
    setTodayPlanSelected: ()=>{},
    isSavedSelected: true,
    setIsSavedSelected:()=>{}
})


const WorkoutProvider = ({ children }: { children: React.ReactNode }) => {
    const [todayPlan, setTodayPlan] = useState<IWorkout[]>([])
    const [saved, setSaved] = useState<IWorkout[]>([])
    const [todayPlanSelected, setTodayPlanSelected] = useState(false)
    const [isSavedSelected, setIsSavedSelected] = useState(true)

    const sharedData = {
        todayPlan,
        setTodayPlan,
        saved,
        setSaved,
        todayPlanSelected,
        setTodayPlanSelected,
        isSavedSelected,
        setIsSavedSelected
        
    }
    return (
        <WorkoutContext.Provider value={sharedData}>{children}</WorkoutContext.Provider>
    );
};

export default WorkoutProvider;
