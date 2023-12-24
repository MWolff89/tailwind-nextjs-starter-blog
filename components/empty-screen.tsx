import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

const yogaMalaExampleMessages = [
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

const yogaMandalaExampleMessages = [
  {
    heading: 'Tell me more about Yoga Mandala',
    message: `Tell me more about Yoga Mandala`,
  },
  {
    heading: 'Where are you located?',
    message: `Where are you located?`,
  },
  {
    heading: 'What are your rates?',
    message: `What are your rates?`,
  },
  {
    heading: 'What classes do you have?',
    message: `What classes do you have?`,
  },
  {
    heading: `I'm a beginner at yoga, what would you recommend?`,
    message: `I'm a beginner at yoga, what would you recommend?`,
  },
]

const lavaYogaExampleMessages = [
  {
    heading: 'Tell me more about Lava Yoga',
    message: `Tell me more about Lava Yoga`,
  },
  {
    heading: 'Where are you located?',
    message: `Where are you located?`,
  },
  {
    heading: 'What are your rates?',
    message: `What are your rates?`,
  },
  {
    heading: 'What classes do you have?',
    message: `What classes do you have?`,
  },
  {
    heading: `I'm a beginner at yoga, what would you recommend?`,
    message: `I'm a beginner at yoga, what would you recommend?`,
  },
]

const unionYogaExampleMessages = [
  {
    heading: 'Tell me more about Union Yoga',
    message: `Tell me more about Union Yoga`,
  },
  {
    heading: 'Where are you located?',
    message: `Where are you located?`,
  },
  {
    heading: 'What are your rates?',
    message: `What are your rates?`,
  },
  {
    heading: 'What classes do you have?',
    message: `What classes do you have?`,
  },
]

const yogaPlusExampleMessages = [
  {
    heading: 'Tell me more about Yoga Plus',
    message: `Tell me more about Yoga Plus`,
  },
  {
    heading: 'Where are you located?',
    message: `Where are you located?`,
  },
  {
    heading: 'What are your rates?',
    message: `What are your rates?`,
  },
  {
    heading: 'What classes do you have?',
    message: `What classes do you have?`,
  },
]

const kalidassLawExampleMessages = [
  {
    heading: 'Tell me more about Kalidass Law',
    message: `Tell me more about Kalidass Law`,
  },
  {
    heading: 'Where are you located?',
    message: `Where are you located?`,
  },
  {
    heading: 'What are your rates?',
    message: `What are your rates?`,
  },
  {
    heading: 'What services do you provide?',
    message: `What services do you provide?`,
  },
]

const rexLegalExampleMessages = [
  {
    heading: 'Tell me more about Rex Legal',
    message: `Tell me more about Rex Legal`,
  },
  {
    heading: 'Where are you located?',
    message: `Where are you located?`,
  },
  {
    heading: 'What are your rates?',
    message: `What are your rates?`,
  },
  {
    heading: 'What services do you provide?',
    message: `What services do you provide?`,
  },
]

const minmedExampleMessages = [
  {
    heading: 'Tell me more about Minmed',
    message: `Tell me more about Minmed`,
  },
  {
    heading: 'Where are you located?',
    message: `Where are you located?`,
  },
  {
    heading: 'What services do you provide?',
    message: `What services do you provide?`,
  },
  {
    heading: 'I saw your cycle shop near robertson',
    message: `I saw your cycle shop near robertson`,
  },
]

const indexToContent = {
  namkeepau: {
    title: 'Nam Kee Pau',
    description: 'Nam Kee Pau Chatbot',
    exampleMessages: namkeepauExampleMessages,
  },
  'yoga-mala': {
    title: 'Yoga Mala',
    description: 'Yoga Mala Chatbot',
    exampleMessages: yogaMalaExampleMessages,
  },
  'yoga-mandala': {
    title: 'Yoga Mandala',
    description: 'Yoga Mandala Chatbot',
    exampleMessages: yogaMandalaExampleMessages,
  },
  'lava-yoga': {
    title: 'Lava Yoga',
    description: 'Lava Yoga Chatbot',
    exampleMessages: lavaYogaExampleMessages,
  },
  'union-yoga': {
    title: 'Union Yoga',
    description: 'Union Yoga Chatbot',
    exampleMessages: unionYogaExampleMessages,
  },
  'yoga-plus': {
    title: 'Yoga Plus',
    description: 'Yoga Plus Chatbot',
    exampleMessages: yogaPlusExampleMessages,
  },
  'kalidass-law': {
    title: 'Kalidass Law',
    description: 'Kalidass Law Chatbot',
    exampleMessages: kalidassLawExampleMessages,
  },
  'rex-legal': {
    title: 'Rex Legal',
    description: 'Rex Legal Chatbot',
    exampleMessages: rexLegalExampleMessages,
  },
  minmed: {
    title: 'Minmed',
    description: 'Minmed Chatbot',
    exampleMessages: minmedExampleMessages,
  },
}

type EmptyScreenProps = {
  setInput: UseChatHelpers['setInput']
  index: string
}

export function EmptyScreen({ setInput, index }: EmptyScreenProps) {
  const { title, description, exampleMessages } =
    indexToContent[index as keyof typeof indexToContent]
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="bg-background rounded-lg border p-8">
        <h1 className="mb-2 text-lg font-semibold">Welcome to {title} Chatbot!</h1>
        <p className="text-muted-foreground mb-2 leading-normal">
          This is a demo AI chatbot built for {title} by{' '}
          <ExternalLink href="https://www.blackorchidai.com/about">BlackOrchid AI</ExternalLink>.
        </p>
        <p className="text-muted-foreground leading-normal">
          You can start a conversation here or try the following examples:
        </p>
        <div className="mt-4 flex flex-col items-start space-y-2">
          {exampleMessages.map((message, index) => (
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
