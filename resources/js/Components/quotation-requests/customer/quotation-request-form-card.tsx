import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../ui/card';
import { QuotationRequestForm } from './quotation-request-form';

export function QuotationRequestFormCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Request a quote</CardTitle>
        <CardDescription>Get started now by requesting a quote</CardDescription>
      </CardHeader>
      <CardContent>
        <QuotationRequestForm />
      </CardContent>
    </Card>
  );
}
