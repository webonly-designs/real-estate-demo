import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Nav from '@/components/Nav'
import Link from 'next/link'
import TimeAgo from 'timeago-react'
import {FaClock, FaArrowRight} from 'react-icons/fa'

function blog() {

   const [blogs, setBlogs] = useState([]) 

   useEffect(() => {
    async function fetchData() {
        try {
            const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@serenaholmes_14768');
            const data = await res.json();
            const items = data.items;
            setBlogs(items);
        } catch(err) {
            console.log(err)
        }
    }
    fetchData()
   },[])
   console.log(blogs)
  return (
    <div>
        <Head>
          <title>Dhalem | Read Our Latest Blogs</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Nav />
        <main className='max-w-7xl mx-auto py-16 px-5'>
            <div className='space-y-5 mb-12 md:mb-16'>
                <h2 className='text-4xl font-semibold text-[#333333] tracking-wide capitalize text-center'>
                    Our Blogs
                </h2>
                <p className='text-center text-[#666666] tracking-wide leading-7'>
                    Find Your Dream House And <Link href="/contact" className='underline'>Contact Us</Link> Today!!, Or <Link href="/" className='underline'>Search Again</Link>
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-x-7 gap-y-10'>
                {blogs.map((blog, index) =>(
                    <div key={index}>
                        <Link href={blog.link} className='space-y-3'>
                            <img loading='lazy' src={blog?.thumbnail || 'dhalem-hero.jpg'} className='w-full h-64 aspect-square object-cover rounded-2xl'/>
                            <div className='flex items-center'>
                                <FaClock className='w-5 h-5 mr-2'/>
                                <TimeAgo datetime={blog.pubDate} className='font-medium text-[#666666] tracking-wide leading-7'/>
                            </div>
                            <h3 className='text-2xl font-semibold tracking-wide leading-[2.3rem] line-clamp-2 text-[#333333]'>{blog.title}</h3>
                            <div className='flex items-center cursor-pointer'>
                                <p className='font-semibold text-[#333333] tracking-wide leading-7 mr-2'>Read More</p>
                                <FaArrowRight className='w-4 h-4'/>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </main>
    </div>
  )
}

export default blog