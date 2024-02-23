import React from 'react'
import AdminLayout from './_components/admin-layout'
import SignOutButton from './_components/sign-out-button'

export default async function layout ({ children }: { children: React.ReactNode }) {
  return <AdminLayout signOutButton={<SignOutButton />}>{children}</AdminLayout>
}
