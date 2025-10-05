const locales = {
  common: {
    login: 'Login',
    logout: 'Logout',
  },

  layout: {
    footer: {
      description: 'Simple and effective task management',
    },
  },

  pages: {
    main: {
      title: 'Todo App',
      description1: 'Simple and effective task management',
      description2: 'Add, edit and track your tasks with ease.',
      button: 'Get Started',
      terms: 'Terms of Service',
      featuresTitle: 'Features',
      faqTitle: 'Frequently Asked Questions',
    },

    login: {
      title: 'Login',
      description: 'Login to your account',
      fields: {
        email: {
          label: 'Email',
          placeholder: 'Enter your email',
        },
        password: {
          label: 'Password',
          placeholder: 'Enter your password',
        },
      },
    },

    terms: {
      title: 'Terms of Service',
    },

    app: {
      title: 'My Tasks',
      addTask: 'Add Task',
      noTasks: 'No tasks yet. Add your first task above!',
      fields: {
        title: {
          label: 'Title',
          placeholder: 'Enter your task',
        },
        description: {
          label: 'Description',
          placeholder: 'Add a description (optional)',
        },
      },
    },

    notFound: {
      title: 'Page not found',
      description: 'The page you are looking for does not exist.',
      button: 'Go to home',
    },
  },

  errors: {
    field_max_length: 'Field max length',
    field_characters: 'characters',

    fields: {
      title: {
        required: 'Title is required',
      },
      email: {
        required: 'Email is required',
        invalid: 'Please enter a valid email address',
      },
      password: {
        required: 'Password is required',
      },
    },

    auth: {
      logError: 'Login error:',
      invalidCredentials: 'Invalid email or password',
      unexpectedError: 'An error occurred during login',
    },

    tasks: {
      deleteError: 'An error occurred while deleting the task',
      toggleError: 'An error occurred while toggling the task',
      addError: 'An error occurred while adding the task',
      addLogError: 'Task add error:',
    },
  },
};

export default locales;
