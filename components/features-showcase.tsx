import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Beyond Robotic Responses',
    description:
      'Our AI agents use state-of-the-art AI technologies to mirror human conversation nuances. This focus on sounding genuinely human improves user interactions, creating a more authentic conversational experience.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Personalized Conversations',
    description: `Our AI agents excel at learning from past interactions, delivering personalized responses that remembers and understands the user. This learning capability empowers a more tailored experience for each user.`,
    icon: LockClosedIcon,
  },
  {
    name: 'Handling Complexity',
    description:
      'Our AI agents are designed to handle diverse and complex inquiries, significantly reducing the workload for customer service and enhancing cost-effectiveness by adapting to unpredictable scenarios.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Instant Responses, 24/7 Availability',
    description:
      'Our AI agents boost customer experience by eliminating wait times, offering instant 24/7 assistance, and generating substantial cost savings by automating customer service at a highly sophisticated level.',
    icon: FingerPrintIcon,
  },
]

export default function FeaturesShowcase() {
  return (
    <div className="bg-background py-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-500">Trust Us</h2>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
            Our chatbots are built different
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-500 dark:text-gray-400">
            Businesses are constantly seeking innovative solutions to enhance user experience and
            streamline operations. One such groundbreaking advancement is the transition from
            traditional chatbots to AI-powered conversational agents.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <span className="uppercase text-gray-500 dark:text-gray-400">{feature.name}</span>
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
