'use client'

import { usePathname } from 'next/navigation'
// components/BotpressWebChat.js
import React, { useEffect } from 'react'

const BotpressWebChat = () => {
   const path = usePathname()

  const isChatbotPage = path === '/chatbot'

  useEffect(() => {
    const script = document.createElement('script')
    script.id = 'botpress-webchat-script'
    script.type = 'text/javascript'
    script.onload = () => {
      window.voiceflow.chat.load({
        verify: { projectID: '657f04ca0aaf8485c3064a04' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production',
      })
    }
    script.src = 'https://cdn.voiceflow.com/widget/bundle.mjs'
    script.type = 'text/javascript'
    document.head.appendChild(script)
    const timeoutId = setTimeout(() => {
      // console.log('Script loaded')
      window.voiceflow.chat.proactive.push(
        { type: 'text', payload: { message: 'Witness the difference 🔥' } },
        { type: 'text', payload: { message: 'Come say hi.' } }
      )
    }, 5000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  useEffect(() => {
    if (!window.voiceflow) {
      return
    }
    if (isChatbotPage) {
      window.voiceflow.chat.hide()
    } else {
      window.voiceflow.chat.show()
    }
  }, [isChatbotPage])


  return (
    <div id="botpress-webchat-container">
      {/* Optionally, you can add a container for the web chat */}
    </div>
  )
}

export default BotpressWebChat
