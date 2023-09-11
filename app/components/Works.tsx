const Works = () => {
	return (
		<div className="flex justify-center items-center flex-col">
			<h1 className="font-bold text-5xl text-[#EA1E26]">Get Started</h1>
			<div className="w-[500px] flex flex-col justify-center items-center pt-10 pb-14 max-md:w-[90%]">
				<p className="text-center text-[20px] font-medium">
					Transform your house and your trade into a sparkling sanctuary with our
					exceptional house cleaning services. Book now and watch the magic unfold!
				</p>
				<button className="bg-[#EA1E26] mt-8 rounded-[10px] h-10 w-[120px] text-white hover:bg-black transition duration-300">
					<p>Book now</p>
				</button>
			</div>
		</div>
	);
};

export default Works;
