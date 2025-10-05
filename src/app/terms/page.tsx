import TermsPage from '@/components/pages/TermsPage';
import PagesService from '@/services/pages.service';
import {notFound} from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function page() {
  const data = await PagesService.getLatestTosPage();

  if (!data?.data?.[0]?.id) {
    return notFound();
  }

  return <TermsPage data={data?.data[0]} />;
}
