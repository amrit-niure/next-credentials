import React from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
const Data = async() => {
        const session = await getServerSession(authOptions)
        console.log("Server Session : ",session)
  return (
    <div className='h-screen flex items-center justify-center text-purple-800'><u> Server Components👾</u></div>
  )
}

export default Data 