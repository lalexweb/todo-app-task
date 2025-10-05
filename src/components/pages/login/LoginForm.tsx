'use client';

import {AuthFormData, authSchema} from '@/auth/schema';
import {login} from '@/components/pages/login/actions';
import {Button} from '@/components/ui/Button';
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/Form';
import {Input} from '@/components/ui/Input';
import locales from '@/shared/locales';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

export default function LoginForm() {
  const methods = useForm<AuthFormData>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: AuthFormData) => {
    try {
      const data: AuthFormData = {
        email: values.email,
        password: values.password,
      };

      const response = await login(data);

      if (!response?.success) {
        return methods.setError('root', {
          message: response?.message || locales.errors.auth.unexpectedError,
        });
      }

      return (window.location.href = response.redirectUrl);
    } catch (error) {
      console.error(locales.errors.auth.logError, error);

      return methods.setError('root', {
        message: locales.errors.auth.unexpectedError,
      });
    }
  };

  return (
    <Form {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 max-w-4xl"
      >
        <FormField
          control={methods.control}
          name="email"
          render={({field}) => (
            <FormItem>
              <FormLabel>{locales.pages.login.fields.email.label}</FormLabel>

              <FormControl>
                <Input
                  type="email"
                  placeholder={locales.pages.login.fields.email.placeholder}
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={methods.control}
          name="password"
          render={({field}) => (
            <FormItem>
              <FormLabel>{locales.pages.login.fields.password.label}</FormLabel>

              <FormControl>
                <Input
                  type="password"
                  placeholder={locales.pages.login.fields.password.placeholder}
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        {!!methods.formState.errors.root?.message && <div className="p-3 text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-md">{methods.formState.errors.root.message}</div>}

        <Button
          type="submit"
          className="w-full"
          loading={methods.formState.isSubmitting}
        >
          {locales.common.login}
        </Button>
      </form>
    </Form>
  );
}
