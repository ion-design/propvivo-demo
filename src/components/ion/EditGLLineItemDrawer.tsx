"use client";
// Generated with Ion on 3/4/2024, 6:45:10 PM
// Figma Link: https://www.figma.com/file/p6G5Vjga6BJjcBx86TKgNP?node-id=5233:7426
import { useFormik } from "formik";
import Button from "@/components/ion/Button";
import Drawer, { DrawerProps } from "./Drawer";
import { Select } from "@/components/ion/Select";
import AddFiscalYearModal from "./AddFiscalYearModal";
import { MouseEvent, useState } from "react";
import Divider from "@/components/ion/Divider";
import Label from "@/components/ion/Label";
import { Plus } from "@phosphor-icons/react/dist/ssr";
import Input from "@/components/ion/Input";
import UpdateGlLineItemConfirmationModal from "./UpdateGLLineItemConfirmationModal";
import UpdateGlLineItemModal from "./UpdateGLLineItemModal";

function EditGLLineItemDrawer(props: DrawerProps) {
  const [open, setOpen] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);

  function addLineItemClickHandler(e: MouseEvent<HTMLButtonElement>) {
    alert("addLineItemClickHandler fired");
  }

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        glName: "",
        drcrAllowed: "",
        accountingClassification: "",
        projectionClassification: "",
      },
      onSubmit: (values) => {
        setConfirmationModalOpen(true);
        console.log(values);
      },
      validate: (values) => {
        const errors: any = {};
        if (!values.glName) {
          errors.glName = "Required";
        }
        if (!values.drcrAllowed) {
          errors.drcrAllowed = "Required";
        }
        if (!values.accountingClassification) {
          errors.accountingClassification = "Required";
        }
        if (!values.projectionClassification) {
          errors.projectionClassification = "Required";
        }
        return errors;
      },
    });
  return (
    <>
      <UpdateGlLineItemConfirmationModal
        open={confirmationModalOpen}
        onOpenChange={setConfirmationModalOpen}
        handleUpdate={() => {
          setSuccessModalOpen(true);
          setOpen(false);
          setConfirmationModalOpen(false);
        }}
        handleCancel={() => setConfirmationModalOpen(false)}
      />
      <UpdateGlLineItemModal
        open={successModalOpen}
        onOpenChange={setSuccessModalOpen}
      />
      <Drawer
        open={open}
        onOpenChange={setOpen}
        title="Edit GL Line Item"
        className="w-fit"
        footer={
          <div className="w-full flex-1 flex justify-end items-end gap-3">
            <Button
              emphasis="medium"
              color="secondary"
              size="md"
              className="w-full"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button
              emphasis="high"
              color="primary"
              size="md"
              type="submit"
              onClick={() => handleSubmit()}
              className="w-full"
            >
              Update
            </Button>
          </div>
        }
        {...props}
      >
        <form className="flex-col flex gap-6">
          <div className="w-full flex-col flex gap-1 font-semibold">
            <div className="text-sm text-foreground">Chart of Accounts</div>
            <div className="text-xs text-sub-foreground">
              Global COA US-NW-Property
            </div>
          </div>
          <Divider />
          <div className="w-full flex-col flex gap-1">
            <Label>Main Account</Label>
            <div className="text-xs font-semibold text-sub-foreground">
              Global COA US-NW Property
            </div>
          </div>
          <div className="w-full flex-col flex gap-1">
            <Label>Header</Label>
            <div className="text-xs font-semibold text-sub-foreground">
              Current Asset
            </div>
          </div>
          <div className="w-full flex-col flex gap-1">
            <Label>Sub-Header</Label>
            <div className="text-xs font-semibold text-sub-foreground">
              Cash &amp; Cash Equivalent
            </div>
          </div>
          <Button
            iconLeading={<Plus size={12} weight={"bold"} />}
            size="sm"
            color="secondary"
            onClick={addLineItemClickHandler}
            emphasis="link"
            className="no-underline justify-start"
          >
            Add Line Item
          </Button>
          <Divider />
          <div className="w-full flex-col flex gap-1">
            <Label>GL Code</Label>
            <div className="text-xs font-semibold text-sub-foreground">
              11102
            </div>
          </div>
          <Input
            placeholder="GL Name"
            required={true}
            label="GL Name"
            value={values.glName}
            error={touched.glName && errors.glName}
            hint={touched.glName && errors.glName ? errors.glName : ""}
            onChange={(e) =>
              handleChange({
                target: {
                  name: "glName",
                  value: e.target.value,
                },
              })
            }
            className="w-full"
          />
          <div className="w-full flex-col flex gap-1">
            <Label>Accounting Category</Label>
            <div className="text-xs font-semibold text-sub-foreground">
              Operative
            </div>
          </div>
          <Select
            placeholder="Select  DR/CR Allowed"
            options={[
              {
                description: "first",
                label: "Item 1",
                value: "Item 1",
              },
              {
                description: "second",
                label: "Item 2",
                value: "Item 2",
              },
              {
                description: "third",
                label: "Item 3",
                value: "Item 3",
              },
            ]}
            value={values.drcrAllowed}
            onValueChange={(value) =>
              handleChange({ target: { name: "drcrAllowed", value } })
            }
            required={true}
            label="DR/CR Allowed"
            error={touched.drcrAllowed && errors.drcrAllowed}
            hint={
              touched.drcrAllowed && errors.drcrAllowed
                ? errors.drcrAllowed
                : ""
            }
            className="w-full"
          />
          <Select
            placeholder="Default"
            options={[
              {
                description: "first",
                label: "Item 1",
                value: "Item 1",
              },
              {
                description: "second",
                label: "Item 2",
                value: "Item 2",
              },
              {
                description: "third",
                label: "Item 3",
                value: "Item 3",
              },
            ]}
            onValueChange={(value) =>
              handleChange({
                target: { name: "accountingClassification", value },
              })
            }
            required={true}
            label="Accounting Classification"
            error={
              touched.accountingClassification &&
              errors.accountingClassification
            }
            hint={
              touched.accountingClassification &&
              errors.accountingClassification
                ? errors.accountingClassification
                : ""
            }
            className="w-full"
          />
          <Select
            placeholder="Select Projection Classification"
            options={[
              {
                description: "first",
                label: "Item 1",
                value: "Item 1",
              },
              {
                description: "second",
                label: "Item 2",
                value: "Item 2",
              },
              {
                description: "third",
                label: "Item 3",
                value: "Item 3",
              },
            ]}
            value={values.projectionClassification}
            onValueChange={(value) =>
              handleChange({
                target: { name: "projectionClassification", value },
              })
            }
            required={true}
            label="Projection Classification"
            error={
              touched.projectionClassification &&
              errors.projectionClassification
            }
            hint={
              touched.projectionClassification &&
              errors.projectionClassification
                ? errors.projectionClassification
                : ""
            }
            className="w-full"
          />
          <Button
            iconLeading={<Plus size={12} weight={"bold"} />}
            size="sm"
            color="secondary"
            onClick={addLineItemClickHandler}
            emphasis="link"
            className="no-underline justify-start"
          >
            Add Line Item
          </Button>
        </form>
      </Drawer>
    </>
  );
}
export default EditGLLineItemDrawer;
