// DYNAMIC ROUTING START


"use client"
import Link from 'next/link';
import React from 'react'

const DynamicRouting = () => {

    const posts = [
            { id: '1', title: 'Exploring the Cosmos', name: 'Name for Post 1', address: 'Address for Post 1', gender: 'Male' },
            { id: '2', title: 'The Art of Cooking', name: 'Name for Post 2', address: 'Address for Post 2', gender: 'Female' },
            { id: '3', title: 'A Journey Through Time', name: 'Name for Post 3', address: 'Address for Post 3', gender: 'Male' },
            { id: '4', title: 'The Wonders of Nature', name: 'Name for Post 4', address: 'Address for Post 4', gender: 'Female' },
            { id: '5', title: 'Understanding Quantum Physics', name: 'Name for Post 5', address: 'Address for Post 5', gender: 'Male' },
            { id: '6', title: 'Traveling the World: Tips and Tricks', name: 'Name for Post 6', address: 'Address for Post 6', gender: 'Female' },
            { id: '7', title: 'The Future of Technology', name: 'Name for Post 7', address: 'Address for Post 7', gender: 'Male' },
            { id: '8', title: 'Mindfulness and Meditation', name: 'Name for Post 8', address: 'Address for Post 8', gender: 'Female' },
            { id: '9', title: 'The History of Art', name: 'Name for Post 9', address: 'Address for Post 9', gender: 'Male' },
            { id: '10', title: 'Fitness and Health: A Comprehensive Guide', name: 'Name for Post 10', address: 'Address for Post 10', gender: 'Female' }
    ]

    return (
        <div>
            <h1>Welcome To DynamicRouting Page</h1>
            {
                posts.map((ele) => {
                    return (
                        <div key={ele.id}>
                            <li>
                                <Link href={`/DynamicRouting/${ele.id}?title=${encodeURIComponent(ele.title)}&name=${encodeURIComponent(ele.name)}&address=${encodeURIComponent(ele.address)}&gender=${encodeURIComponent(ele.gender)}`}>
                                    Id {ele.id} Details
                                </Link>
                            </li>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DynamicRouting

// DYNAMIC ROUTING END