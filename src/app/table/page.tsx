'use client';
import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';

const invoices = [
  {
    invoice: 'INV001',
    paymentStatus: 'Paid',
    totalAmount: '$250.00',
    paymentMethod: 'Credit Card'
  },
  {
    invoice: 'INV002',
    paymentStatus: 'Pending',
    totalAmount: '$150.00',
    paymentMethod: 'PayPal'
  },
  {
    invoice: 'INV003',
    paymentStatus: 'Unpaid',
    totalAmount: '$350.00',
    paymentMethod: 'Bank Transfer'
  },
  {
    invoice: 'INV004',
    paymentStatus: 'Paid',
    totalAmount: '$450.00',
    paymentMethod: 'Credit Card'
  },
  {
    invoice: 'INV005',
    paymentStatus: 'Paid',
    totalAmount: '$550.00',
    paymentMethod: 'PayPal'
  },
  {
    invoice: 'INV006',
    paymentStatus: 'Pending',
    totalAmount: '$200.00',
    paymentMethod: 'Bank Transfer'
  },
  {
    invoice: 'INV007',
    paymentStatus: 'Unpaid',
    totalAmount: '$300.00',
    paymentMethod: 'Credit Card'
  },
  {
    invoice: 'INV008',
    paymentStatus: 'Paid',
    totalAmount: '$550.00',
    paymentMethod: 'PayPal'
  },
  {
    invoice: 'INV009',
    paymentStatus: 'Pending',
    totalAmount: '$200.00',
    paymentMethod: 'Bank Transfer'
  },
  {
    invoice: 'INV010',
    paymentStatus: 'Unpaid',
    totalAmount: '$300.00',
    paymentMethod: 'Credit Card'
  }
];

export default function TableDemo() {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const pageSize = 9; // number of items per page

  // Filter invoices based on the search query
  const filteredInvoices = invoices.filter((invoice) =>
    invoice.invoice.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate pagination values
  const totalPages = Math.ceil(filteredInvoices.length / pageSize);
  const paginatedInvoices = filteredInvoices.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  return (
    <div className='mx-auto mt-8 w-[110rem] overflow-hidden rounded-xl bg-white p-6 shadow-lg'>
      {/* Header */}
      <div className='mb-8 text-center'>
        <h1 className='text-4xl font-bold text-gray-800'>Invoice Overview</h1>
        <p className='mt-2 text-gray-500'>Manage your invoices with ease</p>
      </div>

      {/* Search and Filters */}
      <div className='mb-6 flex flex-col items-center gap-4 sm:flex-row'>
        <input
          type='text'
          className='flex-1 rounded-lg border border-gray-300 p-3 transition focus:outline-none focus:ring-2 focus:ring-blue-500'
          placeholder='Search by invoice...'
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setPage(1);
          }}
        />
        {/* Future filters can be added here */}
      </div>

      {/* Table */}
      <Table className='w-full border-collapse'>
        <TableCaption className='mt-2 text-sm text-gray-500'>
          A list of your recent invoices. Hover on rows for details.
        </TableCaption>
        {/* Header with top corners rounded */}
        <TableHeader className='rounded-tl-xl rounded-tr-xl bg-black text-white'>
          <TableRow>
            <TableHead className='w-[120px] px-4 py-3 text-left text-white'>
              Invoice
            </TableHead>
            <TableHead className='px-4 py-3 text-left text-white'>
              Status
            </TableHead>
            <TableHead className='px-4 py-3 text-left text-white'>
              Method
            </TableHead>
            <TableHead className='px-4 py-3 text-right text-white'>
              Amount
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedInvoices.map((invoice) => (
            <TableRow
              key={invoice.invoice}
              className='transition-colors duration-150 hover:bg-gray-50'
            >
              <TableCell className='px-4 py-3 font-medium text-gray-700'>
                {invoice.invoice}
              </TableCell>
              <TableCell className='px-4 py-3'>
                {invoice.paymentStatus}
              </TableCell>
              <TableCell className='px-4 py-3'>
                {invoice.paymentMethod}
              </TableCell>
              <TableCell className='px-4 py-3 text-right'>
                {invoice.totalAmount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* Footer with bottom corners rounded */}
        <TableFooter className='rounded-bl-xl rounded-br-xl bg-black text-white'>
          <TableRow>
            <TableCell colSpan={3} className='px-4 py-3 font-semibold'>
              Total
            </TableCell>
            <TableCell className='px-4 py-3 text-right font-semibold'>
              {filteredInvoices
                .reduce((sum, inv) => {
                  const amount = parseFloat(
                    inv.totalAmount.replace(/[$,]/g, '')
                  );
                  return sum + amount;
                }, 0)
                .toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD'
                })}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>

      {/* Pagination */}
      <div className='mt-6 flex items-center justify-end gap-4'>
        <button
          className='transform rounded-lg bg-black px-4 py-2 text-white transition-all duration-300 hover:scale-105 hover:shadow-xl'
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          Prev
        </button>
        <span className='text-sm text-gray-700'>
          Page <strong>{page}</strong> of <strong>{totalPages}</strong>
        </span>
        <button
          className='transform rounded-lg bg-black px-4 py-2 text-white transition-all duration-300 hover:scale-105 hover:shadow-xl'
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
