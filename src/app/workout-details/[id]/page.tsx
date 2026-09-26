import type { IWorkout } from "@/types/exerciseDataTypes";
import Image from "next/image";
import { notFound } from "next/navigation";
import TodayPlanButton from "@/components/workoutDetailButtons/TodayPlanButton";

import SaveLaterButton from "@/components/workoutDetailButtons/SaveLaterButton";

const WorkoutDetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`)
    const workoutData = await res.json()
    const workout: IWorkout = workoutData.find((d: IWorkout) => d.id === parseInt(id))

    if (!workout){
        notFound()
    }
    return (
        <div className="grid grid-cols-1  sm:grid-cols-2 gap-5 py-10 ">
            <div className="px-4 py-1">
                <div className="relative h-60 sm:h-130 w-full overflow-hidden rounded-2xl">
                    <Image src={workout.image} alt={workout.name} fill className="object-cover"></Image>
                </div>
            </div>
            <div className=" px-3  space-y-4">
                <h2 className="text-[#FFFFFF]">{workout.name.toLocaleUpperCase()}</h2>
                <p className="text-[#9CA3AF]">{workout.description}</p>
                <div className='flex gap-4 pb-2'>

                    {workout.muscleGroups.map((muscle, index) => <p key={index} className='bg-[#C2F800] px-3 rounded-2xl text-black font-semibold'>{muscle}</p>)}

                </div>
                <div className="bg-[#1E2330] border-[1.5px] border-[#232834] my-4 px-3 py-3 rounded-2xl">
                    <div className="flex justify-between border-b border-[#232834] p-2">
                        <h3 className="text-[#9CA3AF]">EQUIPMENT</h3>
                        <p className="text-[#E5E7EB]">{workout.equipment}</p>
                    </div>
                    <div className="flex justify-between border-b border-[#232834] p-2">
                        <h3 className="text-[#9CA3AF]">DIFFICULTY</h3>
                        <p className="text-[#E5E7EB]">{workout.difficulty}</p>
                    </div>
                    <div className="flex justify-between border-b border-[#232834] p-2">
                        <h3 className="text-[#9CA3AF]">SETS</h3>
                        <p className="text-[#E5E7EB]">{workout.sets}</p>
                    </div>
                    <div className="flex justify-between border-b border-[#232834] p-2">
                        <h3 className="text-[#9CA3AF]">REPS</h3>
                        <p className="text-[#E5E7EB]">{workout.reps}</p>
                    </div>
                    <div className="flex justify-between border-b border-[#232834] p-2">
                        <h3 className="text-[#9CA3AF]">DURATION</h3>
                        <p className="text-[#E5E7EB]">{workout.duration}</p>
                    </div>
                    <div className="flex justify-between border-b border-[#232834] p-2">
                        <h3 className="text-[#9CA3AF]">CALORIES</h3>
                        <p className="text-[#E5E7EB]">{workout.caloriesBurned}</p>
                    </div>
                    <div className="flex justify-between p-2">
                        <h3 className="text-[#9CA3AF]">RATING</h3>
                        <p className="text-[#E5E7EB]">{workout.rating}</p>
                    </div>
                </div>
                <h3 className="text-[#FFFFFF] font-semibold">INSTRUCTIONS</h3>
                <ol className="list-decimal list-inside">
                    {
                        workout.instructions.map((instruction,index)=><li key={index} className="text-[#D1D5DB]">{instruction}</li>)
                    }
                </ol>
                <div className="flex py-5 gap-4">
                    <TodayPlanButton workout={workout}></TodayPlanButton>
                    <SaveLaterButton workout={workout}></SaveLaterButton>

                </div>
            </div>
        </div>
    );
};

export default WorkoutDetailPage;