import Link from "next/link";
const ListedWorkoutFallback = () => {
    return (
        <div className="text-center space-y-3">
            <h2 className="text-2xl font-semibold text-[#FFFFFF]">NOTHING HERE YET</h2>
            <p className="text-[#A1A1AA]">Browse the library and add a lift to get today moving.</p>
            <Link href='/' className="bg-[#C2F10D] text-[#000000] px-4 py-2 rounded-2xl">Go to workouts</Link>
        </div>
    );
};

export default ListedWorkoutFallback;