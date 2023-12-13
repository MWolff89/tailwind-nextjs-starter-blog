import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

const exampleMessages = [
  // {
  //   heading: 'List the benefits of hot yoga',
  //   message: `What are the benefits of hot yoga?`
  // },
  {
    heading: 'What are your services?',
    message: `What are your services?`,
  },
  {
    heading: 'What classes do you have?',
    message: `What classes are available?`,
  },
  {
    heading: 'What is the pricing?',
    message: 'What is the pricing for Nam Kee Pau classes?',
  },
  {
    heading: 'Do you have a free trial?',
    message: `Do you have a free trial?`,
  },
]

const namkeepauExampleMessages = [
  {
    heading: 'Tell me more about Nam Kee Pau',
    message: `Tell me more about Nam Kee Pau`,
  },
  {
    heading: 'Where are you located?',
    message: `Where are you located?`,
  },
  {
    heading: 'What special bundles do you have?',
    message: `What special bundles do you have?`,
  },
]

export function EmptyScreen({ setInput }: Pick<UseChatHelpers, 'setInput'>) {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="bg-background rounded-lg border p-8">
        <h1 className="mb-2 text-lg font-semibold">Welcome to Nam Kee Pau Chatbot!</h1>
        <p className="text-muted-foreground mb-2 leading-normal">
          This is an demo AI chatbot built for Nam Kee Pau by{' '}
          <ExternalLink href="https://www.blackorchidai.com/about">BlackOrchid AI</ExternalLink>.
        </p>
        <p className="text-muted-foreground leading-normal">
          You can start a conversation here or try the following examples:
        </p>
        <div className="mt-4 flex flex-col items-start space-y-2">
          {namkeepauExampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-left text-base"
              onClick={() => setInput(message.message)}
            >
              <IconArrowRight className="text-muted-foreground mr-2" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
