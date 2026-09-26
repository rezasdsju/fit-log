'use client'

import { WorkoutContext } from "@/context/WorkoutContext";
import { IWorkout } from "@/types/exerciseDataTypes";
import { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";


const DeleteButton = ({ workout }: { workout: IWorkout }) => {
    const { setTodayPlan, setSaved, selectedTab,  setMarkAsDone } = useContext(WorkoutContext)

    const handleDelete = () => {
        if (selectedTab==='today-plan') {
            setTodayPlan(prev=>prev.filter(p=>p.id!==workout.id))
            setMarkAsDone(prev=>prev.filter(m=>m!==workout.id))
            toast.info("Workout removed from today's plan!");
        } else {
            setSaved(prev=>prev.filter(s => s.id !== workout.id))
            toast.info('Workout removed from saved plan!');
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