import { ColumnDef } from '@tanstack/react-table';
import React from 'react';
import { DataTable } from '../ui/data-table';

export default function QuotationRequestsDatatable() {
  const data = [
    {
      id: 'test 1',
      responses: 4,
    },
    {
      id: 'test 2',
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
  ];

  return (
    <DataTable
      columns={QuotationRequestsDatatableColumns}
      data={data}
      rowCount={data.length}
    />
  );
}
