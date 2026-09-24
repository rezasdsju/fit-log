'use client'

import { WorkoutContext } from "@/context/WorkoutContext";
import { IWorkout } from "@/types/exerciseDataTypes";
import { useContext } from "react";
import { LuCalendarPlus2 } from "react-icons/lu";
import { toast } from "react-toastify";



const TodayPlanButton = ({ workout }: { workout: IWorkout }) => {

    const { todayPlan, setTodayPlan } = useContext(WorkoutContext)
    console.log(todayPlan)
    const handleTodayClick = () => {
        // const hasIncludedToTodayplan = todayPlan.find(w => w === workout)
        const hasIncludedToTodayplan = todayPlan.find(w => w.id === workout.id)
        if (hasIncludedToTodayplan) {
            toast.error('Already in your plan')
            return
        }
        setTodayPlan([...todayPlan, workout])
        toast.success("Added to today's Plan")

    }
    return (
        <div className="flex items-center bg-[#CCFF00] gap-2 rounded px-4 py-2">
            <span>
                <LuCalendarPlus2 />
            </span>
            <button onClick={handleTodayClick} className="text-[#0F1115]">Add to today&apos;s plan</button>
        </div>
    );
};

export default TodayPlanButton;