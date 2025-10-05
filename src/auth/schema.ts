import FORMS from '@/shared/config/forms.config';
import locales from '@/shared/locales';
import {getMaxLengthMessage} from '@/shared/utils/messages';
import {z} from 'zod/mini';

export const authSchema = z.object({
  email: z.email(locales.errors.fields.email.invalid).check(
    z.trim(),
    z.minLength(1, locales.errors.fields.email.required),
    z.maxLength(
      FORMS.inputMaxLength,
      getMaxLengthMessage({
        length: FORMS.inputMaxLength,
      }),
    ),
  ),

  password: z.string().check(
    z.trim(),
    z.minLength(1, locales.errors.fields.password.required),
    z.maxLength(
      FORMS.inputMaxLength,
      getMaxLengthMessage({
        length: FORMS.inputMaxLength,
      }),
    ),
  ),
});

export type AuthFormData = z.infer<typeof authSchema>;
