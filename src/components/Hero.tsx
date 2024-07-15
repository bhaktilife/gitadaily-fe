const Hero = () => {
	return (
		<div>
			<div className="text-center my-4 p-2">
				<h1 className="font-bold text-xl text-orange-950">
					Start your day with wisdom 🌠
				</h1>
				<h3 className="text-sm text-zinc-800">
					Sign up for daily Bhagavad Gita Verses
				</h3>
			</div>
			<div className="px-6">
				<img
					src="/assets/krishna-arjuna.gif"
					alt="krishna and arjuna"
					className="rounded-full p-2 border-2 border-x-yellow-950"
				/>
			</div>
		</div>
	);
};

export default Hero;
