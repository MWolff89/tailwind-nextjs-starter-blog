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

const jcpLawExampleMessages = [
  {
    heading: 'Tell me more about JCP Law',
    message: `Tell me more about JCP Law`,
  },
  {
    heading: 'Where are you located?',
    message: `Where are you located?`,
  },
  {
    heading: 'How can I prepare for my first legal consultation with a JCP Law attorney?',
    message: `How can I prepare for my first legal consultation with a JCP Law attorney?`,
  },
  {
    heading: 'What are the steps involved in scheduling an appointment with a lawyer at JCP Law?',
    message: `What are the steps involved in scheduling an appointment with a lawyer at JCP Law?`,
  },
  {
    heading: 'Are there any specific areas of law that JCP Law specializes in?',
    message: `Are there any specific areas of law that JCP Law specializes in?`,
  },
]

const irbLawExampleMessages = [
  {
    heading: 'Tell me more about I.R.B Law',
    message: `Tell me more about I.R.B Law`,
  },
  {
    heading: 'What services do you provide?',
    message: `What services do you provide?`,
  },
  {
    heading: 'What are the requirements for obtaining a Personal Protection Order?',
    message: `What are the requirements for obtaining a Personal Protection Order?`,
  },
  {
    heading:
      'Can you provide information on the services related to Syariah Law, such as Faraid and Muslim Wills?',
    message: `Can you provide information on the services related to Syariah Law, such as Faraid and Muslim Wills?`,
  },
  {
    heading:
      'Could you explain the concept of Lasting Power of Attorney and when it might be necessary?',
    message: `Could you explain the concept of Lasting Power of Attorney and when it might be necessary?`,
  },
]

const ensoulClinicExampleMessages = [
  {
    heading: 'Tell me more about Ensoul Clinic',
    message: `Tell me more about Ensoul Clinic`,
  },
  {
    heading: 'What services do you provide?',
    message: `What services do you provide?`,
  },
  {
    heading:
      "What's the difference between pico laser and traditional laser treatments for pigmentation?",
    message:
      "What's the difference between pico laser and traditional laser treatments for pigmentation?",
  },
  {
    heading: 'What safety measures does Ensoul Clinic have in place for its treatments?',
    message: 'What safety measures does Ensoul Clinic have in place for its treatments?',
  },
  {
    heading: 'How does Ensoul Clinic personalize treatments for individual aesthetic goals?',
    message: 'How does Ensoul Clinic personalize treatments for individual aesthetic goals?',
  },
]

const farallonLawExampleMessages = [
  {
    heading: 'Tell me more about Farallon Law',
    message: `Tell me more about Farallon Law`,
  },
  {
    heading: 'What services do you provide?',
    message: `What services do you provide?`,
  },
  {
    heading:
      "Could you explain the process of dealing with the CAD if they've contacted me for an interview?",
    message:
      "Could you explain the process of dealing with the CAD if they've contacted me for an interview?",
  },
  {
    heading: 'What should I know about breach of fiduciary duties in Singapore?',
    message: 'What should I know about breach of fiduciary duties in Singapore?',
  },
  {
    heading: 'What is minority oppression in the context of Singaporean corporate law?',
    message: 'What is minority oppression in the context of Singaporean corporate law?',
  },
]

const regalLawExampleMessages = [
  {
    heading: 'Tell me more about Regal Law',
    message: `Tell me more about Regal Law`,
  },
  {
    heading: 'What services do you provide?',
    message: `What services do you provide?`,
  },
  {
    heading:
      'Can you provide information on the process for obtaining a free legal consultation with Regal Law?',
    message:
      'Can you provide information on the process for obtaining a free legal consultation with Regal Law?',
  },
  {
    heading: 'What makes your team of expert lawyers stand out in handling criminal law cases?',
    message: 'What makes your team of expert lawyers stand out in handling criminal law cases?',
  },
  {
    heading:
      'Can you explain the legal process for someone charged with a criminal offense in Singapore?',
    message:
      'Can you explain the legal process for someone charged with a criminal offense in Singapore?',
  },
]

const jooToonLLCExampleMessages = [
  {
    heading: 'Tell me more about Joo Toon LLC',
    message: `Tell me more about Joo Toon LLC`,
  },
  {
    heading: 'What services do you provide?',
    message: `What services do you provide?`,
  },
  {
    heading: 'How does Joo Toon LLC determine fees for legal services?',
    message: 'How does Joo Toon LLC determine fees for legal services?',
  },
  {
    heading: 'What should I consider when dealing with a breach of director’s duties?',
    message: 'What should I consider when dealing with a breach of director’s duties?',
  },
  {
    heading: 'Can you tell me more about your experience with commercial litigation cases?',
    message: 'Can you tell me more about your experience with commercial litigation cases?',
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
  'jcp-law': {
    title: 'JCP Law',
    description: 'JCP Law Chatbot',
    exampleMessages: jcpLawExampleMessages,
  },
  'irb-law': {
    title: 'I.R.B Law',
    description: 'I.R.B Law Chatbot',
    exampleMessages: irbLawExampleMessages,
  },
  'ensoul-clinic': {
    title: 'Ensoul Clinic',
    description: 'Ensoul Clinic Chatbot',
    exampleMessages: ensoulClinicExampleMessages,
  },
  'farallon-law': {
    title: 'Farallon Law',
    description: 'Farallon Law Chatbot',
    exampleMessages: farallonLawExampleMessages,
  },
  'regal-law': {
    title: 'Regal Law',
    description: 'Regal Law Chatbot',
    exampleMessages: regalLawExampleMessages,
  },
  'joo-toon-llc': {
    title: 'Joo Toon LLC',
    description: 'Joo Toon LLC Chatbot',
    exampleMessages: jooToonLLCExampleMessages,
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
