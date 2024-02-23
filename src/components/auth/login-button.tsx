'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {
  children: React.ReactNode
  mode?: 'modal' | 'redirect'
  asChild?: boolean
}

const LoginButton = ({ children, mode = 'redirect', asChild }: Props) => {
  const router = useRouter()
  if (mode === 'modal') {
    return <span>Implement the modal case</span>
  }

  const onClick = () => {
    router.push('/auth/login')
  }
  return <span onClick={onClick}>{children}</span>
}

export default LoginButton
