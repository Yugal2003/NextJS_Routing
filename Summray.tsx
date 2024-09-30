// NOTE => Always be create an .tsx in NEXTJS application bcz they supports the jsx code and inline css styles...

//NOTE => when you can use about page in project so you can first create it ok... so, in the process of creating an new about.tsx file so first create an about folder in app folder(main folder) after, you can create only page.tsx file in about folder. you can't name is about.tsx ok... && same process in contact also you can create an contact folder after inside you can create an page.tsx file for that contact folder ok...

// in this whole app we implement an routing using nextjs 

// All data && create an diff folder for routing write inside only in app folder
// like about,contact,main_page etc folders

// in this app folder we have an page.tsx and layout.tsx is already present 

// in the layout.tsx file we can join page.tsx file &
// in the page.tsx file we can join all the routing file(like an app.js in react)


//Pages and Routing: Next.js uses the pages directory to automatically handle routing. Each file in the pages directory corresponds to a route in your application.

//1.pages/index.tsx: This corresponds to the root route (/). This file is your Home page.
//2.pages/about/index.tsx: This corresponds to the /about route. This file is your About page.
//3.pages/contact/index.tsx: This corresponds to the /contact route. This file is your Contact page.

//Links: The <Link> component from Next.js is used for client-side navigation. It allows you to navigate between pages without a full page reload.


//1.<Link href="/about"><button>About Page</button></Link>: Navigates to the About page.
//2.<Link href="/contact"><button>Contact Page</button></Link>: Navigates to the Contact page.



// when you have use an react state management(useState,useEffect),events(onclick) inside an nextjs project so first write an 'use client' at the top of the screen for particular page.js file


// when you implement routing so first you should create an folder so that folder always write inside an app folder. Outside the app folder routing does not work