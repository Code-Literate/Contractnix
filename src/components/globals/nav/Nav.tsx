"use client";
import React, { FC, useState } from "react";

// components
import Link from "next/link";

// icons
import { FiZap, FiChevronRight } from "react-icons/fi";

const Nav: FC = () => {
	const [drawer, setDrawer] = useState<boolean>(false);
	const toggleDrawer = (): void => setDrawer((prev) => !prev);

	return (
		<nav className="h-20 w-full rounded-md bg-transparent border-b border-gray-100 flex items-center justify-between px-5 md:px-10">
			{/* logo */}
			<section className="h-full w-1/2 flex items-center justify-start space-x-20">
				{/* logo */}
				<div className="h-auto w-auto flex items-center justify-center space-x-3">
					<div className="h-8 w-8 rounded-full bg-[#E85328]/10 flex items-center justify-center">
						<FiZap className="text-md text-[#E85328]" />
					</div>
					<p className="font-medium text-md">ContractNix</p>
				</div>
				{/* menu */}
				<div className="h-auto w-auto hidden md:flex items-start justify-start space-x-5">
					<Link
						href="#"
						className="text-sm text-gray-700 cursor-pointer transition-all duration-300 hover:text-[#E85328]"
					>
						Products
					</Link>
					<Link
						href="#"
						className="text-sm text-gray-700 cursor-pointer transition-all duration-300 hover:text-[#E85328]"
					>
						Case Study
					</Link>
					<Link
						href="#"
						className="text-sm text-gray-700 cursor-pointer transition-all duration-300 hover:text-[#E85328]"
					>
						Pricing
					</Link>
				</div>
			</section>

			{/* actions */}
			<section className="h-full w-1/2 flex items-center justify-end space-x-3">
				<Link
					href=""
					className="h-10 w-24 rounded-lg hidden md:flex items-center justify-center text-gray-800 text-sm cursor-pointer border border-gray-200 transition-all duration-300 hover:border-[#E85328] hover:text-[#E85328]"
				>
					Log In
				</Link>
				<Link
					href=""
					className="h-10 w-32 bg-[#E85328] rounded-lg flex items-center justify-center space-x-2 text-sm cursor-pointer border border-gray-100 text-white group"
				>
					<span>Start for free</span>
					<FiChevronRight className="text-lg text-white transition-all duration-300 group-hover:transform group-hover:translate-x-1" />
				</Link>

				{/* hamburger */}
				<div className="flex md:hidden position relative z-30">
					<div
						onClick={toggleDrawer}
						className="h-full w-5 flex flex-col items-center justify-center space-y-1"
					>
						<div
							className={`h-[2px] w-full rounded-full transition duration-300 transform ${
								drawer
									? "-rotate-45 bg-white"
									: "rotate-0 bg-black"
							}`}
						></div>
						<div
							className={`h-[2px] w-full rounded-full transition duration-300 transform ${
								drawer ? "scale-0 bg-white" : "scale-1 bg-black"
							}`}
						></div>
						<div
							className={`h-[2px] w-full rounded-full transition duration-300 transform ${
								drawer
									? "rotate-45 bg-white"
									: "rotate- bg-black"
							}`}
						></div>
					</div>
				</div>
			</section>

			{/* mobile drawer */}
			<div
				className={`h-full w-full overflow-hidden bg-[#E85328] flex flex-col items-start justify-start space-y-5 pt-40 px-5 position fixed top-0 left-0 z-10 transition duration-300 transform ${
					drawer ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<Link
					href="/comingsoon"
					className="h-auto w-full text-2xl font-bold font-poppins text-white cursor-pointer pb-5 border-b border-white flex items-center justify-start"
				>
					Products
				</Link>
				<Link
					href="/comingsoon"
					className="h-auto w-full text-2xl font-bold font-poppins text-white cursor-pointer pb-5 border-b border-white flex items-center justify-start"
				>
					Case Study
				</Link>
				<Link
					href="/comingsoon"
					className="h-auto w-full text-2xl font-bold font-poppins text-white cursor-pointer pb-5 border-b border-white flex items-center justify-start"
				>
					Pricing
				</Link>
				<Link
					href="/comingsoon"
					className="h-auto w-full text-2xl font-bold font-poppins text-white cursor-pointer pb-5 border-b border-white flex items-center justify-start"
				>
					Discover
				</Link>
				<Link
					href="/comingsoon"
					className="h-auto w-full text-2xl font-bold font-poppins text-white cursor-pointer pb-5 border-b border-white flex items-center justify-start"
				>
					Support
				</Link>
				<Link
					href="/auth/login"
					className="h-auto w-full text-2xl font-bold font-poppins text-white cursor-pointer pb-5 border-b border-white flex items-center justify-start"
				>
					Log In
				</Link>
			</div>
		</nav>
	);
};

export default Nav;
