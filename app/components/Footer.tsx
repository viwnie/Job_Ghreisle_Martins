const Footer = () => {
	return (
		<footer className="flex w-full bg-black text-white p-10 justify-between max-md:flex-col max-md:gap-10 max-md:items-center ">
			<div className="flex flex-col gap-2 ml-20  text-[16px] max-md:ml-0 max-md:justify-center">
				<div>
					<h1 className="font-alt text-4xl pt-4 pb-4">Ghreisle Cleaning</h1>
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
			<div className="mr-20 max-md:mr-0">
				<img src="https://via.placeholder.com/300x285" alt="" />
			</div>
		</footer>
	);
};

export default Footer;
