
import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <div className="absolute top-4 left-4 flex items-center space-x-3">
    {/* Logo */}
    <Image
      src="/images/logo.png" // Replace with your logo path
      alt="Web App Logo"
      width={50}
      height={50}
      className="rounded-md"
      priority
    />
    {/* App Name */}
    {/* <span className="text-2xl font-serif font-bold text-[#248a8a] tracking-wide">
      Confessly
    </span> */}
  </div>
  )
}

export default Logo