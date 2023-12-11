import PricingInfoWrapper from '@/components/pricing-info-wrapper'

export default function PricingPage() {
  return (
    <div className="bg-background pb-8 sm:pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-500">Subscription</h2>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
            Pricing Plans
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-500 dark:text-gray-400">
            We offer a variety of pricing plans to suit your needs. Choose the plan that is right
            for you.
          </p>
        </div>
        <div className="mt-8">
          <PricingInfoWrapper />
        </div>
      </div>
    </div>
  )
}
