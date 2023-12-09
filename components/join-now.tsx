'use client'

import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { useTheme } from 'next-themes'

const JoinNow = () => {
  const { theme, resolvedTheme } = useTheme()
  const [chatTheme, setChatTheme] = useState(theme === 'dark' ? 'dark' : 'light')

  useEffect(() => {
    setChatTheme(theme === 'dark' ? 'dark' : 'light')
  }, [theme, resolvedTheme])
  return (
    <div className="flex items-center justify-center">
      <div className="items-start space-y-2 py-8 xl:grid xl:grid-cols-2 xl:gap-x-8 xl:space-y-0">
        <div className="flex max-w-[550px] flex-col items-center space-x-2">
          <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">
            Not sure where to start?
          </h3>
          <div className="flex flex-col gap-2 text-center text-gray-500 dark:text-gray-400">
            <p>
              We are dedicated to helping local businesses. Book a free 15 min consultation now and
              receive a complimentary AI agent demo trained on your website's public data.
            </p>
            <p>
              During the call, we will identify pain points and quick-win opportunities for your
              business, helping you determine the optimal degree of AI implementation.
            </p>
            <p>Don't miss the AI Revolution.</p>
          </div>
        </div>
        <div className="flex h-full max-w-[550px] items-center justify-center gap-4 xl:flex-col">
          <Button
            type="submit"
            className={`flex w-full items-center justify-center ${
              chatTheme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'
            }`}
          >
            Book Now
          </Button>
          <Button
            type="submit"
            className={`flex w-full items-center justify-center ${
              chatTheme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'
            }`}
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  )
}

export default JoinNow
