import { useForm } from "react-hook-form";
import "./Form.css";

const Form = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data: string) => console.log(data);

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col gap-4 items-center"
		>
			<input
				className="w-72 border-gray-200 rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none"
				type="email"
				placeholder="you@example.com"
				{...(register("email"), { required: true })}
			/>
			{errors.exampleRequired && <span>This field is required</span>}

			<button
				type="submit"
				className="w-full text-white bg-gray-800 hover:bg-gray-700 focus:outline-none font-medium rounded-lg text-sm px-6 py-2 text-center"
			>
				SUBSCRIBE
			</button>
		</form>
	);
};

export default Form;
