import { Breadcrumbs } from '@/components/breadcrumbs';
import { ScrollArea } from '@/components/ui/scroll-area';
import React from 'react';
import ProductForm from '../product-form';
import PageContainer from '@/components/layout/page-container';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Product', link: '/dashboard/products' },
  { title: 'Create', link: '/dashboard/products/create' }
];

export default function ProductViewPage() {
  return (
    <PageContainer scrollable={true}>
      <ScrollArea className="h-full">
        <div className="flex-1 space-y-4 p-8">
          <Breadcrumbs items={breadcrumbItems} />
          <ProductForm />
        </div>
      </ScrollArea>
    </PageContainer>
  );
}
