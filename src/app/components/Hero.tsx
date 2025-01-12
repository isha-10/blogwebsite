import Link from "next/link"
import React from 'react'
import Image from "next/image"

const Hero = () => {
  return(
    <section
     className="container px-5 py-24 mx-auto bg-gray-500">
    <div className="flex flex-wrap w-full mb-20 flex-col bg- items-center text-center">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 bg-blue-950 text-white">
      You Have a Story Share It with the World
      </h1>
      <p className="lg:w-1/2 w-full leading-relaxed bg-blue-950 text-white">
      Everything you need to publish print promote and sell your book to millions of readers
      </p>
      
<div
 className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-black border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="/img.png"
            alt="blog"
            width={200}
            height={200}
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xl title-font font-bold text-black mb-1">
            How to Use Your Website as a Book Marketing Tool
            </h2>
            
            <p className="leading-relaxed mb-3 text-black">
            Self-publishing your book is quite an accomplishment but unless you printed something deeply personal thats just for you or a gift for someone close you want everyone to buy and read your book
            </p>
            
            <div className="flex items-center flex-wrap ">
              <Link href={"/blog"} className="text-blue-900 font-bold inline-flex items-center md:mb-2 lg:mb-0">
                Read More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </Link>
              <span className="text-black mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                1.2K
              </span>
              <span className="text-black inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-black border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="/img2.webp"
            alt="blog"
            width={200}
            height={200}
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xl title-font font-bold  text-black mb-1">
            How to Use Your Website as a Book Marketing Tool
            </h2>
            
            <p className="leading-relaxed mb-3 text-black">
            This is where people will come to find out more about you and your books which gives you an excellent opportunity to present yourself and your books in the best way and to brand yourself
            
            </p>
            <div className="flex items-center flex-wrap">
              <Link href={"/blog"} className="text-blue-900 font-bold inline-flex items-center md:mb-2 lg:mb-0">
                Read More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </Link>
              <span className="text-lack mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                1.2K
              </span>
              <span className="text-black inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-black border-opacity-60 rounded-lg overflow-hidden">
          <Image
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="ff.webp"
            alt="blog"
            width={200}
            height={200}
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xl title-font  text-black font-bold mb-1">
            Promoting Your Book in Global Markets
            </h2>
            
            <p className="leading-relaxed mb-3 text-black">
            In a previous post we discussed the many reasons why you should sell your book globally and how Global Connect makes it easy to get into international markets
            
            </p>
            <div className="flex items-center flex-wrap ">
              <Link href={"/blog"} className="text-blue-900 font-bold inline-flex items-center md:mb-2 lg:mb-0">
                Read More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </Link>
              <span className="text-black mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                1.2K
              </span>
              <span className="text-black inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                6
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
</section>
)
}
export default Hero