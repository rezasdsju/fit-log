'use client'

import { WorkoutContext } from "@/context/WorkoutContext";
import { IWorkout } from "@/types/exerciseDataTypes";
import { useContext } from "react";
import { LuCalendarPlus2 } from "react-icons/lu";
import { toast } from "react-toastify";



const TodayPlanButton = ({ workout }: { workout: IWorkout }) => {

    const { todayPlan, setTodayPlan } = useContext(WorkoutContext)
    const hasIncludedToTodayplan = todayPlan.some(w => w.id === workout.id)
    const handleTodayClick = () => {
        // const hasIncludedToTodayplan = todayPlan.some(w => w.id === workout.id)
        // // if (hasIncludedToTodayplan) {
        // //     toast.error('Already in your plan')
        // //     return
        // // }
        setTodayPlan(prev=>[...prev, workout])
        toast.success("Added to today's Plan")

    }
    return (
        <div className={`${hasIncludedToTodayplan?'bg-gray-500':'bg-[#CCFF00]'} flex items-center  gap-2 rounded px-4 py-2`}>
            <span>
                <LuCalendarPlus2 />
            </span>
            <button onClick={handleTodayClick}  className="text-[#0F1115]  disabled:text-gray-900 opacity-60 cursor-not-allowed" disabled={hasIncludedToTodayplan}>{hasIncludedToTodayplan?'Added to Plan':"Add to today's plan"}</button>
        </div>
    );
};

export default TodayPlanButton;