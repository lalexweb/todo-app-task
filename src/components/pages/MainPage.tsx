import CLink from '@/components/CLink';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/Accordion';
import {Button} from '@/components/ui/Button';
import PAGES from '@/shared/config/pages.config';
import locales from '@/shared/locales';
import {Check, Moon, Smartphone} from 'lucide-react';

const features = [
  {
    title: 'Quick Creation',
    description: 'Create tasks with one click',
    icon: <Check className="aspect-square flex-shrink-0 size-6" />,
  },
  {
    title: 'Responsive Design',
    description: 'Works on all devices',
    icon: <Smartphone className="aspect-square flex-shrink-0 size-6" />,
  },
  {
    title: 'Dark Theme',
    description: 'Comfortable work at any time',
    icon: <Moon className="aspect-square flex-shrink-0 size-6" />,
  },
];

const faq = [
  {
    question: 'How to create a new task?',
    answer: 'Click the "Add Task" button or use the input field at the top of the list.',
  },
  {
    question: 'How to mark a task as completed?',
    answer: 'Click the checkbox to the left of the task. Completed tasks will be marked with strikethrough text.',
  },
  {
    question: 'Can I edit tasks?',
    answer: 'Yes, you can edit any task by clicking on it. Changes are saved automatically.',
  },
  {
    question: 'Does the app work offline?',
    answer: 'Yes, the app works in offline mode. Your tasks are saved locally in the browser.',
  },
  {
    question: 'How to change the app theme?',
    answer: 'Use the theme toggle button in the top right corner. Light and dark themes are available.',
  },
];

export default function MainPage() {
  return (
    <div className="flex flex-col gap-10">
      <section className="text-center py-12 container flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <h1 className={'font-bold text-3xl md:text-4xl'}>{locales.pages.main.title}</h1>

          <p className="text-muted-foreground text-base md:text-xl">
            {locales.pages.main.description1}
            <br />
            {locales.pages.main.description2}
          </p>
        </div>

        <div className="flex gap-4 justify-center">
          <Button
            as={CLink}
            href={PAGES.app}
            size="lg"
          >
            {locales.pages.main.button}
          </Button>

          <Button
            size="lg"
            variant="outline"
            as={CLink}
            href={PAGES.terms}
          >
            {locales.pages.main.terms}
          </Button>
        </div>
      </section>

      <section className="container flex flex-col gap-4">
        <h2 className="font-bold text-center text-xl md:text-2xl">{locales.pages.main.featuresTitle}</h2>

        <div className="grid md:grid-cols-3 gap-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2 text-center"
            >
              <div className="size-12 bg-primary/10 rounded-lg flex items-center justify-center">{feature.icon}</div>

              <div className="flex flex-col">
                <h3 className="font-semibold">{feature.title}</h3>

                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container flex flex-col gap-4">
        <h2 className="font-bold text-center text-xl md:text-2xl">{locales.pages.main.faqTitle}</h2>

        <Accordion
          type="single"
          collapsible
          className="w-full"
        >
          {faq.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
            >
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
}
