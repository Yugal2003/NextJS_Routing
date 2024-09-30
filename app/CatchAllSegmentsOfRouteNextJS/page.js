//CatchAllSegmentsOfRouteNextJS start

'use client'

import Link from "next/link";

const CatchAllSegmentsOfRouteNextJS = () =>{
    return(
        <div>
            <h1>Welcome To CatchAllSegments Page</h1>
            <Link href='/'><button>Back To Home Page</button></Link>
            <Link href='/CatchAllSegmentsOfRouteNextJS/segments'><button>Go Segments Route Page</button></Link>
        </div>
    )
}

export default CatchAllSegmentsOfRouteNextJS;



//CatchAllSegmentsOfRouteNextJS End