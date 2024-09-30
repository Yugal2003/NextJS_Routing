//CatchAllSegmentsOfRouteNextJS End

'use client'

import Link from "next/link";

const segments = ({params}) =>{
    console.log(params);
    
    return(
        <div>
            <h1>Welcome To Segments Page</h1>
            {
                params.segments.map((ele,index) =>{
                    return(
                        <div key={index}>
                            <h2>Data {index + 1} : {ele}</h2>
                        </div>
                    )
                })
            }
            <Link href='/'><button>Back To Home Page</button></Link><br></br><br></br>
            <Link href='/CatchAllSegmentsOfRouteNextJS'><button>Go Back To Catch All Segments Page</button></Link>
        </div>
    )
}

export default segments;

//CatchAllSegmentsOfRouteNextJS End
