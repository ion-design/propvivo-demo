"use client";
// Generated with Ion on 3/3/2024, 3:12:49 PM
// Figma Link: https://www.figma.com/file/p6G5Vjga6BJjcBx86TKgNP?node-id=5110:43440
import { MouseEvent } from "react";
import Button from "@/components/ion/Button";

function QuickActionOverlay() {
   function customerClickHandler(e: MouseEvent<HTMLButtonElement>) {
      alert("customerClickHandler fired");
   }
   function arInvoiceClickHandler(e: MouseEvent<HTMLButtonElement>) {
      alert("arInvoiceClickHandler fired");
   }
   function paymentClickHandler(e: MouseEvent<HTMLButtonElement>) {
      alert("paymentClickHandler fired");
   }
   function paymentPlanClickHandler(e: MouseEvent<HTMLButtonElement>) {
      alert("paymentPlanClickHandler fired");
   }
   function vendorClickHandler(e: MouseEvent<HTMLButtonElement>) {
      alert("vendorClickHandler fired");
   }
   function budgetClickHandler(e: MouseEvent<HTMLButtonElement>) {
      alert("budgetClickHandler fired");
   }
   function journalEntryClickHandler(e: MouseEvent<HTMLButtonElement>) {
      alert("journalEntryClickHandler fired");
   }
   function bankClickHandler(e: MouseEvent<HTMLButtonElement>) {
      alert("bankClickHandler fired");
   }
   function apInvoiceClickHandler(e: MouseEvent<HTMLButtonElement>) {
      alert("apInvoiceClickHandler fired");
   }
   function balanceSheetClickHandler(e: MouseEvent<HTMLButtonElement>) {
      alert("balanceSheetClickHandler fired");
   }
   function incomeSheetClickHandler(e: MouseEvent<HTMLButtonElement>) {
      alert("incomeSheetClickHandler fired");
   }
   function delinquencyReportClickHandler(e: MouseEvent<HTMLButtonElement>) {
      alert("delinquencyReportClickHandler fired");
   }
   function bankStatementClickHandler(e: MouseEvent<HTMLButtonElement>) {
      alert("bankStatementClickHandler fired");
   }
   function generalLedgerClickHandler(e: MouseEvent<HTMLButtonElement>) {
      alert("generalLedgerClickHandler fired");
   }
   function serviceRequestClickHandler(e: MouseEvent<HTMLButtonElement>) {
      alert("serviceRequestClickHandler fired");
   }
   function boardTaskClickHandler(e: MouseEvent<HTMLButtonElement>) {
      alert("boardTaskClickHandler fired");
   }
   function violationClickHandler(e: MouseEvent<HTMLButtonElement>) {
      alert("violationClickHandler fired");
   }
   function tasksClickHandler(e: MouseEvent<HTMLButtonElement>) {
      alert("tasksClickHandler fired");
   }
   return (
      <div className="bg-weak grid grid-cols-4 items-start px-10 py-8 rounded-radius h-fit w-full gap-8">
         <div className="w-fit flex-col flex gap-5">
            <div className="text-lg font-semibold text-black">Create</div>
            <div className="flex flex-col items-start gap-2">
               <Button
                  size="sm"
                  color="secondary"
                  onClick={customerClickHandler}
                  emphasis="link"
                  className="no-underline"
               >
                  Customer
               </Button>
               <Button
                  size="sm"
                  color="secondary"
                  onClick={arInvoiceClickHandler}
                  emphasis="link"
                  className="no-underline"
               >
                  AR Invoice
               </Button>
               <Button
                  size="sm"
                  color="secondary"
                  onClick={paymentClickHandler}
                  emphasis="link"
                  className="no-underline"
               >
                  Payment
               </Button>
               <Button
                  size="sm"
                  color="secondary"
                  onClick={paymentPlanClickHandler}
                  emphasis="link"
                  className="no-underline"
               >
                  Payment Plan
               </Button>
               <Button
                  size="sm"
                  color="secondary"
                  onClick={vendorClickHandler}
                  emphasis="link"
                  className="no-underline"
               >
                  Vendor
               </Button>
               <Button
                  size="sm"
                  color="secondary"
                  onClick={budgetClickHandler}
                  emphasis="link"
                  className="no-underline"
               >
                  Budget
               </Button>
               <Button
                  size="sm"
                  color="secondary"
                  onClick={journalEntryClickHandler}
                  emphasis="link"
                  className="no-underline"
               >
                  Journal Entry
               </Button>
               <Button
                  size="sm"
                  color="secondary"
                  onClick={bankClickHandler}
                  emphasis="link"
                  className="no-underline"
               >
                  Bank
               </Button>
            </div>
         </div>
         <div className="w-fit flex-col flex gap-5">
            <div className="text-lg font-semibold text-black">View</div>
            <div className="flex flex-col items-start gap-2">
               <Button
                  size="sm"
                  color="secondary"
                  onClick={customerClickHandler}
                  emphasis="link"
                  className="no-underline"
               >
                  Customer
               </Button>
               <Button
                  size="sm"
                  color="secondary"
                  onClick={arInvoiceClickHandler}
                  emphasis="link"
                  className="no-underline"
               >
                  AR Invoice
               </Button>
               <Button
                  size="sm"
                  color="secondary"
                  onClick={paymentClickHandler}
                  emphasis="link"
                  className="no-underline"
               >
                  Payment
               </Button>
               <Button
                  size="sm"
                  color="secondary"
                  onClick={paymentPlanClickHandler}
                  emphasis="link"
                  className="no-underline"
               >
                  Payment Plan
               </Button>
               <Button
                  size="sm"
                  color="secondary"
                  onClick={vendorClickHandler}
                  emphasis="link"
                  className="no-underline"
               >
                  Vendor
               </Button>
               <Button
                  size="sm"
                  color="secondary"
                  onClick={apInvoiceClickHandler}
                  emphasis="link"
                  className="no-underline"
               >
                  AP invoice
               </Button>
               <Button
                  size="sm"
                  color="secondary"
                  onClick={budgetClickHandler}
                  emphasis="link"
                  className="no-underline"
               >
                  Budget
               </Button>
               <Button
                  size="sm"
                  color="secondary"
                  onClick={journalEntryClickHandler}
                  emphasis="link"
                  className="no-underline"
               >
                  Journal Entry
               </Button>
               <Button
                  size="sm"
                  color="secondary"
                  onClick={bankClickHandler}
                  emphasis="link"
                  className="no-underline"
               >
                  Bank
               </Button>
            </div>
         </div>
         <div className="w-fit flex-col flex gap-5">
            <div className="text-lg font-semibold text-black">Reports</div>
            <div className="flex flex-col items-start gap-2">
               <Button
                  size="sm"
                  color="secondary"
                  onClick={balanceSheetClickHandler}
                  emphasis="link"
                  className="no-underline"
               >
                  Balance Sheet
               </Button>
               <Button
                  size="sm"
                  color="secondary"
                  onClick={incomeSheetClickHandler}
                  emphasis="link"
                  className="no-underline"
               >
                  Income Sheet
               </Button>
               <Button
                  size="sm"
                  color="secondary"
                  onClick={delinquencyReportClickHandler}
                  emphasis="link"
                  className="no-underline"
               >
                  Delinquency Report
               </Button>
               <Button
                  size="sm"
                  color="secondary"
                  onClick={bankStatementClickHandler}
                  emphasis="link"
                  className="no-underline"
               >
                  Bank Statement
               </Button>
               <Button
                  size="sm"
                  color="secondary"
                  onClick={generalLedgerClickHandler}
                  emphasis="link"
                  className="no-underline"
               >
                  General Ledger
               </Button>
            </div>
         </div>
         <div className="w-fit flex-col flex gap-5 items-start">
            <div className="text-lg font-semibold text-black">Create</div>
            <div className="flex flex-col items-start gap-2">
               <Button
                  size="sm"
                  color="secondary"
                  onClick={serviceRequestClickHandler}
                  emphasis="link"
                  className="no-underline"
               >
                  Service Request
               </Button>
               <Button
                  size="sm"
                  color="secondary"
                  onClick={boardTaskClickHandler}
                  emphasis="link"
                  className="no-underline"
               >
                  Board Task
               </Button>
               <Button
                  size="sm"
                  color="secondary"
                  onClick={violationClickHandler}
                  emphasis="link"
                  className="no-underline"
               >
                  Violation
               </Button>
               <Button
                  size="sm"
                  color="secondary"
                  onClick={tasksClickHandler}
                  emphasis="link"
                  className="no-underline"
               >
                  Tasks
               </Button>
            </div>
         </div>
      </div>
   );
}
export default QuickActionOverlay;
