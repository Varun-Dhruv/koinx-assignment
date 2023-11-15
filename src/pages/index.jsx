import Head from 'next/head'
import Navbar from '@/components/navbar'
import Calculator from '@/containers/calculator'
import MarketContainer from '@/components/market'
export default function Home() {
  return (
    <>
      <Head>
        <title>KoinX</title>
        <meta name="description" content="KoinX Calculator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="" />
      </Head>
      <main className="h-full bg-gray-100 font-sans">
        <Navbar />
        <div className='flex flex-row px-3.5 lg:px-14'>
          <Calculator />
          <MarketContainer />
        </div>
      </main>
    </>
  )
}
