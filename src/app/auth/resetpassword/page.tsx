// components
import ResetPassword from "@/components/views/auth/resetpassword/ResetPassword";
import Head from "./head";

export default function ResetPasswordPage() {
	return (
		<>
			<Head />
			<main className="h-auto w-full">
				<ResetPassword />
			</main>
		</>
	);
}
