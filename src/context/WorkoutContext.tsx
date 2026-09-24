'use client'
import { IWorkout } from '@/types/exerciseDataTypes';
import React, { createContext, useState } from 'react';


interface IWorkoutContext {
    todayPlan: IWorkout[],
    setTodayPlan: React.Dispatch<React.SetStateAction<IWorkout[]>>,
    saved: IWorkout[],
    setSaved: React.Dispatch<React.SetStateAction<IWorkout[]>>,
    selectedTab: 'saved' | 'today-plan',
    setSelectedTab: React.Dispatch<React.SetStateAction<'saved' | 'today-plan'>>,
    markAsDone: number[],
    setMarkAsDone: React.Dispatch<React.SetStateAction<number[]>>
}
export const WorkoutContext = createContext<IWorkoutContext>({
    todayPlan: [],
    setTodayPlan: () => { },
    saved: [],
    setSaved: () => { },
    selectedTab: 'saved',
    setSelectedTab: () => { },
    markAsDone: [],
    setMarkAsDone: () => { }
})


const WorkoutProvider = ({ children }: { children: React.ReactNode }) => {
    const [todayPlan, setTodayPlan] = useState<IWorkout[]>([])
    const [saved, setSaved] = useState<IWorkout[]>([])
    const [selectedTab, setSelectedTab] = useState<'saved' | 'today-plan'>('saved')
    const [markAsDone, setMarkAsDone] = useState<number[]>([])


    const sharedData = {
        todayPlan,
        setTodayPlan,
        saved,
        setSaved,
        selectedTab,
        setSelectedTab,
        markAsDone,
        setMarkAsDone


    }
    return (
        <WorkoutContext.Provider value={sharedData}>{children}</WorkoutContext.Provider>
    );
};

export default WorkoutProvider;
