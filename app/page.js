// import Image from 'next/image';
// import img1 from '../assets/pc.jpeg';
// import Link from 'next/link';

import Link from "next/link";

// const Home = () => {
//   return (
//     <div>
//       <h1 style={{ display: 'flex', textDecoration: 'underline' }}>Hello Welcome Home Page</h1>
//       <Image src={img1} alt="Computer Image" /><br></br>
//       <Link href="/about"><button>About Page</button></Link>
//       <Link href='/Contact'><button>Contact Page</button></Link>
//     </div>
//   );
// };

// export default Home;





// DYNAMIC ROUTING START

// 'use client'
// import Link from "next/link";

// const Home = () => {
//   return (
//     <div>
//         <h1>Welcome Home Page.</h1>
//         <Link href='/DynamicRouting'>Go Dynamic Routing Page</Link>
//     </div>
//   );
// }


// export default Home;

// DYNAMIC ROUTING END









//CatchAllSegmentsOfRouteNextJS start

// 'use client'
// import Link from "next/link";

// const Home = () => {
//   return (
//     <div>
//         <h1>Welcome Home Page.</h1>
//         <Link href='/CatchAllSegmentsOfRouteNextJS'>Goc Catch All Segments Of Route Page</Link>
//     </div>
//   );
// }


// export default Home;


//CatchAllSegmentsOfRouteNextJS End



// not-found start

// import Link from 'next/link';

// const Home = () => {
//   return (
//     <div>
//       <h1 style={{ display: 'flex', textDecoration: 'underline' }}>Welcome Home Page</h1>
//       <Link href="/about"><button>About Page</button></Link>
//       <Link href='/Contact'><button>Contact Page</button></Link>
//     </div>
//   );
// };

// export default Home;

// not-found end



// fetch api for server side start

const Home = () => {
  return (
    <div>
      <h1>Welcome Home Page</h1>
      <Link href='/ApiCall'><button>Go To API Call Page</button></Link>
    </div>
  );
};

export default Home;

// fetch api for server side start
