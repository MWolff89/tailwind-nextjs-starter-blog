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

  const additionalDataSources = {
    Savings: 0,
    Basic: 3,
    Artisan: 'Unlimited',
  }

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

  const priorityPhoneSupport = {
    Savings: 'No',
    Basic: 'No',
    Artisan: 'Yes',
  }

  const consultingCalls = {
    Savings: 0,
    Basic: '2 hrs / mnth',
    Artisan: '6 hrs / mnth',
  }

  const priorityAccessToBetaFeatures = {
    Savings: 'No',
    Basic: 'No',
    Artisan: 'Yes',
  }

  const licenseDuration = '1 year'

  // Icons for each plan
  const icons = [CircleDollarSign, Box, Gem]

  return (
    <div className="w-full rounded-lg border border-indigo-900 bg-gray-800 p-1">
      <table className="min-w-full divide-y divide-gray-700">
        <thead className="bg-gray-900">
          <tr>
            <th
              scope="col"
              className="pricing-th bg-indigo-900 px-6 py-3 text-center text-lg font-medium uppercase tracking-wider text-white md:bg-gray-900 md:text-left md:text-xs"
            >
              Pricing Plans
            </th>
            {Object.keys(plans).map((plan, index) => {
              const LucideIcon = icons[index]
              return (
                <th
                  key={plan}
                  scope="col"
                  className="pricing-th px-6 py-3 text-center text-xs font-medium uppercase tracking-wider text-gray-300"
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
        <tbody className="divide-y divide-gray-700 bg-gray-900">
          <TotalPrice plans={plans} />
          <LicenseDuration licenseDuration={licenseDuration} plans={plans} />
          <TrainedOnYourData trainedOnYourData={trainedOnYourData} />
          <RealtimeUpdates realtimeUpdates={realtimeUpdates} />
          <WebWidget webWidget={webWidget} />
          <EmailSupport emailSupport={emailSupport} />
          <PerformanceReports performanceReports={performanceReports} />
          <DeploymentOptions deploymentOptions={deploymentOptions} />
          <TokenLimits tokenLimits={tokenLimits} />
          <ConsultingCalls consultingCalls={consultingCalls} />
          <AdditionalDataSources additionalDataSources={additionalDataSources} />
          <ChatHistoryTranscripts chatHistoryTranscripts={chatHistoryTranscripts} />
          <ThirdPartyIntegrations thirdPartyIntegrations={thirdPartyIntegrations} />
          <ModelVariants modelVariants={modelVariants} />
          <PriorityPhoneSupport priorityPhoneSupport={priorityPhoneSupport} />
          <PriorityAccessToBetaFeatures
            priorityAccessToBetaFeatures={priorityAccessToBetaFeatures}
          />
        </tbody>
      </table>
    </div>
  )
}

export default PricingInfoWrapper

const EmailSupport = ({ emailSupport }) => {
  return (
    <tr>
      <td className="pricing-tr-label">Email Support</td>
      {Object.keys(emailSupport).map((plan) => (
        <td key={plan} className="pricing-td">
          <div className="text-xs uppercase">Within</div>
          <div className="">{emailSupport[plan]}</div>
        </td>
      ))}
    </tr>
  )
}

const PerformanceReports = ({ performanceReports }) => {
  return (
    <tr>
      <td className="pricing-tr-label">Performance Reports</td>
      {Object.keys(performanceReports).map((plan) => (
        <td key={plan} className="pricing-td">
          {performanceReports[plan]}
        </td>
      ))}
    </tr>
  )
}

const TokenLimits = ({ tokenLimits }) => {
  {
    /* Token Limits */
  }
  return (
    <tr>
      <td className="pricing-tr-label">Token Limits</td>
      {Object.keys(tokenLimits).map((plan) => (
        <td key={plan} className="pricing-td">
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
      <td className="pricing-tr-label">Knowledge sync</td>
      {Object.keys(realtimeUpdates).map((plan) => (
        <td key={plan} className="pricing-td">
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
      <td className="pricing-tr-label">Trained on your website</td>
      {Object.keys(trainedOnYourData).map((plan) => (
        <td key={plan} className="pricing-td">
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
      <td className="pricing-tr-label">Web Widget</td>
      {Object.keys(webWidget).map((plan) => (
        <td key={plan} className="pricing-td">
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
      <td className="pricing-tr-label">Chat History Transcripts</td>
      {Object.keys(chatHistoryTranscripts).map((plan) => (
        <td key={plan} className="pricing-td">
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

const ModelVariants = ({ modelVariants }) => {
  return (
    <tr>
      <td className="pricing-tr-label">Model Variants</td>
      {/* Red cross if none, else display number with a + in front */}
      {Object.keys(modelVariants).map((plan) => (
        <td key={plan} className="pricing-td">
          {modelVariants[plan] === 0 ? (
            // Red Cross Emoticon
            '❌'
          ) : (
            <div>
              +{modelVariants[plan]}
              {/* <div className="text-xs text-gray-300">per month</div> */}
            </div>
          )}
        </td>
      ))}
    </tr>
  )
}

const ThirdPartyIntegrations = ({ thirdPartyIntegrations }) => {
  return (
    <tr>
      <td className="pricing-tr-label">Third Party Integrations</td>
      {Object.keys(thirdPartyIntegrations).map((plan) => (
        <td key={plan} className="pricing-td">
          {/* Red cross if 0, else display the number */}
          {thirdPartyIntegrations[plan] === 0 ? (
            // Red Cross Emoticon
            '❌'
          ) : (
            <div>
              {thirdPartyIntegrations[plan]}
              {/* <div className="text-xs text-gray-300">per month</div> */}
            </div>
          )}
        </td>
      ))}
    </tr>
  )
}

const AdditionalDataSources = ({ additionalDataSources }) => {
  return (
    <tr>
      <td className="pricing-tr-label">Additional Data Sources</td>
      {Object.keys(additionalDataSources).map((plan) => (
        <td key={plan} className="pricing-td">
          {/* if 0 then red cross emoji, else put the content*/}
          {additionalDataSources[plan] === 0 ? (
            // Red Cross Emoticon
            '❌'
          ) : (
            <div>
              {additionalDataSources[plan]}
              {/* <div className="text-xs text-gray-300">per month</div> */}
            </div>
          )}
        </td>
      ))}
    </tr>
  )
}

const DeploymentOptions = ({ deploymentOptions }) => {
  return (
    <tr>
      <td className="pricing-tr-label">Deployment Options</td>
      {Object.keys(deploymentOptions).map((plan) => (
        <td key={plan} className="pricing-td">
          {/* Bulleted */}
          <ul className="list-inside list-disc">
            {deploymentOptions[plan].map((option) => (
              <li key={option}>{option}</li>
            ))}
          </ul>
        </td>
      ))}
    </tr>
  )
}

const PriorityPhoneSupport = ({ priorityPhoneSupport }) => {
  return (
    <tr>
      <td className="pricing-tr-label">Priority Phone Support</td>
      {Object.keys(priorityPhoneSupport).map((plan) => (
        <td key={plan} className="pricing-td">
          {/* Green Tick if Yes */}
          {priorityPhoneSupport[plan] === 'Yes'
            ? // Green Tick Emoticon
              '✔️'
            : // Red Cross Emoticon
              '❌'}
        </td>
      ))}
    </tr>
  )
}

const TotalPrice = ({ plans }) => {
  return (
    <tr>
      <td className="pricing-tr-label">Base Price</td>
      {Object.keys(plans).map((plan) => (
        <td key={plan} className="pricing-td text-center font-medium tracking-wider">
          {/* Inject a comma after one character */}
          {plans[plan].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} SGD
        </td>
      ))}
    </tr>
  )
}

const ConsultingCalls = ({ consultingCalls }) => {
  return (
    <tr>
      <td className="pricing-tr-label">Strategy Calls</td>
      {Object.keys(consultingCalls).map((plan) => (
        <td key={plan} className="pricing-td">
          {/* Red cross if 0, else display the number */}
          {consultingCalls[plan] === 0 ? (
            // Red Cross Emoticon
            '❌'
          ) : (
            <div>
              {consultingCalls[plan]}
              {/* <div className="text-xs text-gray-300">per month</div> */}
            </div>
          )}
        </td>
      ))}
    </tr>
  )
}

const PriorityAccessToBetaFeatures = ({ priorityAccessToBetaFeatures }) => {
  return (
    <tr>
      <td className="pricing-tr-label">Priority Access to Beta Features</td>
      {Object.keys(priorityAccessToBetaFeatures).map((plan) => (
        <td key={plan} className="pricing-td">
          {/* Green Tick if Yes */}
          {priorityAccessToBetaFeatures[plan] === 'Yes'
            ? // Green Tick Emoticon
              '✔️'
            : // Red Cross Emoticon
              '❌'}
        </td>
      ))}
    </tr>
  )
}

const LicenseDuration = ({ licenseDuration, plans }) => {
  return (
    <tr>
      <td className="pricing-tr-label">License Duration</td>
      <td className="pricing-td md:bg-gray-800" colSpan={Object.keys(plans).length}>
        {licenseDuration}
      </td>
    </tr>
  )
}
