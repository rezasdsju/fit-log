
'use client'

const BrowseButton = () => {
    return (
        <button onClick={() => document.getElementById('library')?.scrollIntoView()} className="bg-[#C2F800] font-semibold text-black rounded px-5 py-2 ">BROWSE WORKOUTS</button>

    );
};

export default BrowseButton;