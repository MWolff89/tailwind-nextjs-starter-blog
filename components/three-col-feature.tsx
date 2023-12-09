import React from 'react'

const ThreeColFeatureList = () => {
  return (
    <div className="container flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 gap-4 py-8 md:grid-cols-3 lg:grid-cols-3">
        <div className="flex flex-col items-start justify-start">
          <h1 className="text-lg font-medium uppercase text-primary-500">Seamless Integration</h1>
          <p className="text-left text-lg">
            Our AI agents mesh harmoniously with your existing systems, ensuring a smooth
            transition.
          </p>
        </div>

        <div className="flex flex-col items-start justify-start">
          <h1 className="text-lg font-medium uppercase text-primary-500">Smart Adaptation</h1>
          <p className="text-left text-lg">
            Dynamic learning capabilities consistently refine the AI's performance, adapting to
            changing situations with ease.
          </p>
        </div>

        <div className="flex flex-col items-start justify-start">
          <h1 className="text-lg font-medium uppercase text-primary-500">Customer Focus</h1>
          <p className="text-left text-lg">
            Delight your customers with swift, accurate, and personalized responses, powered by our
            AI solutions.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ThreeColFeatureList
