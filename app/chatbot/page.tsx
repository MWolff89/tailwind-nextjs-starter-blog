'use client'

import { nanoid } from '@/lib/utils'
import { Chat } from '@/components/chat'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'

export const runtime = 'edge'

export default function ChatbotPage() {
  const { resolvedTheme } = useTheme()
  const [password, setPassword] = useState('')
  const [authenticated, setAuthenticated] = useState(false)
  const id = nanoid()

  const [chatTheme, setChatTheme] = useState(resolvedTheme === 'dark' ? 'dark' : 'light')

  useEffect(() => {
    setChatTheme(resolvedTheme === 'dark' ? 'dark' : 'light')
  }, [resolvedTheme])

  const handlePasswordSubmit = (e) => {
    e.preventDefault()

    // Check the password (replace 'yourpassword' with your actual password)
    if (password === 'yourpassword') {
      setAuthenticated(true)
    } else {
      alert('Invalid password')
    }
  }

  return (
    <div className={`bg-${chatTheme === 'dark' ? 'black' : 'white'}`}>
      <div className="flex items-center justify-center">
        {authenticated ? (
          <Chat id={id} />
        ) : (
          <form onSubmit={handlePasswordSubmit} className="max-w-md rounded-lg p-8 shadow-md">
            <div className="mb-6">
              <label htmlFor="password" className="block text-lg font-semibold">
                Enter Password
              </label>
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
        )}
      </div>
    </div>
  )
}
