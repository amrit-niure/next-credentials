'use client'
import { signIn } from 'next-auth/react'
import { useSession } from 'next-auth/react'

export default function Home() {
  const session = useSession()
  console.log(session)
  return (
    <main className="flex h-screen flex-col items-center justify-center p-24 gap-2">
      <span className='font-semibold text-lg text-purple-800'>NextAuth</span>
    <button onClick={() => signIn()} className='border-2 px-2 py-1 border-purple-800 rounded-md hover:bg-purple-800 hover:text-white'>Login 🔥 </button>
    </main>
  )
}
