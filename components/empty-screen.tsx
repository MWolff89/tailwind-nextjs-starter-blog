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
    heading: "I'm facing criminal charges. How can Rex Legal assist me in my defense?",
    message: `I'm facing criminal charges. How can Rex Legal assist me in my defense?`,
  },
  {
    heading:
      "I'm interested in learning about the recent cases Rex Legal has handled. Can you share some insights or direct me to where I can find more information?",
    message: `I'm interested in learning about the recent cases Rex Legal has handled. Can you share some insights or direct me to where I can find more information?`,
  },
  {
    heading:
      'What steps should I take if I want to schedule a free consultation with one of your lawyers?',
    message: `What steps should I take if I want to schedule a free consultation with one of your lawyers?`,
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

const yuenLawExampleMessages = [
  {
    heading: 'Tell me more about Yuen Law',
    message: `Tell me more about Yuen Law`,
  },
  {
    heading: 'What services do you provide?',
    message: `What services do you provide?`,
  },
  {
    heading: 'How does Yuen Law assist with intellectual property registration and enforcement?',
    message: 'How does Yuen Law assist with intellectual property registration and enforcement?',
  },
  {
    heading: 'Could you provide guidance on estate planning and the creation of wills?',
    message: 'Could you provide guidance on estate planning and the creation of wills?',
  },
  {
    heading: 'How does Yuen Law approach client management and ensure high-quality service?',
    message: 'How does Yuen Law approach client management and ensure high-quality service?',
  },
]

const gjcLawExampleMessages = [
  {
    heading: 'Tell me more about GJC Law',
    message: `Tell me more about GJC Law`,
  },
  {
    heading:
      'Can you explain the divorce process in Singapore and what are the grounds for divorce?',
    message:
      'Can you explain the divorce process in Singapore and what are the grounds for divorce?',
  },
  {
    heading:
      'How can I prepare for a custody battle, and what factors will the court consider when determining child custody?',
    message:
      'How can I prepare for a custody battle, and what factors will the court consider when determining child custody?',
  },
  {
    heading:
      'What are the financial implications of divorce, including division of assets and spousal maintenance?',
    message:
      'What are the financial implications of divorce, including division of assets and spousal maintenance?',
  },
]

const wmhLawExampleMessages = [
  {
    heading: 'Tell me more about WMH Law',
    message: `Tell me more about WMH Law`,
  },
  {
    heading: 'What services do you provide?',
    message: `What services do you provide?`,
  },
  {
    heading:
      'How does WMH Law Corporation integrate legal technology to enhance productivity and reduce costs?',
    message:
      'How does WMH Law Corporation integrate legal technology to enhance productivity and reduce costs?',
  },
  {
    heading: `Can you tell me more about the firm's recognition as a "SmartLaw" Singapore Law Practice?`,
    message: `Can you tell me more about the firm's recognition as a "SmartLaw" Singapore Law Practice?`,
  },
  {
    heading: `How can I arrange a preliminary Skype consultation with a lawyer from WMH Law Corporation?`,
    message: `How can I arrange a preliminary Skype consultation with a lawyer from WMH Law Corporation?`,
  },
]

const godwinCamposLLCExampleMessages = [
  {
    heading: 'Tell me more about Godwin Campos LLC',
    message: `Tell me more about Godwin Campos LLC`,
  },
  {
    heading: 'What services do you provide?',
    message: `What services do you provide?`,
  },
  {
    heading:
      'Can you provide more details about the free first consultation offered by Godwin Campos LLC?',
    message:
      'Can you provide more details about the free first consultation offered by Godwin Campos LLC?',
  },
  {
    heading: "Could you explain the firm's approach to handling divorce and litigation cases?",
    message: "Could you explain the firm's approach to handling divorce and litigation cases?",
  },
  {
    heading:
      'Can you share some success stories or testimonials from previous clients of the firm?',
    message:
      'Can you share some success stories or testimonials from previous clients of the firm?',
  },
]

const tembusuLawExampleMessages = [
  {
    heading: 'Tell me more about Tembusu Law',
    message: `Tell me more about Tembusu Law`,
  },
  {
    heading: 'What services do you provide?',
    message: `What services do you provide?`,
  },
  {
    heading: 'Can you explain the typical fee structure for legal services at Tembusu Law?',
    message: 'Can you explain the typical fee structure for legal services at Tembusu Law?',
  },
  {
    heading:
      'What are the differences between divorce and separation in Singapore, and how can I choose the right option for my situation?',
    message:
      'What are the differences between divorce and separation in Singapore, and how can I choose the right option for my situation?',
  },
  {
    heading:
      'What are the latest updates or changes in corporate and commercial law that might affect my business?',
    message:
      'What are the latest updates or changes in corporate and commercial law that might affect my business?',
  },
]

const writeConnectionExampleMessages = [
  {
    heading: 'Tell me more about Write Connection',
    message: `Tell me more about Write Connection`,
  },
  {
    heading: 'Can you explain the teaching methodology used and how it benefits students?',
    message: 'Can you explain the teaching methodology used and how it benefits students?',
  },
  {
    heading:
      'What are the key learning outcomes for students at different levels of the Writing Enrichment program?',
    message:
      'What are the key learning outcomes for students at different levels of the Writing Enrichment program?',
  },
  {
    heading:
      'How do you cater to the individual needs of students with different strengths and challenges?',
    message:
      'How do you cater to the individual needs of students with different strengths and challenges?',
  },
  {
    heading: 'How do you incorporate technology into your curriculum to enhance learning?',
    message: 'How do you incorporate technology into your curriculum to enhance learning?',
  },
]

const cushmanWakefieldExampleMessages = [
  {
    heading: 'Tell me more about Cushman & Wakefield',
    message: `Tell me more about Cushman & Wakefield`,
  },
  {
    heading:
      'Can you provide an overview of the current commercial real estate market trends in Singapore?',
    message:
      'Can you provide an overview of the current commercial real estate market trends in Singapore?',
  },
  {
    heading: 'Can you detail the process of leasing commercial property through you in Singapore?',
    message: 'Can you detail the process of leasing commercial property through you in Singapore?',
  },
  {
    heading:
      'What are some future-proof real estate strategies that you recommend for new developments?',
    message:
      'What are some future-proof real estate strategies that you recommend for new developments?',
  },
  {
    heading:
      'Could you explain how AI is transforming the commercial real estate industry and what that means for investors?',
    message:
      'Could you explain how AI is transforming the commercial real estate industry and what that means for investors?',
  },
]

const IVREscentExampleMessages = [
  {
    heading: 'Tell me more about I.V. Resg',
    message: `Tell me more about I.V. Resg`,
  },
  {
    heading: `How does the I'VRE perfume subscription service work, and what are the options available?`,
    message: `How does the I'VRE perfume subscription service work, and what are the options available?`,
  },
  {
    heading: `I'm looking for a gift for my friend who loves fragrances. What does I'VRE offer that could help me?`,
    message: `I'm looking for a gift for my friend who loves fragrances. What does I'VRE offer that could help me?`,
  },
  {
    heading: `What scents pair well together for layering, and how can I create a unique fragrance profile?`,
    message: `What scents pair well together for layering, and how can I create a unique fragrance profile?`,
  },
  {
    heading: `Can you suggest a perfume that would suit my preference for woody and spicy notes?`,
    message: `Can you suggest a perfume that would suit my preference for woody and spicy notes?`,
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
  'yuen-law': {
    title: 'Yuen Law',
    description: 'Yuen Law Chatbot',
    exampleMessages: yuenLawExampleMessages,
  },
  'gjc-law': {
    title: 'GJC Law',
    description: 'GJC Law Chatbot',
    exampleMessages: gjcLawExampleMessages,
  },
  'wmh-law': {
    title: 'WMH Law',
    description: 'WMH Law Chatbot',
    exampleMessages: wmhLawExampleMessages,
  },
  'godwin-campos-llc': {
    title: 'Godwin Campos LLC',
    description: 'Godwin Campos LLC Chatbot',
    exampleMessages: godwinCamposLLCExampleMessages,
  },
  'tembusu-law': {
    title: 'Tembusu Law',
    description: 'Tembusu Law Chatbot',
    exampleMessages: tembusuLawExampleMessages,
  },
  'write-connection': {
    title: 'Write Connection',
    description: 'Write Connection Chatbot',
    exampleMessages: writeConnectionExampleMessages,
  },
  cushmanwakefield: {
    title: 'Cushman & Wakefield',
    description: 'Cushman & Wakefield Chatbot',
    exampleMessages: cushmanWakefieldExampleMessages,
  },
  'ivre-sg': {
    title: 'I.VRE',
    description: 'I.VRE Chatbot',
    exampleMessages: IVREscentExampleMessages,
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
