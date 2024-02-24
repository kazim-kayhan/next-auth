'use client';

import { LoginSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSearchParams } from 'next/navigation';
import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { login } from '../../actions/login';
import AlertError from '../alert-error';
import AlertSuccess from '../alert-success';
import { Button } from '../ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import CardWrapper from './card-wrapper';

type Props = {};

const LoginForm = (props: Props) => {
  const searchParams = useSearchParams();
  const errorParam = searchParams.get('error');
  const errorFromUrl =
    errorParam === 'OAuthAccountNotLinked' ? 'Email already in use with another provider' : '';
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: z.infer<typeof LoginSchema>) => {
    setError('');
    setSuccess('');
    startTransition(() => {
      login(data)
        .then((res) => {
          if (res?.error) {
            setError(res.error);
          } else {
            setSuccess(res?.success);
          }
        })
        .catch((error) => {
          console.log('🚀 ~ startTransition ~ error:', error);
          setError('An error occurred while logging in. Please try again.');
        });
    });
  };
  return (
    <CardWrapper
      headerLabel='Welcome Back'
      backButtonLabel="Don't have an account?"
      backButtonHref='/auth/register'
      showSocialButtons
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
          <div className='space-y-4'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder='example@email.com'
                      type='email'
                      autoComplete='email'
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='123456' type='password' disabled={isPending} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <AlertError message={error || errorFromUrl} />
          <AlertSuccess message={success} />
          <Button type='submit' className='w-full' disabled={isPending}>
            Login
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default LoginForm;
