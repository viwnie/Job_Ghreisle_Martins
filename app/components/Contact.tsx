const Contact = () => {
	return (
		<div className="flex justify-center items-center pb-20">
			<form action="">
				<h1 className="flex justify-center text-5xl font-bold pb-5">Contact</h1>
				<div className="w-[700px] gap-4 flex items-center justify-center">
					<input type="text" placeholder="Name" className="bg-gray-200 w-[242px] h-[40px] p-2 border-none rounded-sm" />
					<input type="text" placeholder="Email" className="bg-gray-200 w-[242px] h-[40px] p-2 border-none rounded-sm" />
				</div>
				<div className="w-[700px] flex items-center flex-col pt-4">
					<input type="text" placeholder="Message" className="bg-gray-200 w-[500px] h-[100px] p-2 border-none rounded-sm" />
					<button className="bg-[#EA1E26] mt-2 rounded-[10px] h-10 w-[500px] text-white hover:bg-black transition duration-300">
						<p>Send</p>
					</button>
				</div>
			</form>
		</div>
	);
};

export default Contact;
