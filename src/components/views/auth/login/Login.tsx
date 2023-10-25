"use client";
import React, {
	FC,
	useState,
	useEffect,
	ChangeEvent,
	FormEvent,
	useRef,
} from "react";

// firebase
import { signIn } from "@/database/firebase";

// components
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Preloader from "@/components/globals/preloader/Preloader";

// icons
import { FiZap, FiEye, FiEyeOff } from "react-icons/fi";

// hooks
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { AUTH_USER } from "@/redux/reducers/userReducer";

export const Login: FC = () => {
	const navigation = useRouter();
	const passwdRef = useRef<HTMLInputElement | null>(null);

	const dispatch = useAppDispatch();
	const userStore = useAppSelector((state) => state.user);

	const [user, setUser] = useState<any | null>(null);

	const [error, setError] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwdType, setPasswdType] = useState("password");
	const [shouldViewPass, setShouldViewPass] = useState<boolean>(false);
	const [loading, setLoading] = useState(false);

	const togglePassView = () => {
		if (passwdRef.current) {
			passwdRef.current.type = shouldViewPass ? "text" : "password";
			!shouldViewPass ? setPasswdType("text") : setPasswdType("password");
		}
		setShouldViewPass((prev) => !prev);
	};

	const handleEmail = (e: ChangeEvent<HTMLInputElement>) =>
		setEmail(e.target.value);
	const handlePassword = (e: ChangeEvent<HTMLInputElement>) =>
		setPassword(e.target.value);

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		setLoading(true);

		if (validateForm()) {
			const userData = {
				email,
				password,
			};

			try {
				const userCredential = await signIn(
					userData.email,
					userData.password
				);
				console.log("Logged in user:", userCredential);
				dispatch(AUTH_USER(userCredential));
				navigation.push("/dashboard");
			} catch (error) {
				setError("Invalid login credentials");
				setLoading(false);
				console.error("Login error:", error);
			}
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
		} else if (password.length < 3) {
			setError("Password is required");
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

	if (userStore && userStore?.isLoggedIn) {
		navigation.push("/dashboard"); // Redirect to the dashboard if the user is logged in.
		// show a loading spinner suspense while checking session
		return <Preloader />;
	}

	return (
		<div className="bg-[#E85328]/10 h-auto md:h-screen w-full flex flex-col-reverse md:flex-row items-center justify-center">
			{/* left */}
			<div className="h-full w-full md:w-1/2 position relative flex flex-col items-start justify-center px-5 md:px-10 md:py-2 py-10 md:pt-0">
				<h1 className="text-3xl md:text-5xl font-medium w-full md:w-11/12 leading-none text-[#B04526] mb-7">
					Contracts Simplified, Projects Amplified.
				</h1>
				<p className="text-md leading-snug text-[#B04526] font-normal w-11/12 md:w-9/12">
					Create contracts, set milestones, utilize AI for content,
					and collaborate in real-time with project owners.
				</p>
				<div className="h-80 w-9/12 flex items-center justify-center position relative my-10">
					<Image
						src="/assets/images/auth/bg.png"
						alt=""
						fill
						className="h-full w-full object-contain"
					/>
				</div>
				<div className="h-auto w-9/12 md:w-full flex items-center justify-center mx-auto">
					<p className="text-sm leading-snug text-[#B04526] font-medium w-auto text-center">
						&quot;ContractNix - where contracts are a breeze, and
						projects thrive.&quot;
					</p>
				</div>
			</div>
			{/* right */}
			<div className="h-full w-full md:w-1/2 p-5 flex items-center justify-center">
				<div className="h-[38rem] w-full md:w-9/12 bg-white rounded-lg flex flex-col items-center justify-center position relative">
					{/* logo */}
					<div className="h-auto w-auto flex items-center justify-center space-x-3 position absolute top-5">
						<div className="h-8 w-8 rounded-full bg-[#E85328]/10 flex items-center justify-center">
							<FiZap className="text-md text-[#E85328]" />
						</div>
						<p className="font-medium text-md">ContractNix</p>
					</div>

					{/* caption */}
					<h2 className="font-bold text-2xl">Welcome Back!</h2>
					<p className="text-sm text-center text-gray-500">
						Please enter your details
					</p>

					{/* error */}
					<p className="text-xs text-center text-red-500 my-2 font-medium">
						{error}
					</p>

					<form
						onSubmit={handleSubmit}
						className="h-auto w-9/12 my-3 flex flex-col items-center justify-center space-y-10"
					>
						{/* email */}
						<div className="h-auto w-full flex flex-col items-start justify-center space-y-2 position relative">
							<label className="text-sm text-gray-800 font-normal">
								Email
							</label>
							<input
								value={email}
								onChange={handleEmail}
								type="text"
								placeholder=""
								className="h-7 w-full border-b border-gray-400 focus:outline-none text-sm text-gray-500 py-2 flex items-center justify-start"
							/>
						</div>
						{/* password */}
						<div className="h-auto w-full flex flex-col items-start justify-center space-y-2 position relative">
							<label className="text-sm text-gray-800 font-normal">
								Password
							</label>
							<input
								ref={passwdRef}
								value={password}
								onChange={handlePassword}
								type={passwdType}
								placeholder=""
								className="h-7 w-full border-b border-gray-400 focus:outline-none text-sm text-gray-500 py-2 flex items-center justify-start"
							/>
							<div
								className="position absolute right-0 top-5 cursor-pointer"
								onClick={togglePassView}
							>
								{shouldViewPass ? (
									<FiEyeOff className="text-md text-gray-700" />
								) : (
									<FiEye className="text-md text-gray-700" />
								)}
							</div>
							{/* forgot password */}
							<div className="h-auto w-full flex items-start justify-end position relative">
								<Link
									href="/auth/resetpassword"
									className="text-xs text-[#867F7F] font-medium cursor-pointer"
								>
									Forgot password?
								</Link>
							</div>
						</div>
						<button className="h-10 w-full rounded-full flex items-center justify-center font-medium text-sm bg-[#E85328] text-white select-none">
							{loading ? "Loading..." : "Log In"}
						</button>
					</form>

					{/* footer */}
					<div className="h-auto w-auto flex items-center justify-center space-x-1 position absolute bottom-10">
						<p className="font-normal text-sm text-gray-700">
							Don&lsquo;t have an account?
						</p>
						<Link
							href="/auth/register"
							className="font-medium text-sm text-[#E85328]"
						>
							Sign Up
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
