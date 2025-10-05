'use server';

import {TaskFormData, taskSchema} from '@/components/pages/app/schema';
import TasksService from '@/services/tasks.service';
import locales from '@/shared/locales';

export async function addTask(userId: string, values: TaskFormData) {
  try {
    const validatedData = taskSchema.safeParse(values);

    if (!validatedData.success) {
      return {
        success: false,
        errors: validatedData.error.issues,
      };
    }

    const response = await TasksService.addTask({
      userId,
      task: validatedData.data,
    });

    if (response?.error) {
      console.error(locales.errors.tasks.addLogError, response.error);

      return {
        success: false,
        message: locales.errors.tasks.addError,
      };
    }

    return {
      success: true,
    };
  } catch (error) {
    console.error(locales.errors.tasks.addLogError, error);

    return {
      success: false,
      message: locales.errors.tasks.addError,
    };
  }
}
