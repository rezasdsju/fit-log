'use client'
import { WorkoutContext } from "@/context/WorkoutContext";
import { IWorkout } from "@/types/exerciseDataTypes";
import { useContext } from "react";

import { TiTick } from "react-icons/ti";
import { toast } from "react-toastify";


const MarkAsDone = ({workout}:{workout:IWorkout}) => {
    const {markAsDone, setMarkAsDone} = useContext(WorkoutContext)

    
    const hasInMarked = markAsDone.includes(workout.id)
   

    const handleMarkAsDone = ()=>{
        
        if (!hasInMarked){
            setMarkAsDone(prev=>[...prev, workout.id])
            toast.success('Workout marked as done!');
       
        } else {
            setMarkAsDone(prev=>prev.filter(markId=>markId!==workout.id))
            toast.info('Workout removed from completed list!');
         
        }
    }
    
    return (
        <button onClick={handleMarkAsDone} className={`${hasInMarked?'bg-[#22C55E]':'bg-[#CCFF00]'} text-[#000000] px-1 min-[400px]:px-3 py-1 rounded-xl flex items-center`}><span><TiTick /></span>{!hasInMarked?'Mark as Done':'Completed'}</button>
    );
};

export default MarkAsDone;