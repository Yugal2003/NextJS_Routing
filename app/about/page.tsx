import Link from 'next/link';

const About = () => {
  return (
    <div>
      <h1>Welcome To About Page!</h1>
      <Link href="/"><button>Back to Home Page</button></Link>
    </div>
  );
};

export default About;
