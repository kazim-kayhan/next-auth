'use server';

import { LoginSchema } from '@/app/schemas';
import { z } from 'zod';

export const login =async (data: z.infer<typeof LoginSchema>) => {
  const validatedData = LoginSchema.safeParse(data);
  if (!validatedData.success) {
    return { error: 'Invalid input data' };
  }
  return { success: 'Login successful' };
};
