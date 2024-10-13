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
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg">
            <p>Request a quote</p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
