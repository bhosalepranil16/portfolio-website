import { useEffect } from 'react'
import Head from 'next/head'

import { renderCanvas } from '../components/renderCanvas'

export default function Home() {

  useEffect(() => {
    renderCanvas()
  }, [])

  return (
    <div>
      <Head>
        <title>Pranil's Portfolio</title>
        <meta name="description" content="Pranil's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <canvas className="bg-skin-base pointer-events-none absolute inset-0" id="canvas"></canvas>
      </main>
    </div>
  )
}
