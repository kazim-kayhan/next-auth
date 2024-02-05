import React from 'react';
import AdminLayout from './_components/admin-layout';

export default async function layout({ children }: { children: React.ReactNode }) {
  return <AdminLayout>{children}</AdminLayout>;
}
