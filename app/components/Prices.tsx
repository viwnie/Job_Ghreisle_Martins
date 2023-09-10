const Prices = () => {
	return (
		<div className="flex w-full bg-gray-200 text-black p-10 gap-10 justify-center max-md:flex-col max-md:gap-10 max-md:items-center">
			<div className="bg-white w-[320px] h-[370px] rounded-[20px] ">
				<div className="w-full ml-8 mt-10">
					<h2 className="text-[20px] text-gray-600 font-extrabold">Personal</h2>
					<h2 className="text-bold text-[48px]">
						$300 <span className="text-[14px]">p/month</span>
					</h2>
					<div className="h-full flex flex-col gap-2 mt-3">
						<div className="flex gap-2">
							<span className="material-symbols-outlined">task_alt</span>
							<p>1 Project</p>
						</div>
						<div className="flex gap-2">
							<span className="material-symbols-outlined">task_alt</span>
							<p>Analytics</p>
						</div>
						<div className="flex gap-2">
							<span className="material-symbols-outlined">task_alt</span>
							<p>Insights Panel</p>
						</div>
						<div className="flex gap-2">
							<span className="material-symbols-outlined">task_alt</span>
							<p>Share features</p>
						</div>
					</div>
          <button className="bg-black mt-8 rounded-[10px] h-10 w-[120px] text-white hover:bg-blue-700 transition duration-300">
            <p>Get Started</p>
          </button>
				</div>
			</div>
			<div className="bg-white w-[320px] h-[370px] rounded-[20px]">
				<div className="w-full ml-8 mt-10">
					<h2 className="text-[20px] text-gray-600 font-extrabold">Professional</h2>
					<h2 className="text-bold text-[48px]">
						$500 <span className="text-[14px]">p/month</span>
					</h2>
					<div className="h-full flex flex-col gap-2 mt-3">
						<div className="flex gap-2">
							<span className="material-symbols-outlined">task_alt</span>
							<p>2 Projects</p>
						</div>
						<div className="flex gap-2">
							<span className="material-symbols-outlined">task_alt</span>
							<p>Analytics</p>
						</div>
						<div className="flex gap-2">
							<span className="material-symbols-outlined">task_alt</span>
							<p>Insights Panel</p>
						</div>
						<div className="flex gap-2">
							<span className="material-symbols-outlined">task_alt</span>
							<p>Share features</p>
						</div>
					</div>
          <button className="bg-black mt-8 rounded-[10px] h-10 w-[120px] text-white hover:bg-blue-700 transition duration-300">
            <p>Get Started</p>
          </button>
				</div>
			</div>
			<div className="bg-white w-[320px] h-[370px] rounded-[20px]">
				<div className="w-full ml-8 mt-10">
					<h2 className="text-[20px] text-gray-600 font-extrabold">Business</h2>
					<h2 className="text-bold text-[48px]">
						$1000 <span className="text-[14px]">p/month</span>
					</h2>
					<div className="h-full flex flex-col gap-2 mt-3">
						<div className="flex gap-2">
							<span className="material-symbols-outlined">task_alt</span>
							<p>Unlimited Projects</p>
						</div>
						<div className="flex gap-2">
							<span className="material-symbols-outlined">task_alt</span>
							<p>Analytics</p>
						</div>
						<div className="flex gap-2">
							<span className="material-symbols-outlined">task_alt</span>
							<p>Insights Panel</p>
						</div>
						<div className="flex gap-2">
							<span className="material-symbols-outlined">task_alt</span>
							<p>Share features</p>
						</div>
					</div>
          <button className="bg-black mt-8 rounded-[10px] h-10 w-[120px] text-white hover:bg-blue-700 transition duration-300">
            <p>Get Started</p>
          </button>
				</div>
			</div>
		</div>
	);
};

export default Prices;
