"use client";
import React, { FC, useState, useEffect, ChangeEvent, FormEvent } from "react";

// remote data fetching
import { resetPassword } from "@/database/firebase";

// components
import Link from "next/link";

// icons
import { HiOutlineMail } from "react-icons/hi";
import { GoLinkExternal } from "react-icons/go";
import { FiZap } from "react-icons/fi";

const ResetPassword: FC = () => {
	const [error, setError] = useState("");
	const [email, setEmail] = useState("");
	const [loading, setLoading] = useState(false);
	const [done, setDone] = useState(false);

	const handleEmail = (e: ChangeEvent<HTMLInputElement>) =>
		setEmail(e.target.value);

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		setLoading(true);

		if (validateForm()) {
			const userData = {
				email,
			};
			await resetPassword(userData?.email);
			setDone(true);
			// console.log(userData);
		} else setLoading(false);
	};

	const validateForm = () => {
		let valid = false;

		if (email.length < 3) {
			setError("Email is required");
			valid = false;
		} else if (!isValidEmail(email)) {
			setError("Email is invalid!");
			valid = false;
		} else {
			setError("");
			valid = true;
		}

		return valid;
	};

	const isValidEmail = (s: string) => {
		return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
			s
		);
	};

	return (
		<div className="min-h-screen h-screen w-full flex items-center justify-center overflow-y-auto">
			<section className="h-full w-full grid grid-cols-1">
				{/* inner */}
				<div className="h-auto w-full flex flex-col items-start justify-center position relative">
					{/* header */}
					<div className="h-auto w-full flex items-center justify-start position absolute left-0 top-0 px-5 py-10 md:p-10">
						<Link href="/">
							<div className="h-auto w-auto flex items-center justify-center space-x-3 position absolute top-5">
								<div className="h-8 w-8 rounded-full bg-[#E85328]/10 flex items-center justify-center">
									<FiZap className="text-md text-[#E85328]" />
								</div>
								<p className="font-medium text-md">
									ContractNix
								</p>
							</div>
						</Link>
					</div>

					{/* form */}
					<form
						onSubmit={handleSubmit}
						className="h-auto w-full md:w-5/12 rounded-md mx-auto flex flex-col items-center justify-center mt-32"
					>
						<h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center">
							Reset your password
						</h2>
						<p className="w-10/12 md:w-8/12 text-md text-gray-500 font-normal my-5 text-center">
							If you signed up with a username and password, reset
							your password below.
						</p>
						<p className="hidden w-10/12 text-md text-gray-500 font-normal text-left">
							If you signed up using your phone number, Google or
							Apple, get help accessing your account{" "}
							<Link href="#">
								<span className="text-[#E85328] font-normal">
									here
								</span>
							</Link>
							.
						</p>

						{/* error */}
						<h3 className="text-xs text-red-500 text-center my-3">
							{error}
						</h3>

						{done ? (
							<div className="h-auto w-full flex flex-col items-center justify-center space-y-4">
								<p className="w-10/12 md:w-9/12 text-md text-gray-800 font-medium text-center">
									A password reset instructions and link will
									be sent to this email address if it is
									associated with any account.
								</p>
								<p className="text-green-500 text-md font-medium">
									Email Sent!
								</p>
								<Link
									href="/auth/login"
									className="h-auto w-10/12 bg-transparent rounded-full flex items-center justify-center space-x-3"
								>
									<GoLinkExternal className="text-[#E85328] text-lg" />
									<p className="text-sm text-[#E85328] font-medium">
										Back to login
									</p>
								</Link>
							</div>
						) : null}

						<div
							className={`h-auto w-full flex-col items-center justify-center space-y-3 my-7 ${
								done ? "hidden" : "flex"
							}`}
						>
							{/* email */}
							<div className="h-12 w-10/12 border-2 border-gray-100 rounded-lg flex items-center justify-center position relative overflow-hidden">
								<input
									value={email}
									onChange={handleEmail}
									type="email"
									placeholder="Email Address"
									className="h-full w-full pl-12 placeholder:text-gray-400 placeholder:font-normal placeholder:text-sm bg-transparent focus:outline-none text-sm text-gray-500"
								/>
								{/* icon */}
								<div className="h-8 w-8 rounded-full bg-transparent position absolute top-2 left-2 flex items-center justify-center">
									<HiOutlineMail className="text-[#E85328] text-lg" />
								</div>
							</div>
							{/* cta */}
							<div className="h-auto w-10/12 flex items-center justify-center">
								<button className="h-12 w-full bg-[#E85328]/90 rounded-full flex items-center justify-center hover:bg-[#E85328] transition duration-300">
									<p className="text-md text-white font-medium">
										{loading
											? "Loading..."
											: "Reset password"}
									</p>
								</button>
							</div>
							{/* or */}
							<Link
								href="/auth/login"
								className="h-12 w-10/12 bg-transparent rounded-full flex items-center justify-center space-x-3"
							>
								<GoLinkExternal className="text-[#E85328] text-lg" />
								<p className="text-sm text-[#E85328] font-medium">
									Back to login
								</p>
							</Link>
						</div>
					</form>
				</div>
			</section>
		</div>
	);
};

export default ResetPassword;
