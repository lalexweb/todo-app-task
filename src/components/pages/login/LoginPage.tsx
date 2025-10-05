import LoginForm from '@/components/pages/login/LoginForm';
import locales from '@/shared/locales';

export default function LoginPage() {
  return (
    <div className="container">
      <div className="flex flex-col gap-4 max-w-md self-center mx-auto">
        <div className="text-center flex flex-col">
          <h1 className="font-bold text-2xl md:text-3xl mb-2">{locales.pages.login.title}</h1>

          <p className="text-muted-foreground text-sm md:text-base">{locales.pages.login.description}</p>
        </div>

        <LoginForm />
      </div>
    </div>
  );
}
