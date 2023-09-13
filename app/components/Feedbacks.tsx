import { bgHero } from "@/public";
import Image from "next/image";

const Feedbacks = () => {
	return (
		<div className="flex items-center flex-col pt-20 pb-10">
			<h1 className="text-5xl font-bold">Reviews</h1>
			<div className="flex w-full bg-white text-black p-10 gap-10 justify-center max-lg:flex-col max-lg:gap-10 max-lg:items-center pt-20 ">
				<div className="bg-white w-[320px] h-[300px] rounded-[20px] shadow-2xl p-6 hover:scale-110 transform transition-transform duration-300 ease-in-out">
					<div className="flex gap-2">
						<Image
							src={bgHero}
							alt="User Picture"
							className="w-10 h-10 rounded-[50px]"
						/>
						<div className="flex flex-col">
							<h2 className="font-bold">Eva elle</h2>
							<p className="text-[14px]">@evaelle</p>
						</div>
					</div>
					<div className="w-full mt-10">
						<div className="h-full flex flex-col gap-2">
							<p className="">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
								voluptas omnis quas autem cupiditate sunt, dolorem obcaecati beatae
							</p>
						</div>
					</div>
				</div>
				<div className="bg-white w-[320px] h-[300px] rounded-[20px] shadow-2xl p-6 hover:scale-110 transform transition-transform duration-300 ease-in-out">
					<div className="flex gap-2">
						<div className="flex gap-2">
							<Image
								src={bgHero}
								alt="User Picture"
								className="w-10 h-10 rounded-[50px]"
							/>

							<div className="flex flex-col">
								<h2 className="font-bold">Eva elle</h2>
								<p className="text-[14px]">@evaelle</p>
							</div>
						</div>
					</div>
					<div className="w-full mt-10">
						<div className="h-full flex flex-col gap-2">
							<p className="">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
								voluptas omnis quas autem cupiditate sunt, dolorem obcaecati beatae
							</p>
						</div>
					</div>
				</div>
				<div className="bg-white w-[320px] h-[300px] rounded-[20px] shadow-2xl p-6 hover:scale-110 transform transition-transform duration-300 ease-in-out">
					<div className="flex gap-2">
						<div className="flex gap-2">
							<Image
								src={bgHero}
								alt="User Picture"
								className="w-10 h-10 rounded-[50px]"
							/>
							<div className="flex flex-col">
								<h2 className="font-bold">Eva elle</h2>
								<p className="text-[14px]">@evaelle</p>
							</div>
						</div>
					</div>
					<div className="w-full mt-10">
						<div className="h-full flex flex-col gap-2">
							<p className="">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
								voluptas omnis quas autem cupiditate sunt, dolorem obcaecati beatae
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Feedbacks;
