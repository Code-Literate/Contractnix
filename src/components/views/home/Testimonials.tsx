"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Autoplay, FreeMode, Manipulation } from "swiper/modules";
import "swiper/css"; // Import Swiper styles
import "swiper/css/autoplay"; // Import Swiper styles
import "swiper/css/manipulation"; // Import Swiper styles

import { useRouter } from "next/navigation";
import Image from "next/image";

// icons
import { AiOutlineArrowRight, AiOutlineStar } from "react-icons/ai";

interface Creator {
	name: string;
	data: object;
	photo: string;
}

const Testimonials = () => {
	const router = useRouter();
	const [creators, setCreators] = useState([
		{
			name: "precious_adeyinka",
			data: {},
			photo: "/assets/images/freelancers/1.jpg",
		},
		{
			name: "precious_adeyinka",
			data: {},
			photo: "/assets/images/freelancers/2.jpg",
		},
		,
		{
			name: "precious_adeyinka",
			data: {},
			photo: "/assets/images/freelancers/3.jpg",
		},
		{
			name: "precious_adeyinka",
			data: {},
			photo: "/assets/images/freelancers/4.jpg",
		},
		{
			name: "precious_adeyinka",
			data: {},
			photo: "/assets/images/freelancers/5.jpg",
		},
		{
			name: "precious_adeyinka",
			data: {},
			photo: "/assets/images/freelancers/6.jpg",
		},
		{
			name: "precious_adeyinka",
			data: {},
			photo: "/assets/images/freelancers/1.jpg",
		},
		{
			name: "precious_adeyinka",
			data: {},
			photo: "/assets/images/freelancers/2.jpg",
		},
		{
			name: "precious_adeyinka",
			data: {},
			photo: "/assets/images/freelancers/3.jpg",
		},
		{
			name: "precious_adeyinka",
			data: {},
			photo: "/assets/images/freelancers/4.jpg",
		},
		{
			name: "precious_adeyinka",
			data: {},
			photo: "/assets/images/freelancers/5.jpg",
		},
		{
			name: "precious_adeyinka",
			data: {},
			photo: "/assets/images/freelancers/6.jpg",
		},
	]);
	const interval = 0;

	useEffect(() => {}, []);

	return (
		<Swiper
			modules={[Autoplay, FreeMode, Manipulation]}
			direction="horizontal"
			autoplay={{
				delay: interval,
				disableOnInteraction: false,
				pauseOnMouseEnter: true,
			}}
			freeMode={{
				enabled: true,
				sticky: true,
			}}
			loop={true}
			speed={5000}
			spaceBetween={30}
			slidesPerView={1}
			centeredSlides={false}
			effect={"slide"}
			breakpoints={{
				640: {
					slidesPerView: 1, // Set slidesPerView to 1 for mobile
					spaceBetween: 70,
					speed: 1000,
				},
				// When the viewport width is 768px or more (desktop)
				768: {
					slidesPerView: 3, // Set slidesPerView to 3 for desktop
					spaceBetween: 30,
				},
			}}
			className="h-auto w-full flex tiems-center justify-center my-10"
		>
			{creators.map((creator, id) => {
				return (
					<SwiperSlide
						onClick={() => {
							router.push(`/freelancer/${creator?.name}`);
						}}
						key={id}
						className="h-auto w-auto flex items-center justify-center cursor-pointer"
					>
						<div className="h-auto w-full flex flex-col items-start justify-center space-y-7 bg-transparent rounded-lg p-10 overflow-hidden position relative border border-gray-100">
							<div className="h-auto w-auto flex items-center justify-start space-x-1">
								<AiOutlineStar className="text-[#E8BE57] text-md" />
								<AiOutlineStar className="text-[#E8BE57] text-md" />
								<AiOutlineStar className="text-[#E8BE57] text-md" />
								<AiOutlineStar className="text-[#E8BE57] text-md" />
								<AiOutlineStar className="text-[#E8BE57] text-md" />
							</div>
							<p className="text-md md:text-sm text-gray-500 w-full md:w-10/12 font-normal pr-4 leading-loose">
								This is one of the best tools that have happened
								in a while for digital creators and in the
								freelance industry. I&lsquo;m really impressed
								with this innovation.
							</p>
							<div className="h-12 w-full flex items-center justify-start space-x-3">
								<div className="h-full w-12 rounded-lg flex items-center justify-center position relative overflow-hidden">
									<Image
										src={creator?.photo || ""}
										alt={`sendaza.ng/${creator?.name}`}
										fill
										className="h-full w-full object-cover"
									/>
								</div>
								<div className="h-full w-full md:w-auto flex flex-col items-start justify-start">
									<h3 className="text-md font-medium text-gray-800">
										Shamane Crystler
									</h3>
									<p className="text-md md:text-xs text-gray-500 w-11/12 font-normal pr-4">
										Academic Writer
									</p>
								</div>
							</div>
						</div>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};

export default Testimonials;
