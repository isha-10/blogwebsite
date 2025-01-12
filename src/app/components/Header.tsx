import React from 'react'


const Header = () => {
  return (
    <div>
        <header className="text-white  body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-blue-950">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0  bg-blue-950">
    
      <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-white  dark:text-light">BOOKGRAM</h1>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a href="/" className="mr-5 hover:text-gray-900">Home</a>
      <a className="mr-5 hover:text-gray-900">About</a>
      <a className="mr-5 hover:text-gray-900">Blog</a>
    </nav>

  </div>
</header>

    </div>
  )
}

export default Header