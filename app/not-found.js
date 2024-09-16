// PAGE NOT FOUND START
"use client"
import Image from 'next/image';
import img1 from '../assets/page_not_found.jpeg';

const notFound = () =>{
    return(
        <div>
            <h1>404 : Page Not Found</h1>
            <Image src={img1} alt="Computer Image" /><br></br>
        </div>
    )
}

export default notFound;

// PAGE NOT FOUND END