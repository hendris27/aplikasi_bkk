import Headers from './components/Headers'
import icon_hello from './assets/img/icon_hello.png'

const Home = () => {
	return (
		<>
			<div className="bg-accent">
				<Headers />
			</div>
			<div className="h-screen">
				<div className="flex justify-between h-full">
					<div className="bg-red-300 flex justify-center items-center w-[50%]">
						<div className="bg-green-100 pl-8 flex flex-col gap-[-80px] ">
							<div className="flex gap-4 items-center">
								<div className="text-blue-600 font-bold text-[50px]">Hello</div>
								<div className="h-full">
									<img className="h-12 " src={icon_hello} />
								</div>
								<div className="text-blue-600 text-[50px] text-bold">,</div>
								<div className="text-[60px] ">I&#39;m Hendri</div>
							</div>
							<div className="text-[60px] flex gap-4">
								<div className="text-[] ">I&#39;m an</div>
								<div className="text-bold text-blue-600 font-semibold ">Web Developer</div>
							</div>
						</div>
					</div>
					<div className="bg-red-100 flex-1">1</div>
				</div>
			</div>
		</>
	)
}
export default Home
