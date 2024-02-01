'use server';

import { RegisterSchema } from '@/app/schemas';
import { z } from 'zod';

export const register = async (data: z.infer<typeof RegisterSchema>) => {
  const validatedData = RegisterSchema.safeParse(data);
  if (!validatedData.success) {
    return { error: 'Invalid input data' };
  }
  return { success: 'Registration successful' };
}
