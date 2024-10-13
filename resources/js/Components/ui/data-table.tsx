'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  ColumnDef,
  SortingState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import React, { useState } from 'react';
import { DataTableSkeleton } from './data-table-skeleton';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  rowCount: number;
  //   initialState: {
  //     pagination: {
  //       pageIndex: number;
  //     };
  //   };
  //   handlePageChange: (page: number) => void;
  isLoading?: boolean;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  rowCount,
  isLoading = false,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  //   const [internalPage, setInternalPage] = useState(
  //     initialState.pagination.pageIndex,
  //   );

  //   useEffect(() => {
  //     if (internalPage !== initialState.pagination.pageIndex) {
  //       setInternalPage(initialState.pagination.pageIndex);
  //     }
  //   }, [initialState.pagination.pageIndex]);

  //   const handleInternalPageChange = (page: number) => {
  //     setInternalPage(page);
  //     handlePageChange(page);
  //   };

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    rowCount: rowCount,
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
      //   pagination: {
      //     pageIndex: internalPage,
      //     pageSize: 10,
      //   },
    },
  });

  if (isLoading) {
    return (
      <DataTableSkeleton
        columnCount={columns.length}
        rowCount={rowCount ?? 5}
      />
    );
  }

  return (
    <div className="rounded-md border p-4">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map(headerGroup => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map(row => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && 'selected'}
              >
                {row.getVisibleCells().map(cell => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      {/* <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredRowModel().rows.length} row(s) of {rowCount} total
        </div>
        <div className="flex justify-end">
          <Paginator
            currentPage={table.getState().pagination.pageIndex}
            totalPages={table.getPageCount()}
            onPageChange={handleInternalPageChange}
            showPreviousNext
          />
        </div>
      </div> */}
    </div>
  );
}
