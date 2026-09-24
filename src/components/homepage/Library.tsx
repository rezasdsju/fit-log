import type {IWorkout} from '@/types/exerciseDataTypes'
import LibraryCard from './LibraryCard';
const getWorkoutData = async()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`)
    if (!res.ok){
        throw new Error('Failed to fetch Data')
    }
    return await res.json()
}


const Library = async() => {
    const workoutData:IWorkout[] = await getWorkoutData()
    console.log(getWorkoutData)
    return (
        <div className='px-2 sm:px-3 md:px-7 lg:px-10'>
            <h2 className='font-bold text-2xl text-[]#FFFFFF'>THE LIBRARY</h2>
            <p className='text-[#9CA3AF]'>Twelve lifts covering every major muscle group.</p>
            <div className='grid grid-cols-1 min-[505px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6'>
                {
                    workoutData.map(workout=><LibraryCard key={workout.id} workout={workout}></LibraryCard>)
                }
            </div>
        </div>
    );
};

export default Library;