import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { BE_URL } from "../utils/constant";
import "./Form.css";

interface IFormInput {
	email: string;
}

const schema = yup.object().shape({
	email: yup
		.string()
		.email("Invalid email address")
		.required("Email is required"),
});

const Form = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<IFormInput>({
		resolver: yupResolver(schema),
	});

	const onSubmit: SubmitHandler<IFormInput> = async (data: IFormInput) => {
		setIsLoading(true);
		try {
			await fetch(BE_URL, {
				redirect: "manual",
				method: "POST",
				body: JSON.stringify(data),
				headers: {
					"Content-Type": "text/plain;charset=utf-8",
				},
			});

			// Not working, getting cors error, as google appsscript redirecting to different url after post request
			//   axios.post(BE_URL, data, {
			// 	headers: {
			// 		"Content-Type": "text/plain;charset=utf-8",
			// 	},
			// 	maxRedirects: 0,
			// });
			toast.success("Subscribed successfully!");
		} catch (err) {
			toast.error("Something went wrong! Please try again after some time.");
		} finally {
			setIsLoading(false);
			reset();
		}
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col gap-4 items-center"
		>
			<input
				disabled={isLoading}
				autoComplete="off"
				autoFocus
				className="w-72 border-gray-200 rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none"
				type="email"
				placeholder="Email"
				{...register("email")}
			/>
			{errors.email && (
				<p className="text-xs text-red-900 w-full -mb-1 -mt-2">
					{errors.email.message}
				</p>
			)}
			<button
				type="submit"
				className="w-full text-white bg-yellow-950 hover:bg-yellow-900 focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center"
				disabled={isLoading}
			>
				{!isLoading ? (
					"SUBSCRIBE"
				) : (
					<div className="text-center">
						<div role="status">
							<svg
								aria-hidden="true"
								className="inline w-5 h-5 text-gray-200 animate-spin fill-white"
								viewBox="0 0 100 101"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
									fill="currentColor"
								/>
								<path
									d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
									fill="currentFill"
								/>
							</svg>
							<span className="sr-only">Loading...</span>
						</div>
					</div>
				)}
			</button>
		</form>
	);
};

export default Form;
