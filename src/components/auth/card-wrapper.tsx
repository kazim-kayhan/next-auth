'use client'

import Header from '@/components/auth/header'
import SocialButtons from '@/components/auth/social-buttons'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import BackButton from './back-button'
import React from 'react'

type Props = {
  children: React.ReactNode
  headerLabel: string
  backButtonLabel: string
  backButtonHref: string
  showSocialButtons?: boolean
}

const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocialButtons
}: Props) => {
  return (
    <Card className='w-full max-w-md bg-card shadow-md'>
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocialButtons && (
        <CardFooter>
          <SocialButtons />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  )
}

export default CardWrapper
