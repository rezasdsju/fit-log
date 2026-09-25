'use client'

import { WorkoutContext } from "@/context/WorkoutContext";
import { IWorkout } from "@/types/exerciseDataTypes";
import { useContext } from "react";
import { FaTimes } from "react-icons/fa";


const DeleteButton = ({ workout }: { workout: IWorkout }) => {
    const { todayPlan, setTodayPlan, saved, setSaved, selectedTab, markAsDone, setMarkAsDone } = useContext(WorkoutContext)

    const handleDelete = () => {
        if (selectedTab==='today-plan') {
            const remainingTodayPlan = todayPlan.filter(p => p.id !== workout.id)
            setTodayPlan(remainingTodayPlan)
            const remainingMarkAsDone = markAsDone.filter(m=>m!==workout.id)
            setMarkAsDone(remainingMarkAsDone)
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