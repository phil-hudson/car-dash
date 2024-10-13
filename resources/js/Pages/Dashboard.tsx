import QuotationRequestsTablecard from '@/components/quotation-requests/quotation-requests-tablecard';
import AppLayout from '@/layouts/AppLayout';
import React from 'react';

export default function Dashboard() {
  return (
    <AppLayout
      title="Dashboard"
      renderHeader={() => (
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Dashboard
        </h2>
      )}
    >
      <QuotationRequestsTablecard />
    </AppLayout>
  );
}
