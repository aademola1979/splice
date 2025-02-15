'use client'

import Link from "next/link"

const Error = () => {
  return (
    <div className="text-dark flex flex-col justify-center items-center gap-0 w-full">
      <h3 className="">Hoops! Something went wrong! Kindly check your internet connection.</h3>
      <div className="">
        <Link href='/login' className="text-blue-400 hover:underline">Try again. </Link> or return to <Link href='/' className="text-blue-400 hover:underline underline-offset-2">Homepage</Link>
      </div>
    </div>
  )
}

export default Error