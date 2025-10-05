import FORMS from '@/shared/config/forms.config';
import locales from '@/shared/locales';
import {getMaxLengthMessage} from '@/shared/utils/messages';
import {z} from 'zod/mini';

export const taskSchema = z.object({
  title: z.string().check(
    z.trim(),
    z.minLength(1, locales.errors.fields.title.required),
    z.maxLength(
      FORMS.inputMaxLength,
      getMaxLengthMessage({
        length: FORMS.inputMaxLength,
      }),
    ),
  ),

  description: z.optional(
    z.string().check(
      z.trim(),
      z.maxLength(
        FORMS.inputMaxLength,
        getMaxLengthMessage({
          length: FORMS.textareaMaxLength,
        }),
      ),
    ),
  ),
});

export type TaskFormData = z.infer<typeof taskSchema>;
