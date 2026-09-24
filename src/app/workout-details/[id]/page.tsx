import type { IWorkout } from "@/types/exerciseDataTypes";
import Image from "next/image";
import { FaRegBookmark } from "react-icons/fa";
import { LuCalendarPlus2 } from "react-icons/lu";
const BookDetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`)
    const workoutData = await res.json()
    const workout: IWorkout = workoutData.find((d: IWorkout) => d.id === parseInt(id))
    return (
        <div className="grid grid-cols-1  sm:grid-cols-2 gap-5 py-10 ">
            <div className="px-4 py-1">
                <div className="relative h-60 sm:h-130 w-full overflow-hidden rounded-2xl">
                    <Image src={workout.image} alt={workout.name} fill className="object-cover"></Image>
                </div>
            </div>
            <div className=" px-3  space-y-4">
                <h2 className="text-[#FFFFFF]">BARBELL BENCH PRESS</h2>
                <p className="text-[#9CA3AF]">A compound press that builds chest thickness, triceps, and pressing power from a stable bench.</p>
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
                    <li className="text-[#D1D5DB]">Lie on the bench with eyes under the bar and feet planted.</li>
                    <li className="text-[#D1D5DB]">Unrack with locked elbows and lower the bar to mid-chest.</li>
                    <li className="text-[#D1D5DB]">Press up in a slight arc until elbows lock without bouncing.</li>
                    <li className="text-[#D1D5DB]">Keep shoulder blades pinched and a natural arch in the back.</li>
                </ol>
                <div className="flex py-5 gap-4">
                    <div className="flex items-center bg-[#CCFF00] gap-2 rounded px-4 py-2">
                        <span>
                            <LuCalendarPlus2 />
                        </span>
                        <button className="text-[#0F1115]">Add to today&apos;s plan</button>
                    </div>
                    <div className="flex items-center bg-[#374151] gap-2 rounded px-4 py-2 border border-[#374151]">
                        <span>
                            <FaRegBookmark />
                        </span>
                        <button className="text-[#E5E7EB] ">Save for later</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetailPage;