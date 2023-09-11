const Contact = () => {
	return (
		<div className="w-full flex justify-center pb-6 max-md:p-6">
			<form className="flex flex-col max-w-[700px] w-full gap-5 justify-center items-center max-md:max-w-full">
				<h1 className="text-5xl font-bold">Contact</h1>
				<div className="flex gap-5 w-full max-md:flex-col">
					<input type="text" placeholder="Name" className="bg-gray-200 w-1/2 h-[40px] p-2 border-none rounded-sm max-md:w-full" />
					<input type="text" placeholder="Email" className="bg-gray-200 w-1/2 h-[40px] p-2 border-none rounded-sm max-md:w-full" />
				</div>
				<input type="text" placeholder="Message" className="bg-gray-200 w-full h-[100px] p-2 border-none rounded-sm" />
				<button type="submit" className="bg-[#EA1E26] mt-2 rounded-[10px] h-10 w-full text-white hover:bg-black transition duration-300">
						<p>Send</p>
					</button>
			</form>
		</div>
	);
};

export default Contact;
