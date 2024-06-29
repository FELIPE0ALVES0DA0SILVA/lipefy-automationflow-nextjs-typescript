'use client'

import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { EditUserProfileSchema } from '@/lib/types';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Loader2 } from 'lucide-react';

type Props = {};

const ProfileForm = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof EditUserProfileSchema>>({
    mode: 'onChange',
    resolver: zodResolver(EditUserProfileSchema),
    defaultValues: {
      name: '',
      email: '',
    },
  });

  return (
    <FormProvider {...form}>
      <form
        className='flex flex-col gap-6'
        onSubmit={form.handleSubmit((data) => {
          // handle form submission
        })}
      >
        <FormField
          disabled={isLoading}
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-lg'>User Full Name</FormLabel>
              <FormControl>
                <Input placeholder='Name' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          disabled={true}
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-lg'>User Email</FormLabel>
              <FormControl>
                <Input placeholder='Email' type='email' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
            type='submit'
            className='self-start font-bold hover:bg-[#2F006B] hover:text-white'>
                {isLoading ? (
                    <>
                        <Loader2 className='mr-2 h-4 w-4 animate-spin'/>
                        Saving
                    </>
                    
                ) : (
                    'Save User Settings'
                )}
            </Button>

      </form>
    </FormProvider>
  );
};

export default ProfileForm;
