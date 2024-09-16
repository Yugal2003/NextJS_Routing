'use client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

const Student = ({ params }) => {
    const searchParams = useSearchParams()
    const title = searchParams.get('title')
    const name = searchParams.get('name')
    const address = searchParams.get('address')
    const gender = searchParams.get('gender')
    
    return (
        <div>
            <h1>Welcome To Student Page</h1>
            <h2>ID: {params.student}</h2>
            <h2>Name: {name}</h2>
            <h2>Title: {title}</h2>
            <h2>Address: {address}</h2>
            <h2>Gender: {gender}</h2>
            <Link href='/DynamicRouting'><button>Back To Dynamic Routing Page</button></Link>
            <Link href='/'><button>Back To Home Page</button></Link>
        </div>
    )
}

export default Student;

// DYNAMIC ROUTING END