'use client'
import { WorkoutContext } from "@/context/WorkoutContext";
import { IWorkout } from "@/types/exerciseDataTypes";
import { useContext } from "react";

import { TiTick } from "react-icons/ti";


const MarkAsDone = ({workout}:{workout:IWorkout}) => {
    const {markAsDone, setMarkAsDone} = useContext(WorkoutContext)

    // const hasInMarked = markAsDone.find(markedId=>markedId===workout.id)
    const hasInMarked = markAsDone.includes(workout.id)
   

    const handleMarkAsDone = ()=>{
        // const hasInMarked = markAsDone.find(markedId=>markedId===workout.id)
        if (!hasInMarked){
            // setMarkAsDone([...markAsDone,workout.id])
            setMarkAsDone(prev=>[...prev, workout.id])
       
        } else {
            // const remaining = markAsDone.filter(markId=>markId!==workout.id)
            // setMarkAsDone(remaining)
            setMarkAsDone(prev=>prev.filter(markId=>markId!==workout.id))
         
        }
    }
    
    return (
        <button onClick={handleMarkAsDone} className={`${hasInMarked?'bg-[#22C55E]':'bg-[#CCFF00]'} text-[#000000] px-1 min-[400px]:px-3 py-1 rounded-xl flex items-center`}><span><TiTick /></span>{!hasInMarked?'Mark as Done':'Completed'}</button>
    );
};

export default MarkAsDone;