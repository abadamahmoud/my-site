import Arrow from "../components/Scroll";


const Hero = () => {
    return (
    <div className="flex flex-col h-screen items-center pb-24">
       
        <header className="text-center items-center h-screen justify-center flex flex-col gap-8">
            <h2 className="text-slate-200 text-2xl">MAHMOUD ABADA</h2>
            <h1 className="text-white text-7xl font-bold">Fullstack Developer <br></br><span className="text-emerald-400">&</span> Product Designer</h1>
            <p className="text-white text-2xl font-medium  max-w-[720px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam nam optio ratione repellat, minus nemo nihil recusandae debitis aliquid omnis voluptatem reiciendis est velit quidem laborum at totam cupiditate commodi.</p>
        </header>
            <Arrow/>
    </div>
    )
};

export default Hero;
