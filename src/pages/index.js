import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

const meta = {}

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="robots" content="follow, index" />
        <link href="/favicon.ico" rel="shortcut icon" />
        <meta content={meta.description} name="description" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.cardImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vercel" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.cardImage} />
      </Head>
      <nav>
        <div className="flex justify-between items-center p-8 mx-2">
          <Link href="/" className="no-underline font-semibold invisible sm:visible">
              <h1>{meta.title}</h1>
          </Link>
        </div>
      </nav>
      <div>
      <div className='prose lg:prose-xl px-8 m-auto my-4 sm:my-16'>
        <h1 className='text-center'>Welcome!</h1>
      </div>
      </div>
    </>
  )
}
