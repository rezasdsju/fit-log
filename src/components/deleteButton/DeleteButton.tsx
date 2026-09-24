'use client'

import { WorkoutContext } from "@/context/WorkoutContext";
import { IWorkout } from "@/types/exerciseDataTypes";
import { useContext } from "react";
import { FaTimes } from "react-icons/fa";


const DeleteButton = ({ workout }: { workout: IWorkout }) => {
    const { todayPlan, setTodayPlan, saved, setSaved, todayPlanSelected } = useContext(WorkoutContext)

    const handleDelete = () => {
        if (todayPlanSelected) {
            const remainingTodayPlan = todayPlan.filter(p => p !== workout)
            setTodayPlan(remainingTodayPlan)
        } else {
            const remainingSaved = saved.filter(s => s !== workout)
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