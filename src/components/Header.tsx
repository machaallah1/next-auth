import Link from 'next/link'
import React from 'react'
import { SignInButton, SignedIn, SignedOut,UserButton } from '@clerk/nextjs'

export default function Header() {
  return (
    <header className=' px-12 py-4 bg-gradient-to-r from-purple-400 to-pink-500 flex justify-between items-center text-2xl font-bold text-white '>
      <div className="mb-2">
        <Link href='/' className=''>NACM</Link>
      </div>

      <div>
        <Link href='/' className='mr-2'>Home</Link>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </div>
    </header>
  )
}
