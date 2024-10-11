import { Breadcrumbs } from '@/components/breadcrumbs';
import { ScrollArea } from '@/components/ui/scroll-area';
import ClientForm from '../client-form';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Client', link: '/dashboard/clients' },
  { title: 'Create', link: '/dashboard/clients/create' }
];

export default function ClientViewPage() {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-8">
        <Breadcrumbs items={breadcrumbItems} />
        <ClientForm />
      </div>
    </ScrollArea>
  );
}
