import Form from "./components/Form";
import Hero from "./components/Hero";
import Nav from "./components/Nav";

const App = () => {
	return (
		<div className="min-h-screen w-screen bg-taupe">
			<Nav />
			<div className="flex min-h-[70vh] items-center justify-center">
				<div className="w-[400px] p-4 flex flex-col items-center gap-8">
					<Hero />
					<Form />
				</div>
			</div>
		</div>
	);
};

export default App;
