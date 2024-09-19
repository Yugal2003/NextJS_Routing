// ApiCall for server side start


// const fetchApi = async() =>{
//     let data = await fetch('https://dummyjson.com/products');
//     let jsondata = await data.json();
//     console.log(jsondata);
//     return jsondata.products;
// }

// const ApiCall = async() =>{
//     const apidata = await fetchApi();
//     return(
//         <div>
//             <h1>Fetch Api Data</h1>
//             {
//                 apidata.map((ele,index) =>{
//                     return(
//                         <div key={index} style={{marginBlock:"5rem"}}>
//                             <h2>Product : {index + 1}</h2>
//                             <h2>Title : {ele.title}</h2>
//                             <h2>Category : {ele.category}</h2>
//                             <h2>Price : {ele.price}</h2>
//                             <h2>Rating : {ele.rating}</h2>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     )
// }

// export default ApiCall;


// ApiCall for server side end





// ApiCall for client side start


// "use client";

// import { useEffect, useState } from "react";

// const ApiCall = () => {
//   const [apiResult, setAPIResult] = useState([]);

//   const fetchApi = async () => {
//     try {
//       let data = await fetch("https://dummyjson.com/products");
//       let jsondata = await data.json();
//       console.log(jsondata);
//       setAPIResult(jsondata.products);
//     } catch (error) {
//       console.log("error");
//     }
//   };
//   useEffect(() => {
//     fetchApi();
//   }, []);

//   return (
//     <div>
//       <h1>Fetch Api Data</h1>
//       {
//       apiResult && 
//       apiResult.map((ele, index) => {
//         return (
//           <div key={index} style={{ marginBlock: "5rem" }}>
//             <h2>Product : {index + 1}</h2>
//             <h2>Title : {ele.title}</h2>
//             <h2>Category : {ele.category}</h2>
//             <h2>Price : {ele.price}</h2>
//             <h2>Rating : {ele.rating}</h2>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default ApiCall;


// ApiCall for client side end










// server side and client side comp join start


import CheckPriceUsingClientSide from './CheckPriceUsingClientSide'

const fetchApi = async() =>{
    let data = await fetch('https://dummyjson.com/products');
    let jsondata = await data.json();
    console.log(jsondata);
    return jsondata.products;
}

const ApiCall = async() =>{
    const apidata = await fetchApi();
    return(
        <div>
            <h1>Fetch Api Data</h1>
            {
                apidata.map((ele,index) =>{
                    return(
                        <div key={index} style={{marginBlock:"5rem"}}>
                            <h2>Product : {index + 1}</h2>
                            <h2>Title : {ele.title}</h2>
                            <h2>Category : {ele.category}</h2>
                            <h2>Rating : {ele.rating}</h2>
                            <CheckPriceUsingClientSide price={ele.price}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ApiCall;


// server side and client side comp join end