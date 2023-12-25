'use client'

/* eslint-disable @typescript-eslint/no-explicit-any */

import { nanoid } from '@/lib/utils'
import { Chat } from '@/components/chat'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
// import {} from '@voiceflow/react-chat'
export const runtime = 'edge'

export default function ChatbotPage() {
  const passwordToIndex = (password) => {
    switch (password) {
      case 'nkp':
        return 'namkeepau'
      case 'yoml':
        return 'yoga-mala'
      case 'ymdl':
        return 'yoga-mandala'
      case 'lvyg':
        return 'lava-yoga'
      case 'unyg':
        return 'union-yoga'
      case 'ygpls':
        return 'yoga-plus'
      case 'kldlw':
        return 'kalidass-law'
      case 'rxlgl':
        return 'rex-legal'
      case 'mnd':
        return 'minmed'
      case 'jcpl':
        return 'jcp-law'
      case 'irbl':
        return 'irb-law'
      case 'encl':
        return 'ensoul-clinic'
      case 'frll':
        return 'farallon-law'
      case 'rgll':
        return 'regal-law'
      case 'jtll':
        return 'joo-toon-llc'
      case 'yll':
        return 'yuen-law'
      default:
        return 'namkeepau'
    }
  }

  const [password, setPassword] = useState('')
  const [index, setIndex] = useState(passwordToIndex(password))
  const [authenticated, setAuthenticated] = useState(false)
  const id = nanoid()

  const { resolvedTheme } = useTheme()
  const [chatTheme, setChatTheme] = useState(resolvedTheme === 'dark' ? 'dark' : 'light')

  useEffect(() => {
    setChatTheme(resolvedTheme === 'dark' ? 'dark' : 'light')
  }, [resolvedTheme])

  useEffect(() => {
    setIndex(passwordToIndex(password))
    if (!(window as any).voiceflow) {
      return
    } else {
      ;(window as any).voiceflow.chat.hide()
    }
  }, [password])

  const handlePasswordSubmit = (e) => {
    // console.log(
    //   'ChatbotPage.tsx: handlePasswordSubmit: e: ',
    //   e,
    //   'password: ',
    //   password,
    //   'authenticated: ',
    //   authenticated
    // )
    e.preventDefault()

    // Check the password (replace 'yourpassword' with your actual password)
    if (
      [
        'yoml',
        'nkp',
        'ymdl',
        'lvyg',
        'unyg',
        'ygpls',
        'kldlw',
        'rxlgl',
        'mnd',
        'jcpl',
        'irbl',
        'encl',
        'frll',
        'rgll',
        'jtll',
        'yll',
      ].includes(password)
    ) {
      setAuthenticated(true)
    } else {
      alert('Invalid password')
    }
  }
  return (
    <div className={`bg-background`}>
      <div className="">
        {authenticated ? (
          <Chat id={id} index={index} />
        ) : (
          <div className="flex items-center justify-center">
            <form onSubmit={handlePasswordSubmit} className="max-w-md rounded-lg p-8 shadow-md">
              <div className="mb-6">
                <label htmlFor="password" className="block text-lg font-semibold">
                  Enter Password
                </label>
                <div className="mb-6 mt-2 text-sm">
                  <p className="text-gray-500">
                    This is a private chatbot. Please enter the password to continue.
                  </p>
                  <p className="text-gray-400">
                    Contact us if you would like to have a private chatbot for your business or
                    website.
                  </p>
                </div>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full rounded-md border px-4 py-2 focus:border-${
                    chatTheme === 'dark' ? 'blue' : 'blue-400'
                  } focus:outline-none ${
                    chatTheme === 'dark' ? 'text-black' : 'text-black' // Change text color accordingly
                  }`}
                />
              </div>
              <Button
                type="submit"
                className={`flex w-full items-center justify-center ${
                  chatTheme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'
                }`}
              >
                Unlock Chat
              </Button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
