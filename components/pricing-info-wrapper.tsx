'use client'

import React, { useState } from 'react'
import { CircleDollarSign, Box, Gem } from 'lucide-react'

const PricingInfoWrapper = () => {
  // Initialize state to track additional costs for deployment options
  const [selectedOptions, setSelectedOptions] = useState({
    Savings: {},
    Basic: {},
    Artisan: {},
  })

  // Handle change in deployment options
  const handleOptionChange = (plan, option) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [plan]: {
        ...prev[plan],
        [option]: !prev[plan][option],
      },
    }))
  }

  // Calculate total price based on selected options
  const calculateTotalPrice = (basePrice, plan) => {
    const optionsPricing = {
      'Slack or Internal Tool': plan === 'Savings' ? 300 : plan === 'Basic' ? 500 : 700,
      'Model Customization for Internal Tool':
        plan === 'Savings' ? 500 : plan === 'Basic' ? 800 : 1000,
    }

    return Object.keys(selectedOptions[plan]).reduce((total, current) => {
      return total + (selectedOptions[plan][current] ? optionsPricing[current] : 0)
    }, basePrice)
  }

  const baseFeatures = [
    "Trained on your website's public data.",
    'Real-time updates via website sync.',
  ]

  const additionalDataSources = {
    Savings: 0,
    Basic: 3,
    Artisan: 'Unlimited',
  }

  // Define the plans and their base prices
  const plans = {
    Savings: 1500,
    Basic: 2500,
    Artisan: 4000,
  }

  const emailSupport = {
    Savings: '24 hours',
    Basic: '12 hours',
    Artisan: '6 hours',
  }

  const performanceReports = {
    Savings: 'Monthly',
    Basic: 'Bi-monthly',
    Artisan: 'Weekly',
  }

  const webWidget = {
    Savings: 'Yes',
    Basic: 'Yes',
    Artisan: 'Yes',
  }

  const tokenLimits = {
    Savings: '10 million',
    Basic: '20 million',
    Artisan: '30 million',
  }

  const thirdPartyIntegrations = {
    Savings: 0,
    Basic: 1,
    Artisan: 3,
  }

  const deploymentOptions = {
    Savings: ['Web Widget'],
    Basic: ['Web Widget', 'Slack or Discord'],
    Artisan: ['Web Widget', 'Slack or Discord', 'WhatsApp or Telegram'],
  }

  const slackDeployment = {
    Savings: 300,
    Basic: 100,
    Artisan: 0,
  }

  const whatsappDeployment = {
    Savings: 500,
    Basic: 300,
    Artisan: 0,
  }

  const telegramDeployment = {
    Savings: 300,
    Basic: 100,
    Artisan: 0,
  }

  const discordDeployment = {
    Savings: 300,
    Basic: 100,
    Artisan: 0,
  }

  const modelVariants = {
    Savings: 0,
    Basic: 1,
    Artisan: 2,
  }

  const realtimeUpdates = {
    Savings: 'Yes',
    Basic: 'Yes',
    Artisan: 'Yes',
  }

  const trainedOnYourData = {
    Savings: 'Yes',
    Basic: 'Yes',
    Artisan: 'Yes',
  }

  const chatHistoryTranscripts = {
    Savings: 'No',
    Basic: 'Yes',
    Artisan: 'Yes',
  }

  // Icons for each plan
  const icons = [CircleDollarSign, Box, Gem]

  return (
    <div className="w-full rounded-md border border-indigo-300">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-900">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-400"
            >
              Feature
            </th>
            {Object.keys(plans).map((plan, index) => {
              const LucideIcon = icons[index]
              return (
                <th
                  key={plan}
                  scope="col"
                  className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider text-gray-400"
                >
                  {plan}
                  <div className="mt-2">
                    <LucideIcon size={24} className="mx-auto text-primary-400" />
                  </div>
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-gray-900">
          {/* Rows for features */}
          {/* Row for total price */}
          <tr>
            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-white">
              Base Price
            </td>
            {Object.keys(plans).map((plan) => (
              <td
                key={plan}
                className="text-md whitespace-nowrap px-6 py-4 text-center font-medium text-white"
              >
                {calculateTotalPrice(plans[plan], plan)} SGD
              </td>
            ))}
          </tr>
          <TrainedOnYourData trainedOnYourData={trainedOnYourData} />
          <RealtimeUpdates realtimeUpdates={realtimeUpdates} />
          <WebWidget webWidget={webWidget} />
          <tr>
            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-white">
              Email Support
            </td>
            {Object.keys(emailSupport).map((plan) => (
              <td
                key={plan}
                className="whitespace-nowrap px-6 py-4 text-center text-sm text-gray-400"
              >
                <div>Within</div>
                <div>{emailSupport[plan]}</div>
              </td>
            ))}
          </tr>
          <tr>
            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-white">
              Performance Reports
            </td>
            {Object.keys(performanceReports).map((plan) => (
              <td
                key={plan}
                className="whitespace-nowrap px-6 py-4 text-center text-sm text-gray-400"
              >
                {performanceReports[plan]}
              </td>
            ))}
          </tr>
          {/* Rows for deployment options */}
          <tr>
            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-white">
              Deployment Options
            </td>
            {Object.keys(deploymentOptions).map((plan) => (
              <td
                key={plan}
                className="whitespace-nowrap px-6 py-4 text-center text-sm text-gray-400"
              >
                {/* Bulleted */}
                <ul className="list-inside list-disc">
                  {deploymentOptions[plan].map((option) => (
                    <li key={option}>{option}</li>
                  ))}
                </ul>
              </td>
            ))}
          </tr>
          <TokenLimits tokenLimits={tokenLimits} />
          <ChatHistoryTranscripts chatHistoryTranscripts={chatHistoryTranscripts} />
          <tr>
            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-white">
              Additional Data Sources
            </td>
            {Object.keys(additionalDataSources).map((plan) => (
              <td
                key={plan}
                className="whitespace-nowrap px-6 py-4 text-center text-sm text-gray-400"
              >
                {/* if 0 then red cross emoji, else put the content*/}
                {additionalDataSources[plan] === 0 ? (
                  // Red Cross Emoticon
                  '❌'
                ) : (
                  <div>
                    {additionalDataSources[plan]}
                    {/* <div className="text-xs text-gray-400">per month</div> */}
                  </div>
                )}
              </td>
            ))}
          </tr>

          <tr>
            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-white">
              Third Party Integrations
            </td>
            {Object.keys(thirdPartyIntegrations).map((plan) => (
              <td
                key={plan}
                className="whitespace-nowrap px-6 py-4 text-center text-sm text-gray-400"
              >
                {/* Red cross if 0, else display the number */}
                {thirdPartyIntegrations[plan] === 0 ? (
                  // Red Cross Emoticon
                  '❌'
                ) : (
                  <div>
                    {thirdPartyIntegrations[plan]}
                    {/* <div className="text-xs text-gray-400">per month</div> */}
                  </div>
                )}
              </td>
            ))}
          </tr>

          {/* Rows for model variants */}
          <tr>
            <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-white">
              Model Variants
            </td>
            {/* Red cross if none, else display number with a + in front */}
            {Object.keys(modelVariants).map((plan) => (
              <td
                key={plan}
                className="whitespace-nowrap px-6 py-4 text-center text-sm text-gray-400"
              >
                {modelVariants[plan] === 0 ? (
                  // Red Cross Emoticon
                  '❌'
                ) : (
                  <div>
                    +{modelVariants[plan]}
                    {/* <div className="text-xs text-gray-400">per month</div> */}
                  </div>
                )}
              </td>
            ))}
          </tr>

          {/* ...other option rows */}
        </tbody>
      </table>
    </div>
  )
}

export default PricingInfoWrapper

const TokenLimits = ({ tokenLimits }) => {
  {
    /* Token Limits */
  }
  return (
    <tr>
      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-white">Token Limits</td>
      {Object.keys(tokenLimits).map((plan) => (
        <td key={plan} className="whitespace-nowrap px-6 py-4 text-center text-sm text-gray-400">
          {tokenLimits[plan]}
        </td>
      ))}
    </tr>
  )
}

const RealtimeUpdates = ({ realtimeUpdates }) => {
  {
    /* Realtime Updates */
  }
  return (
    <tr>
      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-white">Knowledge sync</td>
      {Object.keys(realtimeUpdates).map((plan) => (
        <td key={plan} className="whitespace-nowrap px-6 py-4 text-center text-sm text-gray-400">
          {/* Green Tick if Yes */}
          {realtimeUpdates[plan] === 'Yes'
            ? // Green Tick Emoticon
              '✔️'
            : // Red Cross Emoticon
              '❌'}
        </td>
      ))}
    </tr>
  )
}

const TrainedOnYourData = ({ trainedOnYourData }) => {
  {
    /* Trained on your data */
  }
  return (
    <tr>
      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-white">
        Trained on your website
      </td>
      {Object.keys(trainedOnYourData).map((plan) => (
        <td key={plan} className="whitespace-nowrap px-6 py-4 text-center text-sm text-gray-400">
          {/* Green Tick if Yes */}
          {trainedOnYourData[plan] === 'Yes'
            ? // Green Tick Emoticon
              '✔️'
            : // Red Cross Emoticon
              '❌'}
        </td>
      ))}
    </tr>
  )
}

const WebWidget = ({ webWidget }) => {
  return (
    <tr>
      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-white">Web Widget</td>
      {Object.keys(webWidget).map((plan) => (
        <td key={plan} className="whitespace-nowrap px-6 py-4 text-center text-sm text-gray-400">
          {/* {webWidget[plan]} */}
          {/* Greentick Emoticon */}
          ✔️
        </td>
      ))}
    </tr>
  )
}

const ChatHistoryTranscripts = ({ chatHistoryTranscripts }) => {
  {
    /* Chat History Transcripts */
  }
  return (
    <tr>
      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-white">
        Chat History Transcripts
      </td>
      {Object.keys(chatHistoryTranscripts).map((plan) => (
        <td key={plan} className="whitespace-nowrap px-6 py-4 text-center text-sm text-gray-400">
          {/* Green Tick if Yes */}
          {chatHistoryTranscripts[plan] === 'Yes'
            ? // Green Tick Emoticon
              '✔️'
            : // Red Cross Emoticon
              '❌'}
        </td>
      ))}
    </tr>
  )
}
