import React from "react";

// components
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/globals/nav/Nav";

// icons
import { FiZap, FiChevronRight } from "react-icons/fi";

const Home = () => {
	return (
		<div className="h-auto w-full overflow-x-hidden">
			<Nav />
			{/* hero */}
			<section className="h-auto md:h-[35rem] w-full md:w-10/12 flex flex-col md:flex-row items-center justify-center mx-auto py-10 md:py-5 px-5 md:px-0 space-y-10 mdLspace-y-0">
				{/* left */}
				<div className="h-full w-full md:w-1/2 flex flex-col items-start justify-center bg-transparent space-y-7">
					<div className="h-8 w-auto rounded-full bg-gray-100 text-[10px] text-gray-700 font-medium flex items-center justify-center uppercase p-2 px-5">
						CREATE-MANAGE-EARN
					</div>
					<h1 className="text-4xl md:text-5xl font-bold leading-tight w-full md:w-11/12">
						All-in-one Contract Management System For Freelancers
					</h1>
					<p className="text-lg md:text-md text-gray-500 w-11/12 md:w-9/12 font-normal">
						Contractix is your go-to solution for simplified
						contract management and amplified project success.
					</p>
					<section className="h-auto w-full flex items-center justify-start space-x-3">
						<Link
							href=""
							className="h-12 w-40 bg-[#E85328] rounded-lg flex items-center justify-center space-x-2 text-sm cursor-pointer border border-gray-100 text-white"
						>
							<span>Start for free</span>
							<FiChevronRight className="text-lg text-white" />
						</Link>
						<Link
							href=""
							className="h-12 w-40 rounded-lg flex items-center justify-center text-gray-800 text-sm cursor-pointer border border-gray-200"
						>
							Book a demo
						</Link>
					</section>
					<p className="text-sm text-gray-500 w-9/12 font-normal">
						No credit card required
					</p>
					<section className="h-auto w-full flex items-center justify-start space-x-2 md:space-x-7">
						<div className="h-auto w-auto flex items-center justify-center space-x-4">
							<p className="text-3xl text-gray-800 w-auto font-bold">
								400+
							</p>
							<p className="text-sm text-gray-500 w-7/12 font-normal leading-snug md:leading-tight">
								Contractors Registered
							</p>
						</div>
						<div className="h-auto w-auto flex items-center justify-center space-x-4">
							<p className="text-3xl text-gray-800 w-auto font-bold">
								20k+
							</p>
							<p className="text-sm text-gray-500 w-5/12 font-normal leading-snug md:leading-tight">
								Freelancers Joined
							</p>
						</div>
					</section>
				</div>
				{/* right */}
				<div className="h-full w-full md:w-1/2 flex items-center justify-center md:justify-end bg-transparent">
					<div className="bg-transparent rounded-lg h-[30rem] w-full md:w-4/5 position relative">
						<Image
							src="/assets/images/hero/hero-bg.png"
							alt=""
							fill
							className="h-full w-full object-cover"
						/>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
