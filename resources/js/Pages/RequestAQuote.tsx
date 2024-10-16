import { QuotationRequestFormCard } from '@/components/quotation-requests/customer/quotation-request-form-card';
import AppLayout from '@/layouts/AppLayout';
import React from 'react';

export default function Dashboard() {
  return (
    <AppLayout
      title="Request A Quote"
      renderHeader={() => (
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Request A Quote
        </h2>
      )}
    >
      <QuotationRequestFormCard />
    </AppLayout>
  );
}
