import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { QuotationResponseForm } from './quotation-response-form';

export function QuotationResponseFormCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Respond to a quote</CardTitle>
        <CardDescription>
          Respond to a quote to submit for approval
        </CardDescription>
      </CardHeader>
      <CardContent>
        <QuotationResponseForm />
      </CardContent>
    </Card>
  );
}
