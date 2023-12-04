'use client'

import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import LogoWhite from '@/data/blackorchidai-white-08.png'
import LogoBlack from '@/data/blackorchidai-08.png'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const Header = () => {
  const { theme } = useTheme()
  const [logo, setLogo] = useState(LogoWhite)

  useEffect(() => {
    setLogo(theme === 'dark' ? LogoWhite : LogoBlack)
  }, [theme])

  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex h-[30px] items-center justify-center">
            <div className="mr-3">
              {/* <Logo /> */}
              <Image src={logo} width={22} height={22} alt="BlackOrchid AI Logo" />
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden h-6 text-2xl font-semibold sm:block">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block"
            >
              {link.title}
            </Link>
          ))}
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
