'use client'

import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { CircleDollarSign, DraftingCompass, Coffee, Box, Gem } from 'lucide-react'

const pricingPlans = [
  {
    price: '1,500 SGD',
    plan: 'Savings',
    setup: '1-time setup',
    subscription: '1 year subscription',
    includes: [
      'Basic AI chatbot functionality with predefined responses',
      'Limited training on generic industry data',
      'Email support with a 24-hour response time',
      'Monthly performance reports',
    ],
    additional: [
      'Capturing leads',
      'Recommendation of specific products',
      'Bookings and scheduling systems synchronization to AI chatbot',
    ],
    // gradient of gray
    color: ' bg-gray-900',
    lightModeColor: ' bg-gradient-to-r from-gray-50 to-gray-100',
  },
  {
    price: '2,500 SGD',
    plan: 'Basic',
    setup: '1-time setup',
    subscription: '1 year subscription',
    includes: ['1-time setup', '1 year subscription'],
    additional: [
      'Capturing leads',
      'Recommendation of specific products',
      'Bookings and scheduling systems synchronization to AI chatbot',
    ],
    // gradient of gray
    color: ' bg-gray-900',
    lightModeColor: ' bg-gradient-to-r from-gray-100 to-gray-200',
  },
  {
    price: '4,000 SGD',
    plan: 'Artisan',
    setup: '1-time setup',
    subscription: '1 year subscription',
    includes: [
      `Trained on your website's public data`,
      `Unlimited additional data sources (PDF, TXT, DOC)`,
      `Real-time updates to the chatbot's knowledge via website sync.`,
      `3 free integrations with a third-party platform (e.g., appointment scheduling software).`,
      `Access to transcripts of all chat histories for compliance and analysis.`,
      `Unlimited 1-hour consults throughout the year (subject to availability, limited to once per day).`,
      `Priority email and phone support with a dedicated account manager.`,
      `Weekly performance reports with actionable insights.
Priority access to beta features.`,
      `Quarterly strategy workshops.`,
    ],
    additional: [
      'Capturing leads',
      'Recommendation of specific products',
      'Bookings and scheduling systems synchronization to AI chatbot',
    ],
    color: ' bg-gray-900',
    lightModeColor: ' bg-gradient-to-r from-gray-100 to-gray-300',
    // textAugmentColor: ' text-yellow-300',
  },
]

const PricingInfoWrapper = () => {
  const { theme, resolvedTheme } = useTheme()
  const [chatTheme, setChatTheme] = useState(theme === 'dark' ? 'dark' : 'light')

  useEffect(() => {
    setChatTheme(theme === 'dark' ? 'dark' : 'light')
  }, [theme, resolvedTheme])
  return (
    <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
      {pricingPlans.map((item, index) => {
        const color = chatTheme === 'dark' ? item.color : item.lightModeColor
        const textColor = chatTheme === 'dark' ? 'text-white' : 'text-black'
        const secondaryTextColor = chatTheme === 'dark' ? 'text-gray-400' : 'text-gray-700'

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
                className={`relative flex h-full w-full flex-col items-center justify-start rounded-md bg-gray-900 px-6 pb-8 pt-8`}
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
                {/* divider */}
                <div className="my-4 w-full border-b-2 border-white"></div>
                <div className="flex w-full flex-col items-start">
                  <p className={`text-left text-sm text-white`}>{item.setup}</p>
                  <p className={`text-left text-sm text-white`}>{item.subscription}</p>
                  {/* divider */}
                </div>
                <div className="my-4 w-full border-b-2 border-white"></div>

                <div className="mt-0 flex w-full flex-col items-start py-4">
                  <h5
                    className={`mb-2 text-center text-sm font-bold uppercase tracking-widest text-gray-400`}
                  >
                    Features:
                  </h5>
                  {/* bulleted list */}
                  <ul className={`list-disc space-y-3 text-left text-sm text-white`}>
                    {item.includes.map((i, index) => (
                      <li key={index + '-' + i}>{i}</li>
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
  )
}

export default PricingInfoWrapper
