import Headers from './components/Headers'

const Home = () => {
	return (
		<>
			<div className="bg-accent">
				<Headers />
			</div>
			<div className="h-screen">
				<div className="flex justify-between h-full">
					<div className="bg-red-300 flex justify-center items-center w-[50%]">
						<div className="bg-green-100 text-bold text-[40px] pl-8">
							<div>Hello</div>
							<div>I am Hendri</div>
						</div>
					</div>
					<div className="bg-red-100 flex-1">1</div>
				</div>
			</div>
		</>
	)
}
export default Home
