import { Breadcrumbs } from '@/components/breadcrumbs';
import { ScrollArea } from '@/components/ui/scroll-area';
import React from 'react';
//import OrderForm from '../order-form'; '../order-form';
import PageContainer from '@/components/layout/page-container';
import OrderForm from '../order-form';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Order', link: '/dashboard/orders' },
  { title: 'Create', link: '/dashboard/orders/create' }
];

export default function ProductViewPage() {
  return (
    <PageContainer scrollable={true}>
      <ScrollArea className="h-full">
        <div className="flex-1 space-y-4 p-8">
          <Breadcrumbs items={breadcrumbItems} />
          <OrderForm />
        </div>
      </ScrollArea>
    </PageContainer>
  );
}
