import Head from "next/head"
import Image from "next/image"
export default function Home() {
  return (
    <>
      <Head>
        <title>Charcentric </title>
        <meta name="description" content="A simple charcentric Cube.js application" />
      </Head>

    <nav class="p-5 bg-white shadow md:flex md:items-center md:justify-between">
<div>
  <span class="text-2xl font-sans">
  <Image src={'/logo.png'} width="50px" height="50px"></Image>
</span> 
</div>
<ul class="md:flex md:items-center">
  <li class="mx-4">
    <a href="#" class="text-xl hover:text-cyan-500 duration-500">HOME</a>
  </li>
  <li class="mx-4">
    <a href="#" class="text-xl hover:text-cyan-500 duration-500">ABOUT</a>
  </li>
  <li class="mx-4">
    <a href="#" class="text-xl hover:text-cyan-500 duration-500">EXIT</a>
  </li>
</ul>

    </nav>
      <main class="bg-cyan-400">
    
      </main>

      <footer >
       
      </footer>
      </>
  )
}
