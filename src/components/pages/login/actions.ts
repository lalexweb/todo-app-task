'use server';

import {AuthFormData, authSchema} from '@/auth/schema';
import {signIn} from '@/auth/setup';
import PAGES from '@/shared/config/pages.config';
import locales from '@/shared/locales';
import {AuthError} from 'next-auth';

export async function login(values: AuthFormData) {
  try {
    const validatedData = authSchema.safeParse(values);

    if (!validatedData.success) {
      return {
        success: false,
        errors: validatedData.error.issues,
      };
    }

    const response = await signIn('credentials', {
      email: validatedData.data.email,
      password: validatedData.data.password,
      redirectTo: PAGES.app,
      redirect: false,
    });

    if (response?.error) {
      return {
        success: false,
        message: locales.errors.auth.invalidCredentials,
      };
    }

    return {
      success: true,
      redirectUrl: response,
    };
  } catch (error) {
    console.error(locales.errors.auth.logError, error);

    if (error instanceof AuthError) {
      return {
        success: false,
        message: locales.errors.auth.invalidCredentials,
      };
    }

    return {
      success: false,
      message: locales.errors.auth.unexpectedError,
    };
  }
}
