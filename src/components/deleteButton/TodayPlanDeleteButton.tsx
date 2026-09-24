'use client'

import { WorkoutContext } from "@/context/WorkoutContext";
import { IWorkout } from "@/types/exerciseDataTypes";
import { useContext } from "react";
import { FaTimes } from "react-icons/fa";


const TodayPlanDeleteButton = ({workout}:{workout:IWorkout}) => {
    const {todayPlan, setTodayPlan} = useContext(WorkoutContext)
    const handleDelete = ()=>{
        const remainingTodayPlan = todayPlan.filter(p=>p!==workout)
        setTodayPlan(remainingTodayPlan)
    }
    return (
        <div>
            <span onClick={handleDelete}><FaTimes />
            </span>
        </div>
    );
};

export default TodayPlanDeleteButton;