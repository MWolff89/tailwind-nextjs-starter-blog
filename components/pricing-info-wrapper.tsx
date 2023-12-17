'use client'

import React from 'react'
import { CircleDollarSign, DraftingCompass, Coffee, Box, Gem } from 'lucide-react'

const pricingPlans = [
  {
    price: '1,500 SGD',
    plan: 'Savings',
    description: 'Ideal for small businesses with straightforward requirements.',
    subscription: '1 year license',
    features: [
      "Trained on your website's public data.",
      'Real-time updates via website sync.',
      'Email support with a 24-hour turnaround time.',
      'Weekly & monthly performance reports.',
    ],
  },
  {
    price: '2,500 SGD',
    plan: 'Basic',
    description: 'Perfect for those seeking a personalized and responsive AI solution.',
    subscription: '1 year license',
    features: [
      "Trained on your website's public data.",
      '3 additional data sources (PDF, TXT, DOC).',
      'Real-time updates via website sync.',
      '1 free third-party integration (e.g., appointment scheduling).',
      'Access to chat history transcripts.',
      '7 consulting meetups/calls annually.',
      'Priority email and phone support with a 12-hour turnaround time.',
      'Bi-monthly strategy calls.',
      'Monthly performance reports.',
    ],
  },
  {
    price: '4,000 SGD',
    plan: 'Artisan',
    description:
      'Tailored for those requiring a highly personalized, continuously evolving AI solution.',
    subscription: '1 year license',
    features: [
      "Trained on your website's public data.",
      'Unlimited additional data sources (PDF, TXT, DOC).',
      'Real-time updates via website sync.',
      '3 free third-party integrations (e.g., appointment scheduling).',
      'Access to chat history transcripts.',
      'Unlimited 1-hour consults annually.',
      'Priority email and phone support with a dedicated manager with a 6-hour turnaround time.',
      'Weekly performance reports.',
      'Priority access to beta features.',
      'Quarterly strategy workshops.',
    ],
  },
]

const PricingInfoWrapper = () => {
  return (
    <>
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
        {pricingPlans.map((item, index) => {
          const icons = [CircleDollarSign, Box, Gem]

          const LucideIcon = icons[index] // Use a different icon for each pricing plan

          return (
            <div
              key={item.price}
              className={`+ flex items-center justify-center rounded-md border border-indigo-300`}
            >
              <div
                className="col-span-1 flex h-full w-full flex-col items-center justify-center"
                key={item.price}
              >
                <div
                  className={`relative flex h-full w-full flex-col items-center justify-start rounded-md bg-gray-900 pb-8 pt-8`}
                >
                  {/* <div className="absolute left-0 top-0 p-4">
                          <LucideIcon size={24} />
                        </div> */}

                  <div className="flex items-center justify-center pb-4">
                    <LucideIcon size={24} className="text-primary-400" />
                  </div>
                  <h1 className={`text-center text-3xl font-bold text-white`}>{item.price}</h1>
                  <p
                    className={`mt-1 pt-1 text-center text-sm font-medium uppercase tracking-widest text-gray-300`}
                  >
                    {item.plan}
                  </p>
                  <p className={`py-1 text-center text-xs font-medium uppercase text-gray-300`}>
                    {item.subscription}
                  </p>
                  {/* divider */}
                  <div className="my-4 w-full border-b-[1px] border-primary-300"></div>
                  <div className="flex w-full flex-col items-center px-2">
                    <p className={`text-center text-sm font-thin text-gray-100`}>
                      {item.description}
                    </p>

                    {/* <p className={`text-center text-sm`}>{item.subscription}</p> */}
                    {/* divider */}
                  </div>
                  <div className="my-4 w-full border-b-[1px] border-primary-300"></div>

                  <div className="mt-0 flex w-full flex-col items-start px-8 py-4">
                    <h5
                      className={`mb-2 text-center text-sm font-bold uppercase tracking-widest text-gray-400`}
                    >
                      Features:
                    </h5>
                    {/* bulleted list */}
                    <ul className={`list-disc space-y-3 text-left text-sm text-white`}>
                      {item.features.map((i, index) => (
                        <li key={index + '-' + i} className={`border-b border-gray-700 py-1`}>
                          {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* <p className="text-md text-center text-white font-semibold uppercase">Additional Fees:</p>
                <p className="text-md text-center text-white">
                  Capturing leads, Recommendation of specific products, Bookings and scheduling
                  systems synchronization to AI chatbot.
                </p> */}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default PricingInfoWrapper
