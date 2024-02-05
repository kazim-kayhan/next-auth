'use server';

import { signIn } from '@/auth';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { LoginSchema } from '@/schemas';
import { AuthError } from 'next-auth';
import { z } from 'zod';

export const login = async (data: z.infer<typeof LoginSchema>) => {
  const validatedData = LoginSchema.safeParse(data);
  if (!validatedData.success) {
    return { error: 'Invalid input data' };
  }

  const { email, password } = validatedData.data;

  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin': {
          return {
            error: 'Invalid email or password',
          };
        }
        default: {
          return {
            error: 'An error occurred while logging in. Please try again.',
          };
        }
      }
    }
    // Throw the error back otherwise it will not redirect you
    throw error;
  }
};
