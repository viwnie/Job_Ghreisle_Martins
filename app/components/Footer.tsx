const Footer = () => {
	return (
		<footer className="flex w-full bg-black text-white p-10 items-center justify-center">
			<div className="flex w-full flex-col gap-2 text-[16px] max-md:ml-0 max-md:justify-center">
				<div className="w-full flex justify-between px-[15%] items-center max-xl:px-5 max-lg:flex-col">
				<h1 className="font-alt text-4xl pt-4 pb-4 ">Ghreisle Cleaning</h1>
					<div>
						<div className="flex">
							<div className="">
								<span
									className="material-symbols-outlined text-white"
									style={{ fontSize: "15px" }}
								>
									calendar_today
								</span>
							</div>
							<p className=" pl-3">Monday-Friday 8 AM to 6 PM</p>
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
							<p className=" pl-3">Lunes a Viernes de 7:00 a 22:00</p>
						</div>
					</div>
					<div className="w-1 bg-[#d1d1d1]"></div>
					<div>
						<div className="flex">
							<div className="">
								<span
									className="material-symbols-outlined text-white"
									style={{ fontSize: "15px" }}
								>
									phone
								</span>
							</div>
							<p className=" pl-3">Phone: (508)280-6878</p>
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
							<p className=" pl-3">ghreislemartins@hotmail.com</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
