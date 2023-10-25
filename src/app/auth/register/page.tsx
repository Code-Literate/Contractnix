// components
import Register from "@/components/views/auth/register/Register";
import Head from "./head";

export default function RegisterPage() {
	return (
		<>
			<Head />
			<main className="h-auto w-full">
				<Register />
			</main>
		</>
	);
}
