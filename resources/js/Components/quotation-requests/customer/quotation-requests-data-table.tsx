import { router } from '@inertiajs/react';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowRightCircle } from 'lucide-react';
import React from 'react';
import { route } from 'ziggy-js';
import { Button } from '../../ui/button';
import { DataTable } from '../../ui/data-table';

export default function QuotationRequestsDatatable() {
  const data = [
    {
      id: '1',
      responses: 4,
    },
    {
      id: '2',
      responses: 2,
    },
  ];

  const QuotationRequestsDatatableColumns: ColumnDef<{
    id: string;
    responses: number;
  }>[] = [
    {
      header: 'Quotation Request ID',
      accessorKey: 'id',
    },
    {
      header: 'Responses',
      accessorKey: 'responses',
    },
    {
      id: 'actions',
      cell: ({ row }) => {
        const id = row.original.id;
        return (
          <Button
            variant="outline"
            onClick={() => router.visit(route('quotation-request.show', id))}
          >
            View
            <ArrowRightCircle className="ml-2 h-4 w-4" />
          </Button>
        );
      },
    },
  ];

  return (
    <DataTable
      columns={QuotationRequestsDatatableColumns}
      data={data}
      rowCount={data.length}
    />
  );
}
