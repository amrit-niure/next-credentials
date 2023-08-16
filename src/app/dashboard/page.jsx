'use client'
// import { getServerSession } from 'next-auth'
import { useSession } from 'next-auth/react'
import React from 'react'

import { signOut } from 'next-auth/react'
const page =  () => {
    // const session = await getServerSession(authOptions)
    const session = useSession()
    console.log("Client Session : ",session)
  return (
    <div className='h-screen flex flex-col items-center justify-center gap-4'>
      <div><b>Admin Access Only </b> <i>(Authenticated)</i> Route : /dashboard<u></u></div>
<button onClick={() => signOut()} className='border-2 px-2 py-1 border-purple-800 rounded-md hover:bg-purple-800 hover:text-white'> Sign Out 🔥</button>
    </div>
  )
}

export default page