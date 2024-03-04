// Generated with Ion on 3/3/2024, 5:45:34 PM
// Figma Link: https://www.figma.com/file/p6G5Vjga6BJjcBx86TKgNP?node-id=5134:67296
import Divider from "@/components/ion/Divider";
import Breadcrumbs from "@/components/ion/Breadcrumbs";
import EntityItem from "@/components/ion/EntityItem";

function LegalEntity() {
   return (
      <div className="bg-background w-full flex-col flex gap-10 p-10 h-fit">
         <Breadcrumbs root="Home" route="Legal Entity" />
         <div className="grid grid-cols-3 gap-10">
            <div className="bg-background flex-1 flex-col flex gap-3">
               <div className="text-base font-semibold text-black px-3 py-1">
                  Core Setup
               </div>
               <Divider />
               <EntityItem
                  title="Fiscal Calendar"
                  property1="default"
                  className="w-full"
               />
               <EntityItem
                  title="Chart of Accounts"
                  property1="default"
                  className="w-full"
               />
               <EntityItem
                  title="Property Address"
                  property1="default"
                  className="w-full"
               />
               <EntityItem
                  title="User"
                  property1="default"
                  className="w-full"
               />
            </div>
            <div className="bg-background flex-1 flex-col flex gap-3">
               <div className="text-base font-semibold text-black px-3 py-1">
                  Budget
               </div>
               <Divider />
               <EntityItem
                  title="Budget"
                  property1="default"
                  className="w-full"
               />
            </div>
            <div className="bg-background flex-1 flex-col flex gap-3">
               <div className="text-base font-semibold text-black px-3 py-1">
                  Account Receivable
               </div>
               <Divider />
               <EntityItem
                  title="Customer"
                  property1="default"
                  className="w-full"
               />
               <EntityItem
                  title="Invoice"
                  property1="default"
                  className="w-full"
               />
               <EntityItem
                  title="Payment"
                  property1="default"
                  className="w-full"
               />
               <EntityItem
                  title="Charges"
                  property1="default"
                  className="w-full"
               />
               <EntityItem
                  title="Collection"
                  property1="default"
                  className="w-full"
               />
            </div>

            <div className="bg-background flex-1 flex-col flex gap-3">
               <div className="text-base font-semibold text-black px-3 py-1">
                  Account Payable
               </div>
               <Divider />
               <EntityItem
                  title="Vendor"
                  property1="default"
                  className="w-full"
               />
               <EntityItem
                  title="Invoice"
                  property1="default"
                  className="w-full"
               />
               <EntityItem
                  title="Payment"
                  property1="default"
                  className="w-full"
               />
            </div>

            <div className="bg-background flex-1 flex-col flex gap-3">
               <div className="text-base font-semibold text-black px-3 py-1">
                  Bank
               </div>
               <Divider />
               <EntityItem
                  title="Bank"
                  property1="default"
                  className="w-full"
               />
               <EntityItem
                  title="Accounts"
                  property1="default"
                  className="w-full"
               />
               <EntityItem
                  title="Remote Deposit"
                  property1="default"
                  className="w-full"
               />
               <EntityItem
                  title="Image Exception"
                  property1="default"
                  className="w-full"
               />
               <EntityItem
                  title="Refund"
                  property1="default"
                  className="w-full"
               />
            </div>

            <div className="bg-background flex flex-1 flex-col gap-3">
               <div className="text-base font-semibold text-black px-3 py-1">
                  General Ledger
               </div>
               <Divider />
               <EntityItem
                  title="General Ledger"
                  property1="default"
                  className="w-full"
               />
            </div>
            <div className="bg-background flex-1 flex-col flex gap-3">
               <div className="text-base font-semibold text-black px-3 py-1">
                  Reporting
               </div>
               <Divider />
               <EntityItem
                  title="Balance Sheet"
                  property1="default"
                  className="w-full"
               />
               <EntityItem
                  title="Income Statement"
                  property1="default"
                  className="w-full"
               />
               <EntityItem
                  title="Delinquency Report"
                  property1="default"
                  className="w-full"
               />
            </div>
            <div className="bg-background flex-1 flex-col flex gap-3">
               <div className="text-base font-semibold text-black px-3 py-1">
                  Jobs
               </div>
               <Divider />
               <EntityItem
                  title="Vendor Aging"
                  property1="default"
                  className="w-full"
               />
               <EntityItem
                  title="Invoices"
                  property1="default"
                  className="w-full"
               />
               <EntityItem
                  title="Bank Statement"
                  property1="default"
                  className="w-full"
               />
               <EntityItem
                  title="AP Job Setting"
                  property1="default"
                  className="w-full"
               />
               <EntityItem
                  title="AP Job Setting"
                  property1="default"
                  className="w-full"
               />
               <EntityItem
                  title="Rounding Setting"
                  property1="default"
                  className="w-full"
               />
               <EntityItem
                  title="Bulk Templates"
                  property1="default"
                  className="w-full"
               />
            </div>
         </div>
      </div>
   );
}
export default LegalEntity;
