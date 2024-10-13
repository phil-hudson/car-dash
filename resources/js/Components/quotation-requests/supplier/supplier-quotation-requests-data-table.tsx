import { router } from '@inertiajs/react';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowRightCircle, CheckCircle } from 'lucide-react';
import React from 'react';
import { route } from 'ziggy-js';
import { Button } from '../../ui/button';
import { DataTable } from '../../ui/data-table';

export default function SupplierQuotationRequestsDatatable() {
  const data = [
    {
      id: '1',
      created: '2022-01-01',
      originState: 'VIC',
      destinationState: 'WA',
      hasResponded: true,
    },
    {
      id: '2',
      created: '2022-01-01',
      originState: 'VIC',
      destinationState: 'WA',
      hasResponded: false,
    },
  ];

  const SupplierQuotationRequestsDatatableColumns: ColumnDef<{
    id: string;
    created: string;
    hasResponded: boolean;
  }>[] = [
    {
      header: 'Quotation Request ID',
      accessorKey: 'id',
    },
    {
      header: 'Created At',
      accessorKey: 'created',
    },
    { header: 'Origin State', accessorKey: 'originState' },
    { header: 'Destination State', accessorKey: 'destinationState' },
    {
      header: 'Responded',
      accessorKey: 'hasResponded',
      cell: ({ row }) => {
        const hasResponded = row.original.hasResponded;
        return !hasResponded ? (
          <Button
            variant="outline"
            onClick={() =>
              router.visit(route('quotation-request.respond', row.original.id))
            }
          >
            Respond
            <ArrowRightCircle className="ml-2 h-4 w-4" />
          </Button>
        ) : (
          <CheckCircle className="text-green-500 h-5 w-5" />
        );
      },
    },
    {
      id: 'actions',
      cell: ({ row }) => {
        const id = row.original.id;
        return (
          <>
            <Button
              variant="outline"
              onClick={() => router.visit(route('quotation-request.show', id))}
            >
              View
              <ArrowRightCircle className="ml-2 h-4 w-4" />
            </Button>
          </>
        );
      },
    },
  ];

  return (
    <DataTable
      columns={SupplierQuotationRequestsDatatableColumns}
      data={data}
      rowCount={data.length}
    />
  );
}
