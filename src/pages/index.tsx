import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from 'next/image'

import pfp2 from '../assets/pfp2.jpg'
const Home: NextPage = () => {
  return (
    <>
      <main className="p-4 flex items-center flex-col flex-1">
        <div className="flex flex-col justify-center flex-1">

          <div className="text-4xl mb-2 flex justify-between items-baseline">
            <h1>JoÃ£o Pedro <strong>Arouca</strong></h1>
            <Link href="/blog" passHref>
              <p className="mx-2 px-1 pt-1 border-b-2 border-purple-800 font-bold font-mono focus:outline-none focus:ring-4 focus:ring-purple-800 focus:ring-opacity-50 focus:border-transparent hover:bg-purple-800 text-sm">Repo</p>
            </Link>
            <Link href="/blog" passHref>
              <p className="mx-2 px-1 pt-1 border-b-2 border-purple-800 font-bold font-mono focus:outline-none focus:ring-4 focus:ring-purple-800 focus:ring-opacity-50 focus:border-transparent hover:bg-purple-800 text-sm">Blog</p>
            </Link>
          </div>

          <p className="opacity-90 sm:max-w-md">
            <a href="https://www.linkedin.com/in/jparouca/" className="font-bold font-mono focus:outline-none focus:ring-4 focus:ring-opacity-50 focus:border-transparent hover:bg-purple-800 ">
              ð Fullstack developer at {" "}
              <span className="font-mono">Accenture ð.</span>
            </a>
            <span> ð¨âð» Web Developer with past Data Engineer experience ð¨âð» </span>
            <span>ð Weekly writing articles to stick what learned. Writing to learn and learning to write ð. </span>
            <span>ð® Game development enthusiast and League of Legends player ð®. </span>

          </p>
          <Me />
        </div>

        <footer className="flex items-center flex-wrap space-x-4 justify-center sm:mx-auto mb-8">
          <Link target="_blank" rel="noopener noreferrer" href="https://twitter.com/kaxo_ta" className="mx-2 px-1 pt-1 border-b-2 border-purple-800 font-bold font-mono focus:outline-none focus:ring-4 focus:ring-purple-800 focus:ring-opacity-50 focus:border-transparent hover:ring-purple-800 ">
            Twitter ð¦
          </Link>
          <Divider />
          <Link
            target="_blank" rel="noopener noreferrer" href="https://github.com/jparouca" className="mx-2 px-1 pt-1 border-b-2 border-purple-800 font-bold font-mono focus:outline-none focus:ring-4 focus:ring-purple-800 focus:ring-opacity-50 focus:border-transparent hover:ring-purple-800 ">
            GitHub âð»
          </Link>
          <Divider />
          <Link target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jparouca" className="mx-2 px-1 pt-1 border-b-2 border-purple-800 font-bold font-mono focus:outline-none focus:ring-4 focus:ring-purple-800 focus:ring-opacity-50 focus:border-transparent hover:accent-purple-800 ">
           Linkedin ð«
          </Link>
        </footer>

      </main>
    </>
  );
};

export default Home;
function Me() {
  return (
    <div className="relative transform scale-75 sm:m-16 sm:transform-none">
      <div
        className="opacity-50 transition-opacity duration-200 hover:opacity-95"
        style={{
          borderColor:
            "transparent transparent transparent #61049d",
          borderWidth: "120px 0 120px 207.8px",
        }}
      />
      <span
        className="absolute group focus:outline-none"
        style={{ top: 0, left: 60 }}
      >
        <Image
          className="
          rounded-full
          transition duration-200
          transform hover:scale-95 hover:opacity-100
          filter grayscale contrast-150 brightness-75 hover:grayscale-0 hover:contrast-100 hover:brightness-100

          "
          src={pfp2}
          width="240"
          height="240"
          alt="A selfie"
        />
      </span>
    </div>
  )
}

export function Divider() {
  return <span className="mx-2 text-gray-400  hidden sm:block">{" â¢ "}</span>
}