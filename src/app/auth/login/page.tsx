// components
import Login from "@/components/views/auth/login/Login";
import Head from "./head";

export default function LoginPage() {
	return (
		<>
			<Head />
			<main className="h-auto w-full">
				<Login />
			</main>
		</>
	);
}
