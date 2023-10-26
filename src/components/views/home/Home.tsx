import React from "react";

// components
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/globals/nav/Nav";
import Freelancers from "./Freelancers";

// icons
import { FiZap, FiChevronRight, FiLinkedin, FiFacebook } from "react-icons/fi";
import { BiTargetLock } from "react-icons/bi";
import { GoProjectSymlink } from "react-icons/go";
import { SiEasyeda } from "react-icons/si";
import {
	AiOutlineArrowRight,
	AiOutlineStar,
	AiOutlineInstagram,
} from "react-icons/ai";
import Testimonials from "./Testimonials";

const Home = () => {
	return (
		<div className="h-auto w-full overflow-x-hidden">
			{/* nav */}
			<Nav />

			{/* hero */}
			<section className="h-auto md:h-[35rem] w-full md:w-10/12 flex flex-col md:flex-row items-center justify-center mx-auto py-10 md:py-5 px-5 md:px-0 space-y-10 md:space-y-0">
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
							href="/auth/register"
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

			{/* clientele */}
			<section className="h-auto md:h-96 w-full flex flex-col items-center justify-center mx-auto py-10 bg-[#E85328]/5 mt-10 mb-20 md:my-20">
				<div className="h-8 rounded-full border border-gray-300 px-7 flex items-center justify-center text-xs text-gray-800 font-medium uppercase">
					The Customers
				</div>
				<h3 className="text-4xl font-medium leading-tight text-center w-11/12 md:w-5/12 mt-3">
					Join more than 5000 freelancers saving time with ContractNix
				</h3>
				<div className="h-20 w-full flex items-center justify-center mt-12">
					<Freelancers />
				</div>
			</section>

			{/* benefits */}
			<section className="h-auto w-full md:w-10/12 flex flex-col items-center justify-center space-y-16 bg-transparent mx-auto my-20">
				<div className="h-auto w-full flex flex-col items-start justify-center space-y-5 px-5 md:px-0">
					<div className="h-auto w-full md:w-1/2 flex flex-col items-start justify-center space-y-5">
						<div className="h-8 w-auto rounded-full bg-gray-100 text-[10px] text-gray-700 font-medium flex items-center justify-center uppercase p-2 px-5">
							Our Benefits
						</div>
					</div>
					<div className="h-auto w-full flex flex-col md:flex-row items-start justify-between space-y-5">
						<p className="text-3xl font-medium leading-tight text-left w-10/12 md:w-5/12 md:pr-5">
							One efficient system for all your clients and
							projects
						</p>
						<div className="h-auto w-full md:w-1/2 flex flex-col items-start justify-center space-y-5 md:pl-44">
							<p className="text-md md:text-md text-gray-500 w-11/12 md:w-11/12 font-normal">
								Take the complexity out of contract handling
								while boosting your project management
								capabilities.
							</p>
							<Link
								href="/auth/register"
								className="h-12 md:h-10 px-10 md:px-5 flex items-center justify-center text-sm text-gray-600 font-medium border border-gray-200 rounded-lg"
							>
								Get started
							</Link>
						</div>
					</div>
				</div>

				{/* blocks */}
				<div className="h-auto w-full grid gap-5 grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-y-0 px-5 md:px-0">
					{/* block */}
					<div className="h-auto w-full flex flex-col items-start justify-center space-y-3 bg-[#E85328]/5 rounded-lg p-10">
						<div className="h-12 w-12 bg-white rounded-full flex items-center justify-center">
							<SiEasyeda className="text-lg" />
						</div>
						<h3 className="text-lg font-medium text-gray-800 w-8/12">
							Effortless <br />
							Contract Handling
						</h3>
						<p className="text-md md:text-sm text-gray-500 w-11/12 md:w-full font-normal pr-4">
							Say goodbye to the complexities of contract
							handling. Easily create, organize, and access your
							contracts in one place.
						</p>
					</div>
					{/* block */}
					<div className="h-auto w-full flex flex-col items-start justify-center space-y-3 bg-[#E85328]/5 rounded-lg p-10">
						<div className="h-12 w-12 bg-white rounded-full flex items-center justify-center">
							<GoProjectSymlink className="text-lg" />
						</div>
						<h3 className="text-lg font-medium text-gray-800 w-8/12">
							Amplify <br />
							Project Success
						</h3>
						<p className="text-md md:text-sm text-gray-500 w-11/12 md:w-full font-normal pr-4">
							Set project milestones, track progress, and
							communicate seamlessly with project owners in
							real-time.
						</p>
					</div>
					{/* block */}
					<div className="h-auto w-full flex flex-col items-start justify-center space-y-3 bg-[#E85328]/5 rounded-lg p-10">
						<div className="h-12 w-12 bg-white rounded-full flex items-center justify-center">
							<BiTargetLock className="text-lg" />
						</div>
						<h3 className="text-lg font-medium text-gray-800 w-8/12">
							AI-Powered <br />
							Content Creation
						</h3>
						<p className="text-md md:text-sm text-gray-500 w-11/12 md:w-full font-normal pr-4">
							ContractNix&lsquo;s AI capabilities help you create
							high-quality content quickly and efficiently, saving
							you time like a PRO.
						</p>
					</div>
				</div>
			</section>

			{/* features */}
			<section className="h-auto w-full md:w-10/12 flex flex-col items-center justify-center space-y-16 bg-transparent mx-auto my-20">
				<div className="h-auto w-full flex flex-col items-center justify-center space-y-5">
					<div className="h-auto w-full md:w-1/2 flex flex-col items-center justify-center">
						<div className="h-8 rounded-full border border-gray-300 px-7 flex items-center justify-center text-xs text-gray-800 font-medium uppercase">
							The Features
						</div>
					</div>
					<div className="h-auto w-full flex flex-col items-center justify-center space-y-5">
						<p className="text-3xl font-medium leading-tight text-center w-10/12 md:w-6/12 md:pr-5">
							All-in-one contract management solution for the best
							freelancers
						</p>
						<div className="h-auto w-full flex flex-col items-center justify-center space-y-5">
							<p className="text-md md:text-md text-gray-500 text-center w-10/12 md:w-5/12 font-normal">
								The best Contract management software for
								writers, programmers, video editors and many
								other creatives that thrives.
							</p>
						</div>
					</div>
				</div>

				{/* blocks */}
				<div className="h-auto w-full grid gap-5 grid-cols-1 md:grid-cols-2 px-5 md:px-0">
					{/* block */}
					<div className="h-auto w-full flex flex-col items-start justify-center space-y-3 bg-[#E85328]/5 rounded-lg p-10 overflow-hidden position relative">
						<h3 className="text-lg font-medium text-gray-800 w-7/12 md:w-4/12">
							Contract Creation and Management
						</h3>
						<p className="text-md md:text-sm text-gray-500 w-9/12 md:w-5/12 font-normal pr-4">
							Create, edit, and manage your contracts with ease.
						</p>
						<Link
							href="/auth/register"
							className="font-medium text-sm text-black flex items-center justify-start space-x-2"
						>
							<span>Get Started</span>
							<AiOutlineArrowRight className="text-lg text-black" />
						</Link>
						{/* mockup */}
						<div className="hidden md:block h-full w-1/2 bg-transparent position absolute -top-5 right-0">
							<Image
								src="/assets/images/benefits/contract-benefit.png"
								fill
								alt=""
								className="position absolute right-0 top-0 h-full w-full object-cover"
							/>
						</div>
					</div>
					{/* block */}
					<div className="h-auto w-full flex flex-col items-start justify-start bg-[#E85328]/5 rounded-lg p-10 row-span-2 position relative">
						<h3 className="text-lg font-medium text-gray-800 w-10/12 md:w-5/12">
							AI-Driven <br />
							Content Generation
						</h3>
						<p className="text-md md:text-sm text-gray-500 w-11/12 md:w-5/12 font-normal pr-4 mt-3">
							Harness the power of AI for content generation.
						</p>
						<Link
							href="/auth/register"
							className="font-medium text-sm text-black flex items-center justify-start space-x-2 rounded-full bg-white p-3 position absolute top-5 right-3 md:right-9"
						>
							<span>Get Started</span>
							<AiOutlineArrowRight className="text-lg text-black" />
						</Link>
						{/* mockup */}
						<div className="hidden md:block h-64 w-full bg-transparent position relative mt-10">
							<Image
								src="/assets/images/benefits/ai-benefit.png"
								fill
								alt=""
								className="position absolute right-0 top-0 h-full w-full object-cover"
							/>
						</div>
					</div>
					{/* block */}
					<div className="h-auto w-full flex flex-col items-start justify-center space-y-3 bg-[#E85328]/5 rounded-lg p-10 overflow-hidden position relative">
						<h3 className="text-lg font-medium text-gray-800 w-7/12 md:w-5/12">
							Milestone Tracking and Management
						</h3>
						<p className="text-md md:text-sm text-gray-500 w-10/12 md:w-5/12 font-normal pr-4">
							Define, track, and update project milestones.
						</p>
						<Link
							href="/auth/register"
							className="font-medium text-sm text-black flex items-center justify-start space-x-2"
						>
							<span>Get Started</span>
							<AiOutlineArrowRight className="text-lg text-black" />
						</Link>
						{/* mockup */}
						<div className="hidden md:block h-full w-1/2 bg-transparent position absolute -top-5 right-0">
							<Image
								src="/assets/images/benefits/milestone-benefit.png"
								fill
								alt=""
								className="position absolute right-0 top-0 h-full w-full object-cover"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* testimonials */}
			<section className="h-auto w-full flex flex-col items-center justify-center space-y-16 bg-transparent mx-auto my-20">
				<div className="h-auto w-full flex flex-col items-center justify-center space-y-5">
					<div className="h-auto w-full md:w-1/2 flex flex-col items-center justify-center">
						<div className="h-8 rounded-full border border-gray-300 px-7 flex items-center justify-center text-xs text-gray-800 font-medium uppercase">
							Testimonial
						</div>
					</div>
					<div className="h-auto w-full flex flex-col items-center justify-center space-y-5">
						<p className="text-3xl font-medium leading-tight text-center w-8/12 md:w-6/12 md:pr-5">
							Hear what others are saying
						</p>
						<div className="h-auto w-full flex flex-col items-center justify-center space-y-5">
							<p className="text-md md:text-md text-gray-500 text-center w-9/12 md:w-4/12 font-normal">
								Discover the success stories an positibe
								feedback from satisfied freelancers with our
								testimonal section
							</p>
						</div>
					</div>
				</div>

				{/* blocks */}
				<Testimonials />
				<div className="hidden h-auto w-full grid gap-5 grid-cols-2">
					{/* block */}
					<div className="h-auto w-full flex flex-col items-start justify-center space-y-7 bg-transparent rounded-lg p-10 overflow-hidden position relative border border-gray-100">
						<div className="h-auto w-auto flex items-center justify-start space-x-1">
							<AiOutlineStar className="text-[#E8BE57] text-md" />
							<AiOutlineStar className="text-[#E8BE57] text-md" />
							<AiOutlineStar className="text-[#E8BE57] text-md" />
							<AiOutlineStar className="text-[#E8BE57] text-md" />
							<AiOutlineStar className="text-[#E8BE57] text-md" />
						</div>
						<p className="text-md md:text-sm text-gray-500 w-10/12 font-normal pr-4 leading-loose">
							This is one of the best tools that have happened in
							a while for digital creators and in the freelance
							industry. I&lsquo;m really impressed with this
							innovation.
						</p>
						<div className="h-12 w-full flex items-center justify-start space-x-3">
							<div className="h-full w-12 rounded-lg flex items-center justify-center position relative overflow-hidden">
								<Image
									src="/assets/images/freelancers/4.jpg"
									fill
									alt=""
									className="h-full w-full object-cover"
								/>
							</div>
							<div className="h-full w-auto flex flex-col items-start justify-start">
								<h3 className="text-md font-medium text-gray-800">
									Kebab Priston
								</h3>
								<p className="text-md md:text-xs text-gray-500 w-11/12 font-normal pr-4">
									Digital Artist
								</p>
							</div>
						</div>
					</div>

					{/* block */}
					<div className="h-auto w-full flex flex-col items-start justify-center space-y-7 bg-transparent rounded-lg p-10 overflow-hidden position relative border border-gray-100">
						<div className="h-auto w-auto flex items-center justify-start space-x-1">
							<AiOutlineStar className="text-[#E8BE57] text-md" />
							<AiOutlineStar className="text-[#E8BE57] text-md" />
							<AiOutlineStar className="text-[#E8BE57] text-md" />
							<AiOutlineStar className="text-[#E8BE57] text-md" />
							<AiOutlineStar className="text-[#E8BE57] text-md" />
						</div>
						<p className="text-md md:text-sm text-gray-500 w-10/12 font-normal pr-4 leading-loose">
							This is one of the best tools that have happened in
							a while for digital creators and in the freelance
							industry. I&lsquo;m really impressed with this
							innovation.
						</p>
						<div className="h-12 w-full flex items-center justify-start space-x-3">
							<div className="h-full w-12 rounded-lg flex items-center justify-center position relative overflow-hidden">
								<Image
									src="/assets/images/freelancers/1.jpg"
									fill
									alt=""
									className="h-full w-full object-cover"
								/>
							</div>
							<div className="h-full w-auto flex flex-col items-start justify-start">
								<h3 className="text-md font-medium text-gray-800">
									Shamane Crystler
								</h3>
								<p className="text-md md:text-xs text-gray-500 w-11/12 font-normal pr-4">
									Academic Writer
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* banner */}
			<section className="h-[30rem] md:h-96 w-full flex flex-col items-center justify-center bg-[#121D2A] mx-auto my-20">
				<div className="h-auto w-full flex flex-col items-center justify-center">
					<div className="h-auto w-full flex flex-col items-center justify-center">
						<p className="text-3xl font-medium leading-tight text-center w-11/12 md:w-5/12 md:pr-5 text-white">
							Automate your manual Contract Management tasks today
						</p>
						<div className="h-auto w-full flex flex-col items-center justify-center mt-5">
							<p className="text-md md:text-md text-white/70 text-center w-11/12 md:w-5/12 font-normal">
								No hidden cost. No implementation fee
							</p>
						</div>
						<section className="h-auto w-full flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-3 mt-10">
							<Link
								href="/auth/register"
								className="h-14 md:h-12 w-80 md:w-40 bg-[#E85328] rounded-lg flex items-center justify-center space-x-2 text-md md:text-sm cursor-pointer text-white"
							>
								<span>Start for free</span>
								<FiChevronRight className="text-lg text-white" />
							</Link>
							<Link
								href=""
								className="h-14 md:h-12 w-80 md:w-40 rounded-lg flex items-center justify-center text-[#121D2A] text-md md:text-sm cursor-pointer bg-white"
							>
								Book a demo
							</Link>
						</section>
					</div>
				</div>

				{/* actions */}
			</section>

			{/* footer */}
			<section className="h-auto w-full md:w-10/12 flex flex-col items-center justify-center space-y-16 bg-transparent mx-auto my-20 px-5 md:px-0">
				<div className="h-auto w-full grid grid-cols-2 md:grid-cols-4 gap-y-10">
					<div className="h-auto w-full flex flex-col items-start justify-start">
						{/* logo */}
						<div className="h-auto w-auto flex items-center justify-center space-x-3">
							<div className="h-8 w-8 rounded-full bg-[#E85328]/10 flex items-center justify-center">
								<FiZap className="text-md text-[#E85328]" />
							</div>
							<p className="font-medium text-md">ContractNix</p>
						</div>
					</div>
					<div className="h-auto w-full flex flex-col items-start justify-start space-y-5">
						<h3 className="text-md font-medium text-gray-800">
							Products
						</h3>
						<div className="h-auto w-full flex flex-col items-start justify-start space-y-2">
							<Link
								href="/"
								className="text-sm text-gray-500 cursor-pointer"
							>
								Onboarding
							</Link>
							<Link
								href="/"
								className="text-sm text-gray-500 cursor-pointer"
							>
								Recruitment
							</Link>
						</div>
					</div>
					<div className="h-auto w-full flex flex-col items-start justify-start space-y-5">
						<h3 className="text-md font-medium text-gray-800">
							Resources
						</h3>
						<div className="h-auto w-full flex flex-col items-start justify-start space-y-2">
							<Link
								href="/"
								className="text-sm text-gray-500 cursor-pointer"
							>
								Pricing
							</Link>
							<Link
								href="/"
								className="text-sm text-gray-500 cursor-pointer"
							>
								Support center
							</Link>
							<Link
								href="/"
								className="text-sm text-gray-500 cursor-pointer"
							>
								Freelancer stories
							</Link>
							<Link
								href="/"
								className="text-sm text-gray-500 cursor-pointer"
							>
								Write for us
							</Link>
						</div>
					</div>
					<div className="h-auto w-full flex flex-col items-start justify-start space-y-5">
						<h3 className="text-md font-medium text-gray-800">
							Company
						</h3>
						<div className="h-auto w-full flex flex-col items-start justify-start space-y-2">
							<Link
								href="/"
								className="text-sm text-gray-500 cursor-pointer"
							>
								About us
							</Link>
							<Link
								href="/"
								className="text-sm text-gray-500 cursor-pointer"
							>
								Career
							</Link>
							<Link
								href="/"
								className="text-sm text-gray-500 cursor-pointer"
							>
								Request a demo
							</Link>
						</div>
					</div>
				</div>

				<div className="h-12 w-full border-t border-gray-200 py-10 flex flex-col space-y-7 md:space-y-0 md:flex-row md:items-center items-start justify-between">
					<p className="text-md md:text-xs text-gray-500 w-11/12 font-normal pr-4">
						© ContractNix | All Rights Reserved
					</p>
					<div className="h-auto w-auto flex items-center justify-start space-x-4">
						<FiFacebook className="text-gray-700 text-2xl md:text-xl cursor-pointer" />
						<AiOutlineInstagram className="text-gray-700 text-2xl md:text-xl cursor-pointer" />
						<FiLinkedin className="text-gray-700 text-2xl md:text-xl cursor-pointer" />
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
