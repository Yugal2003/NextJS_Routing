//CatchAllSegmentsOfRouteNextJS End

'use client'

import Link from "next/link";

const segments = () =>{
    return(
        <div>
            <h1>Welcome To Segments Page</h1>
            <Link href='/'>Back To Home Page</Link><br></br><br></br>
            <Link href='/CatchAllSegmentsOfRouteNextJS'>Goc Catch All Segments Of Route Page</Link>
        </div>
    )
}

export default segments;

//CatchAllSegmentsOfRouteNextJS End
