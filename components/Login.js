import { signIn } from "next-auth/client"
import Image from "next/image"
import { useEffect, useState } from "react";

function Login() {
    const [windowWidth , setWindowWidth] = useState('')

    useEffect(()=>{
        window.addEventListener('resize',()=> setWindowWidth(window.innerWidth))
    })
    return (
        <div className="grid place-items-center container mt-4">
          
         { windowWidth > "600" ?
           <Image
             src="/fb-logo.svg"
             width={450}
             height={400}
             objectFit="contain"
            />

            :

            <Image
            src="/fb-logo.svg"
            width={300}
            height={400}
            objectFit="contain"
           />

    }            
            <button onClick={signIn} className="border-none mt-8 pl-10 pr-10 pt-4 pb-4 text-lg rounded-full text-white text-center cursor-pointer bg-blue-500 outline-none">SignIn</button>
        
        </div>
    )
}

export default Login
