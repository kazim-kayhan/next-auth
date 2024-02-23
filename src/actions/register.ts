'use server'

import { getUserByEmail } from '@/data/user'
import { prisma } from '@/lib/db'
import { generateVerificationToken } from '@/lib/tokens'
import { RegisterSchema } from '@/schemas'
import bcrypt from 'bcryptjs'
import { z } from 'zod'
import { sendVerificationEmail } from './../lib/email'

export const register = async (data: z.infer<typeof RegisterSchema>) => {
  const validatedData = RegisterSchema.safeParse(data)
  if (!validatedData.success) {
    return { error: 'Invalid input data' }
  }

  const { email, password, name } = validatedData.data
  const hashedPassword = await bcrypt.hash(password, +process.env.ENCRYPTION_SAULT!)
  const existingUser = await getUserByEmail(email)
  if (existingUser) {
    return { error: 'User already exists' }
  }
  await prisma.user.create({ data: { email, password: hashedPassword, name } })

  const verificationToken = await generateVerificationToken(email)
  console.log('🚀 ~ register ~ verificationToken:', verificationToken)

  await sendVerificationEmail(
    verificationToken.email,
    verificationToken.token
  )
  return { success: 'Confirmation email sent!' }
}
