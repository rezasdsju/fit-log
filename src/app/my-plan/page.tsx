'use client'
import ListedWorkoutCard from "@/components/shared/ListedWorkoutCard";
import { WorkoutContext } from "@/context/WorkoutContext";
import { IWorkout } from "@/types/exerciseDataTypes";
import { useContext, useState } from "react";
import ListedWorkoutFallback from "@/components/shared/ListedWorkoutFallback";


const MyPlanPage = () => {
    const [sortBy, setSortBy] = useState<'duration'|'calories'|'rating'>('duration')
    // const [todayPlanSelected, setTodayPlanSelected] = useState(false)
    
    const { todayPlan, saved,selectedTab, setSelectedTab} = useContext(WorkoutContext)
    const handleTodaySelected = ()=>{
        setSelectedTab('today-plan')
    }
    const handleSavedSelected = ()=>{
        setSelectedTab('saved')
    }
    const sortWorkout = (workout:IWorkout[])=>{
        const sortedWorkout = [...workout]
        if (sortBy==='duration'){
            sortedWorkout.sort((a,b)=>b.duration-a.duration)
        } else if (sortBy==='calories'){
            sortedWorkout.sort((a,b)=>b.caloriesBurned -a.caloriesBurned)
        } else {
            sortedWorkout.sort((a,b)=>b.rating-a.rating)
        }
        return sortedWorkout
    }
    const sortedTodayPlan = sortWorkout(todayPlan)
    const sortedSaved = sortWorkout(saved)
    const todayPlanDurationTotal = todayPlan.map(workout=>workout.duration).reduce((elem,acc)=>elem+acc, 0)
    const todayPlanCaloriesTotal = todayPlan.map(workout=>workout.caloriesBurned).reduce((elem,acc)=>elem+acc, 0)

    const savedWorkoutDurationTotal = saved.map(workout=>workout.duration).reduce((elem,acc)=>elem+acc,0)

    const savedWorkoutCaloriesTotal = saved.map(workout=>workout.caloriesBurned).reduce((elem,acc)=>elem+acc,0)
    return (
        <div className="px-3 sm:px-5 py-5 sm:py-10 space-y-4">
            <div>
                <h1 className="text-[#FFFFFF] font-bold text-3xl">MY PLAN</h1>
                <p className="text-[#8A92A0]">Cap of five lifts for today. Finish them, then load more.</p>
            </div>
            <div className="grid grid-cols-3 border-[1.5px] border-[#232732] bg-[#232732] px-3 sm:px-6 py-3 rounded-2xl">
                <div className="text-[#8A92A0]">
                    <h4>Exercises</h4>
                    <p className="text-[#CCFF00] text-3xl">{selectedTab==='today-plan'?todayPlan.length:saved.length}</p>
                </div>
                <div className="text-[#8A92A0] ">
                    <h4>Minutes</h4>
                    <p className="text-[#FFFFFF] text-3xl">{selectedTab==='today-plan'?todayPlanDurationTotal:savedWorkoutDurationTotal}</p>
                </div>
                <div className="text-[#8A92A0]">
                    <h4>Calories</h4>
                    <p className="text-[#FFFFFF] text-3xl">{selectedTab==='today-plan'?todayPlanCaloriesTotal:savedWorkoutCaloriesTotal}</p>
                </div>
            </div>
            <div className="relative ">
                {/* name of each tab group should be unique */}
                <div className="tabs tabs-border w-full ">
                    <input onClick={handleTodaySelected} type="radio" name="my_tabs_2" className="tab" aria-label="Today’s Plan" />
                    <div className="tab-content border-base-300 bg-base-100 px-2 py-2 sm:px-5 sm:py-5 mt-5">
                        {
                           sortedTodayPlan.length>0? sortedTodayPlan.map((workout:IWorkout)=> <ListedWorkoutCard key={workout.id} workout={workout}></ListedWorkoutCard>): <ListedWorkoutFallback></ListedWorkoutFallback>
                        }
                    </div>

                    <input onClick={handleSavedSelected} type="radio" name="my_tabs_2" className="tab" aria-label="Saved" defaultChecked />
                    <div className="tab-content border-base-300 bg-base-100 px-2 py-2 sm:px-5 sm:py-5 mt-5">
                        {
                            sortedSaved.length>0? sortedSaved.map(workout=><ListedWorkoutCard key={workout.id} workout={workout}></ListedWorkoutCard>) :<ListedWorkoutFallback></ListedWorkoutFallback>

                        }
                    </div>

                </div>

                <div>
                    <div className="absolute right-0 top-0 flex items-center gap-2 sm:gap-4">
                        <h4 className="hidden min-[400px]:block whitespace-nowrap">Sort By</h4>

                        
                            <select onChange={(e)=>setSortBy(e.target.value as 'duration'|'calories'|'rating')} defaultValue="Server location" className="select select-neutral">
                                <option disabled={true}> Sort</option>
                                <option value='duration'>Duration</option>
                                <option value='calories'>Calories</option>
                                <option value='rating'>Rating</option>
                            </select>
                        
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default MyPlanPage;