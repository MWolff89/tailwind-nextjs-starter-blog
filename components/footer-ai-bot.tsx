import React from 'react'

import { cn } from '@/lib/utils'
import { ExternalLink } from '@/components/external-link'

export function FooterText({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    // <div className='flex flex-col gap-2'>

    <p
      className={cn('text-muted-foreground px-2 text-center text-xs leading-normal', className)}
      {...props}
    >
      {/* Learn where this can be used{" "} */}
      <ExternalLink href="https://www.blackorchidai.com/blog/elevating-customer-engagement">
        Learn why you should use this
      </ExternalLink>
    </p>
    // </div>
  )
}
