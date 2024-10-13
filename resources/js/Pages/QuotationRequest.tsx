import AppLayout from '@/layouts/AppLayout';
import React from 'react';

export default function QuotationRequest() {
  return (
    <AppLayout
      title="Quotation Request"
      renderHeader={() => (
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Quotation Request
        </h2>
      )}
    >
      <p>Quotation request</p>
    </AppLayout>
  );
}
