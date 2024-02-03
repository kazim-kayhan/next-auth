'use server';

import { RegisterSchema } from '@/app/schemas';
import { getUserByEmail } from '@/data/user';
import { prisma } from '@/lib/db';
import bcrypt from 'bcryptjs';
import { z } from 'zod';

export const register = async (data: z.infer<typeof RegisterSchema>) => {
  const validatedData = RegisterSchema.safeParse(data);
  if (!validatedData.success) {
    return { error: 'Invalid input data' };
  }

  const { email, password, name } = validatedData.data;
  const hashedPassword = await bcrypt.hash(password, 10);
  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return { error: 'User already exists' };
  }
  await prisma.user.create({ data: { email, password: hashedPassword, name } });

  // Send email verification token to user
  return { success: 'Registration was successful' };
};
