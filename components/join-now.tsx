'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react'
import { Button } from './ui/button'

const JoinNow = () => {
  const handleBookNowClick = () => {
    // Execute the desired action when "Book Now" is clicked
    if (
      typeof (window as any).voiceflow !== 'undefined' &&
      typeof (window as any).voiceflow.chat !== 'undefined' &&
      typeof (window as any).voiceflow.chat.open === 'function'
    ) {
      ;(window as any).voiceflow.chat.open()
      setTimeout(function () {
        // ;(window as any).voiceflow.chat.clear()
        ;(window as any).voiceflow.chat.interact({
          type: 'intent',
          payload: {
            intent: {
              name: 'New Consultation Booking',
            },
            entities: [],
          },
        })
      }, 1000)
    }
  }

  return (
    <div className="flex items-center justify-center">
      <div className="items-start space-y-6 pb-16 pt-8 xl:grid xl:grid-cols-2 xl:gap-x-8 xl:space-y-0">
        <div className="flex max-w-[550px] flex-col items-center space-x-2">
          <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">
            Not sure where to start?
          </h3>
          <div className="flex flex-col gap-2 text-center text-gray-500 dark:text-gray-400">
            <p className="text-gray-300">
              <span>We support local businesses. </span>Book a free 15-min consultation for a
              personalized AI agent demo using your website's data.
            </p>
            <p>
              Identify pain points and quick-win opportunities during the call to guide your optimal
              AI implementation.
            </p>
            <p className="font-semibold text-gray-300">Don't miss the AI Revolution.</p>
          </div>
        </div>
        <div className="flex h-full max-w-[550px] items-center justify-center gap-4 xl:flex-col">
          {' '}
          <Button
            type="submit"
            className={`flex w-full items-center justify-center  bg-gray-800 uppercase
            text-white dark:bg-gray-200 dark:text-black`}
            onClick={handleBookNowClick} // Attach the click event handler
          >
            Book Now
          </Button>
          <Button
            type="submit"
            className={`} flex w-full items-center justify-center rounded-none bg-transparent uppercase
            dark:text-white dark:underline`}
          >
            Learn More
          </Button>
        </div>
      </div>
      {/* dummy line to start git build */}
    </div>
  )
}

export default JoinNow
