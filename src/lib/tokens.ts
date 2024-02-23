import { getVerificationTokenByEmail } from '@/data/verification-token'
import { v4 as uuid } from 'uuid'

import { prisma } from '@/lib/db'

export const generateVerificationToken = async (email: string) => {
  const token = uuid()
  const expires = new Date(new Date().getTime() + 1 * 60 * 60 * 1000)
  const existingToken = await getVerificationTokenByEmail(email)
  if (existingToken) {
    return await prisma.verificationToken.delete({
      where: { id: existingToken.id }
    })
  } else {
    return await prisma.verificationToken.create({
      data: { email, token, expires }
    })
  }
}
