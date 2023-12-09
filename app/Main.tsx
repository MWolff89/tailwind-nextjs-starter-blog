'use client'

import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import Script from 'next/script'
import Image from '@/components/Image'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import PricingInfoWrapper from '@/components/pricing-info-wrapper'
import FeaturesShowcase from '@/components/features-showcase'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  const { theme, resolvedTheme } = useTheme()
  const [chatTheme, setChatTheme] = useState(theme === 'dark' ? 'dark' : 'light')

  useEffect(() => {
    setChatTheme(theme === 'dark' ? 'dark' : 'light')
  }, [theme, resolvedTheme])

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Don't miss the AI revolution.
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
          <p className="text-lg font-semibold leading-7 text-gray-500 dark:text-gray-400">
            Stay ahead of the curve.
          </p>
        </div>
        <FeaturesShowcase />
        <div className="container flex flex-col items-center justify-center">
          <div className="grid grid-cols-1 gap-4 py-8 md:grid-cols-3 lg:grid-cols-3">
            <div className="flex flex-col items-start justify-start">
              <h1 className="text-lg font-medium uppercase text-primary-500">
                Seamless Integration
              </h1>
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
                Delight your customers with swift, accurate, and personalized responses, powered by
                our AI solutions.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h2 className="font-italic text-xl leading-7 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-8 md:text-4xl md:leading-12">
            McKinsey estimates that generative AI could increase productivity in customer care by up
            to 45%. And Louder Co.’s customers are already feeling the impact – one client went from
            $10 million to close to $20 million in annual revenues without adding a single person to
            their staff.
          </h2>
          {/* <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
          <p className="text-lg font-semibold leading-7 text-gray-500 dark:text-gray-400">
            Stay ahead of the curve.
          </p> */}
        </div>
        <div>
          <div className="container flex items-center justify-center py-8">
            {/* | */}
            <PricingInfoWrapper />
          </div>
          <div className="flex items-center justify-center">
            <div className="items-start space-y-2 py-8 xl:grid xl:grid-cols-2 xl:gap-x-8 xl:space-y-0">
              <div className="flex max-w-[550px] flex-col items-center space-x-2">
                <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">
                  Be Part of the Pioneers
                </h3>
                <div className="text-center text-gray-500 dark:text-gray-400">
                  An AI readiness assessment can help identify pain points and quick-win
                  opportunities for adoption while determining the optimal degree of AI
                  implementation. Book a consultation and experience the difference yourself.
                </div>
              </div>
              <div className="flex h-full max-w-[550px] items-center justify-center gap-4 xl:flex-col">
                <Button
                  type="submit"
                  className={`flex w-full items-center justify-center ${
                    chatTheme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'
                  }`}
                >
                  Book Now
                </Button>
                <Button
                  type="submit"
                  className={`flex w-full items-center justify-center ${
                    chatTheme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'
                  }`}
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>

        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
