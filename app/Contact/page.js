import Link from 'next/link';
import img2 from '../../assets/contact.jpeg'
import Image from "next/image";

const contact = () =>{
    return(
        <div>
            <h1>Welcome To Contact Page</h1>
            <Image style={{marginBottom:"1rem"}} src={img2} alt=""/><br/>
            <Link href='/'><button>Back To Home Page</button></Link>
            <Link href='/about'><button>Go To About Page</button></Link>
        </div>
    )
}

export default contact;