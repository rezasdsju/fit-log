import type { IWorkout } from "@/types/exerciseDataTypes";
import Image from "next/image";
import { FaRegClock, FaRegStar } from "react-icons/fa";
import { FaFireFlameCurved } from "react-icons/fa6";
// import { TiTick } from "react-icons/ti";
import DeleteButton from "../deleteButton/DeleteButton";
import Link from "next/link";
import MarkAsDone from "./MarkAsDone";
import { useContext } from "react";
import { WorkoutContext } from "@/context/WorkoutContext";


const ListedWorkoutCard = ({ workout }: { workout: IWorkout }) => {
    const {selectedTab} = useContext(WorkoutContext)
    
    return (
        <div className="sm:flex sm:justify-between bg-[#232732] border border-[#8A92A0] px-4 py-2 my-2 rounded-2xl">
            <div className="flex gap-4">
                <div className="relative h-30 w-40 overflow-hidden rounded-2xl">
                    <Image src={workout.image} alt={workout.name} fill className="object-cover"></Image>
                </div>
                <div>
                    <h2 className="text-[#FFFFFF] sm:text-2xl font-semibold">{workout.name}</h2>
                    <p className="text-[#8A92A0]">{workout.equipment}</p>
                    <div className='flex flex-wrap gap-4  mt-2 pt-2'>
                        <div className='flex items-center gap-1'>
                            <span className="text-[#CCFF00]"><FaRegClock /></span>
                            <p className="text-[#8A92A0]">{workout.duration} min</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <span className="text-[#CCFF00]"><FaFireFlameCurved /></span>
                            <p className="text-[#8A92A0]">
                                {workout.caloriesBurned} kcal
                            </p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <span className="text-[#CCFF00]"><FaRegStar /></span>
                            <p className="text-[#8A92A0]">
                                {workout.rating}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center gap-4 pt-3 sm:pt-0">
                <Link href={`/workout-details/${workout.id}`}><button className="bg-[#374151] text-[#FFFFFF] px-3 py-1 rounded-xl border border-[#8A92A0]">View Details</button></Link>
                {
                    selectedTab==='today-plan' && <MarkAsDone workout={workout}></MarkAsDone>
                }
                <DeleteButton workout={workout}></DeleteButton>
            </div>
        </div>
    );
};

export default ListedWorkoutCard;