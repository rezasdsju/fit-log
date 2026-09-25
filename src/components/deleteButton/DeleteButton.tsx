'use client'

import { WorkoutContext } from "@/context/WorkoutContext";
import { IWorkout } from "@/types/exerciseDataTypes";
import { useContext } from "react";
import { FaTimes } from "react-icons/fa";


const DeleteButton = ({ workout }: { workout: IWorkout }) => {
    // const { todayPlan, setTodayPlan, saved, setSaved, selectedTab, markAsDone, setMarkAsDone } = useContext(WorkoutContext)
    const { setTodayPlan, setSaved, selectedTab,  setMarkAsDone } = useContext(WorkoutContext)

    const handleDelete = () => {
        if (selectedTab==='today-plan') {
            // const remainingTodayPlan = todayPlan.filter(p => p.id !== workout.id)
            // setTodayPlan(remainingTodayPlan)
            setTodayPlan(prev=>prev.filter(p=>p.id!==workout.id))
            // const remainingMarkAsDone = markAsDone.filter(m=>m!==workout.id)
            // setMarkAsDone(remainingMarkAsDone)
            setMarkAsDone(prev=>prev.filter(m=>m!==workout.id))
        } else {
            // const remainingSaved = saved.filter(s => s.id !== workout.id)
            // setSaved(remainingSaved)
            setSaved(prev=>prev.filter(s => s.id !== workout.id))
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