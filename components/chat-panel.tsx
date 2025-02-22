import { type UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { PromptForm } from '@/components/prompt-form'
import { ButtonScrollToBottom } from '@/components/button-scroll-to-bottom'
import { IconRefresh, IconStop } from '@/components/ui/icons'
import { FooterText } from './footer-ai-bot'
// import { FooterText } from '@/components/footer'
// import { ButtonScrollToBottom } from './button-scroll-to-bottom'

export interface ChatPanelProps
  extends Pick<
    UseChatHelpers,
    'append' | 'isLoading' | 'reload' | 'messages' | 'stop' | 'input' | 'setInput'
  > {
  id?: string
}

export function ChatPanel({
  id,
  isLoading,
  stop,
  append,
  reload,
  input,
  setInput,
  messages,
}: ChatPanelProps) {
  return (
    <div
      id="chat-panel"
      className="from-muted/10 to-muted/30 fixed inset-x-0 bottom-0 bg-gradient-to-b from-10% to-50%"
    >
      <ButtonScrollToBottom />
      <div className="mx-auto sm:max-w-2xl sm:px-4">
        <div className="flex h-10 items-center justify-center ">
          {isLoading ? (
            <Button
              variant="outline"
              onClick={() => stop()}
              className="bg-background bg-white text-black antialiased dark:bg-gray-950 dark:text-white"
            >
              <IconStop className="mr-2" />
              Stop generating
            </Button>
          ) : (
            messages?.length > 0 && (
              <Button
                variant="outline"
                onClick={() => reload()}
                className="bg-background bg-white text-black antialiased dark:bg-gray-950 dark:text-white"
              >
                <IconRefresh className="mr-2" />
                Regenerate response
              </Button>
            )
          )}
        </div>
        <div className="bg-background space-y-4 border-t bg-white px-4 py-2 text-black antialiased shadow-lg dark:bg-gray-950 dark:text-white sm:rounded-t-xl sm:border md:py-4">
          <PromptForm
            onSubmit={async (value) => {
              await append({
                id,
                content: value,
                role: 'user',
              })
            }}
            input={input}
            setInput={setInput}
            isLoading={isLoading}
          />
          <FooterText className="hidden sm:block" />
        </div>
      </div>
    </div>
  )
}
