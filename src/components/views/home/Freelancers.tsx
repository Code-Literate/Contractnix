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

interface Creator {
	name: string;
	data: object;
	photo: string;
}

const Freelancers = () => {
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
			spaceBetween={10}
			slidesPerView={5}
			centeredSlides={false}
			effect={"slide"}
			breakpoints={{
				640: {
					slidesPerView: 5, // Set slidesPerView to 1 for mobile
					spaceBetween: 0,
					speed: 5000,
				},
				// When the viewport width is 768px or more (desktop)
				768: {
					slidesPerView: 10, // Set slidesPerView to 3 for desktop
					spaceBetween: 7,
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
						className="h-auto w-5 flex items-center justify-center cursor-pointer"
					>
						<div className="h-20 w-20 bg-white rounded-full flex items-center justify-center">
							<div className="h-14 w-14 rounded-full overflow-hidden position relative">
								<Image
									src={creator?.photo || ""}
									alt={`sendaza.ng/${creator?.name}`}
									fill
									className="h-full w-full object-cover"
								/>
							</div>
						</div>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};

export default Freelancers;
