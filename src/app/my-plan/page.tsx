
const MyPlanPage = () => {
    return (
        <div className="px-3 sm:px-5 py-5 sm:py-10 space-y-4">
            <div>
                <h1 className="text-[#FFFFFF] font-bold text-3xl">MY PLAN</h1>
                <p className="text-[#8A92A0]">Cap of five lifts for today. Finish them, then load more.</p>
            </div>
            <div className="grid grid-cols-3 border-[1.5px] border-[#232732] bg-[#232732] px-3 sm:px-6 py-3 rounded-2xl">
                <div className="text-[#8A92A0]">
                    <h4>Exercises</h4>
                    <p className="text-[#CCFF00] text-3xl">2</p>
                </div>
                <div className="text-[#8A92A0] ">
                    <h4>Minutes</h4>
                    <p className="text-[#FFFFFF] text-3xl">23</p>
                </div>
                <div className="text-[#8A92A0]">
                    <h4>Calories</h4>
                    <p className="text-[#FFFFFF] text-3xl">190</p>
                </div>
            </div>
            <div className="flex justify-between">
                {/* name of each tab group should be unique */}
                <div className="tabs tabs-border">
                    <input type="radio" name="my_tabs_2" className="tab" aria-label="Today’s Plan" />
                    <div className="tab-content border-base-300 bg-base-100 p-10">Today’s Plan</div>

                    <input type="radio" name="my_tabs_2" className="tab" aria-label="Saved" defaultChecked />
                    <div className="tab-content border-base-300 bg-base-100 p-10 ">Saved</div>

                </div>

                <div>
                    <div className="flex items-center gap-4">
                        <h4>Sort By</h4>

                        <div>
                            <select defaultValue="Server location" className="select select-neutral">
                                <option disabled={true}>Server location</option>
                                <option>North America</option>
                                <option>EU west</option>
                                <option>South East Asia</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default MyPlanPage;