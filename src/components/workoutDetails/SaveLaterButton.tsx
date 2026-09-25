'use client'
import { WorkoutContext } from "@/context/WorkoutContext";
import { IWorkout } from "@/types/exerciseDataTypes";
import { useContext } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { toast } from "react-toastify";



const SaveLaterButton = ({ workout }: { workout: IWorkout }) => {
    const {saved, setSaved} = useContext(WorkoutContext)
    const handleSaveButton = ()=>{
        // const hasIncludedToSaved = saved.find(w=>w.id===workout.id)
        const hasIncludedToSaved = saved.some(w=>w.id===workout.id)
        if (hasIncludedToSaved) {
            toast.error('Already in saved')
            return
        }
        // setSaved([...saved, workout])
        setSaved(prev=>[...prev, workout])
        toast.success('Added to Saved')
    }
    return (
        <div className="flex items-center bg-[#374151] gap-2 rounded px-4 py-2 border border-[#374151]">
            <span>
                <FaRegBookmark />
            </span>
            <button onClick={handleSaveButton} className="text-[#E5E7EB] ">Save for later</button>
        </div>
    );
};

export default SaveLaterButton;