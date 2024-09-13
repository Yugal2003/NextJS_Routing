import Image from 'next/image';
import img1 from '../assets/pc.jpeg';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1 style={{ display: 'flex', textDecoration: 'underline' }}>Hello Welcome Home Page</h1>
      <Image src={img1} alt="Computer Image" /><br></br>
      <Link href="/about"><button>About Page</button></Link>
      <Link href='/Contact'><button>Contact Page</button></Link>
    </div>
  );
};

export default Home;
