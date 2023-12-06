'use client'

// components/BotpressWebChat.js
import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const BotpressWebChat = () => {
  const currentPath = usePathname()

  console.log(`The current path is ${currentPath}`)

  useEffect(() => {
    // const script = document.createElement('script');
    // script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    // script.async = true;
    // document.head.appendChild(script);

    // script.onload = () => {
    //   window.botpressWebChat.init({
    //     "composerPlaceholder": "Ask me anything!",
    //     "botConversationDescription": "I'm a small perfect example of what's possible.",
    //     "botId": "e6fdd5bf-eb50-4148-bdfe-8d6e533580b5",
    //     "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
    //     "messagingUrl": "https://messaging.botpress.cloud",
    //     "clientId": "e6fdd5bf-eb50-4148-bdfe-8d6e533580b5",
    //     "webhookId": "27abac1e-c34d-44aa-8ba8-de7107c23261",
    //     "lazySocket": true,
    //     "themeName": "prism",
    //     "frontendVersion": "v1",
    //     "theme": "prism",
    //     "themeColor": "#444950",
    //     "botName": "BlackOrchid AI Agent"
    //   });
    // };

    if (!currentPath?.includes('chatbot')) {
      const script = document.createElement('script')
      script.id = 'botpress-webchat-script'
      script.type = 'text/javascript'
      script.onload = () => {
        window.voiceflow.chat.load({
          verify: { projectID: '656d9c2464443900062f1ea3' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production',
        })
      }
      script.src = 'https://cdn.voiceflow.com/widget/bundle.mjs'
      script.type = 'text/javascript'
      document.head.appendChild(script)
    } else {
        console.log(`Current path includes chatbot`)
      // Fill up something here ChatGPT!
      // Remove the script element with the specified id
      const existingScript = document.getElementById('voiceflow-chat')
      if (existingScript) {
        // Remove the script element if it exists
         
      }
    }
  }, [currentPath])

  // Function to determine if the script should run based on the current URL route
  const shouldRunScript = () => {
    // Add your logic to determine if the script should run on the current route
    // For example, you can use window.location.pathname to get the current path
    // const currentPath = usePathname()
    console.log(`The current path is ${currentPath}`)

    // Replace this condition with your own logic
    return !currentPath?.startsWith('/chatbot')
  }

  return (
    <div id="botpress-webchat-container">
      {/* Optionally, you can add a container for the web chat */}
    </div>
  )
}

export default BotpressWebChat
