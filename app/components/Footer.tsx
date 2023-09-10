const Footer = () => {
	return (
		<footer className="flex w-full bg-blue-500 text-white p-10 justify-between max-sm:flex-col max-sm:gap-10 max-sm:items-center ">
			<div className="flex flex-col gap-2 ml-20  text-[20px] max-sm:ml-0 max-sm:justify-center bg-red-500">
				<div className="flex bg-green-500">
					<div className="">
						<span
							className="material-symbols-outlined text-white"
							style={{ fontSize: "15px" }}
						>
							calendar_today
						</span>
					</div>
					<p className=" pl-1">Lunes a Viernes de 7:00 a 22:00</p>
				</div>
				<div className="flex">
					<div className="">
						<span
							className="material-symbols-outlined text-white"
							style={{ fontSize: "15px" }}
						>
							calendar_today
						</span>
					</div>
					<p className=" pl-1">Lunes a Viernes de 7:00 a 22:00</p>
				</div>
				<div className="flex">
					<div className="">
						<span
							className="material-symbols-outlined text-white"
							style={{ fontSize: "15px" }}
						>
							phone
						</span>
					</div>
					<p className=" pl-1">Lunes a Viernes de 7:00 a 22:00</p>
				</div>
				<div className="flex">
					<div className="">
						<span
							className="material-symbols-outlined text-white"
							style={{ fontSize: "15px" }}
						>
							phone
						</span>
					</div>
					<p className=" pl-1">Lunes a Viernes de 7:00 a 22:00</p>
				</div>
				<div className="flex">
					<div className="">
						<span
							className="material-symbols-outlined text-white"
							style={{ fontSize: "15px" }}
						>
							arrow_right_alt
						</span>
					</div>
					<p className=" pl-1">Lunes a Viernes de 7:00 a 22:00</p>
				</div>
				<div className="flex">
					<div className="">
						<span
							className="material-symbols-outlined text-white"
							style={{ fontSize: "15px" }}
						>
							map
						</span>
					</div>
					<p className=" pl-1">Lunes a Viernes de 7:00 a 22:00</p>
				</div>
			</div>
			<div className="flex justify-center">
				<img src="https://via.placeholder.com/300x285" alt="" />
			</div>
		</footer>
	);
};

export default Footer;