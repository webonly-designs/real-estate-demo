import About from '@/components/Home/About'
import FeaturedListing from '@/components/Home/FeaturedListing'
import Hero from '@/components/Home/Hero'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dhalem</title>
        <meta name="description" content="Find Your Family Dream House In Dubai" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='max-w-7xl mx-auto px-5'>
        <Hero />
        <FeaturedListing />
      </main>
      <About />
    </>
  )
}

