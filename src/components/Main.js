import Image from "next/image";
import { Inter } from "next/font/google";
import { Links } from "../components/Links"
import { Headline } from "../components/Headline"
import { Header } from "../components/Header"
import { useState } from "react";


const inter = Inter({ subsets: ["latin"] });

export function Main(props) {

    const [count, setCount] = useState(1);
    function handleClick(){
        setCount((count)=>count+1);
    };
    
    const [isShow, setIsShow] = useState(true)
    const handleDisplay = ()=>{
        setIsShow((isShow)=>!isShow);
    };


    return (
        <>
            <Header></Header>
            <main
                className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
            >
                {isShow ? <><h1>{count}</h1> <button onClick={handleClick}>ボタン</button></> : null}
                <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>

                <Headline file="index">
                    <code className="font-mono font-bold">pages/{props.page}.tsx</code>
                </Headline>

                <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
                    <Image
                        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                        src="/next.svg"
                        alt="Next.js Logo"
                        width={180}
                        height={37}
                        priority
                    />
                </div>
                <Links />
            </main>
        </>
    );
}