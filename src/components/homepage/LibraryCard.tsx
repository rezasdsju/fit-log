

import type { IWorkout } from '@/types/exerciseDataTypes'
import Image from 'next/image';
import { FaRegClock, FaRegStar } from 'react-icons/fa';
import { FaFireFlameCurved } from 'react-icons/fa6';
import Link from 'next/link';
const LibraryCard = ({ workout }: { workout: IWorkout }) => {
    return (
<Link href={`workout-details/${workout.id}`}>
        <div className='rounded-2xl border border-[#404750]'>
            <div className='relative h-60 min-[400px]:h-48 w-full overflow-hidden rounded-t-2xl'>
                <Image src={workout.image} alt={workout.name} fill className='object-cover'></Image>
            </div>
            <div className='px-2 py-3 '>
                <div className='flex gap-4 pb-2'>

                    {workout.muscleGroups.map((muscle, index) => <p key={index} className='bg-[#C2F800] px-3 rounded-2xl text-black font-semibold'>{muscle.toLocaleUpperCase()}</p>)}

                </div>
                <h2 className='font-semibold text-[#FFFFFF] text-xl'>{workout.name.toLocaleUpperCase()}</h2>
                <p className='text-[#9CA3AF]'>{workout.equipment}</p>
                <div className='flex gap-4 border-t border-[#2c2f36] mt-2 pt-2'>
                    <div className='flex items-center gap-1'>
                        <span><FaRegClock /></span>
                        <p>{workout.duration} min</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <span><FaFireFlameCurved /></span>
                        <p>
                            {workout.caloriesBurned} kcal</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <span><FaRegStar /></span><p>
                            {workout.rating}</p>
                    </div>
                </div>
            </div>
        </div>
</Link>
    );
};

export default LibraryCard;