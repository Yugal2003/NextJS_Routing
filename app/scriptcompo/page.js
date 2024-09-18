// nextjs script tag start

"use client"
import Script from "next/script";

const scriptDemo = () =>{
    return(
        <div>
            <h1>Welcome To Script Demo Page !</h1>
            <Script
            src="/location.js"
            onLoad={()=>{
                console.log("file upload !");
                
            }}
            />
        </div>
    )
}

export default scriptDemo;


// nextjs script tag end