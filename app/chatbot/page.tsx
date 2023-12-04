'use client'

import { nanoid } from '@/lib/utils'
import { Chat } from '@/components/chat'
import { useState } from 'react'
// import { ChatPanel } from '@/components/chat-panel'  // Import your existing ChatPanel component
import { Button } from '@/components/ui/button'
// import { IconLock } from '@/components/ui/icons'

export const runtime = 'edge'

export default function ChatbotPage() {
  const [password, setPassword] = useState('')
  const [authenticated, setAuthenticated] = useState(false)
  const id = nanoid()

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
    <div className=" bg-gradient-to-b from-10% to-50%">
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
                className="w-full rounded-md border px-4 py-2 focus:border-blue-400 focus:outline-none"
              />
            </div>
            <Button
              type="submit"
              // variant="primary"
              className="flex w-full items-center justify-center"
            >
              {/* <IconLock className="mr-2" /> */}
              Unlock Chat
            </Button>
          </form>
        )}
      </div>
    </div>
  )
}
