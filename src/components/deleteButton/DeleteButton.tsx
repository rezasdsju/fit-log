'use client'

import { WorkoutContext } from "@/context/WorkoutContext";
import { IWorkout } from "@/types/exerciseDataTypes";
import { useContext } from "react";
import { FaTimes } from "react-icons/fa";


const DeleteButton = ({ workout }: { workout: IWorkout }) => {
    const { todayPlan, setTodayPlan, saved, setSaved, selectedTab } = useContext(WorkoutContext)

    const handleDelete = () => {
        if (selectedTab==='today-plan') {
            const remainingTodayPlan = todayPlan.filter(p => p.id !== workout.id)
            setTodayPlan(remainingTodayPlan)
        } else {
            const remainingSaved = saved.filter(s => s.id !== workout.id)
            setSaved(remainingSaved)
        }
    }
    return (
        <div>
            <span onClick={handleDelete}><FaTimes />
            </span>
        </div>
    );
};

export default DeleteButton;