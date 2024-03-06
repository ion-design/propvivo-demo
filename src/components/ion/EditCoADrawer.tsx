"use client";
// Generated with Ion on 3/5/2024, 3:54:54 PM
// Figma Link: https://www.figma.com/file/p6G5Vjga6BJjcBx86TKgNP?node-id=5315:38283
import { useState } from "react";
import Button from "@/components/ion/Button";
import { useFormik } from "formik";
import FileUpload from "@/components/ion/FileUpload";
import Input from "@/components/ion/Input";
import Select from "@/components/ion/Select";
import Drawer, { DrawerProps } from "@/components/ion/Drawer";
import AddCurrencyModal from "./AddCurrencyModal";
import { ArrowRight, Bluetooth, Globe } from "@phosphor-icons/react/dist/ssr";
import Label from "@/components/ion/Label";
import { RadioGroup, RadioGroupItem } from "@/components/ion/Radio";
import UpdateGlLineItemConfirmationModal from "./UpdateGLLineItemConfirmationModal";
import UpdateGlLineItemModal from "./UpdateGLLineItemModal";
import EditCoAConfirmationModal from "./EditCoAConfirmationModal";
import EditCoAModal from "./EditCoAModal";

function AddCurrencyDrawer(props: DrawerProps) {
  const [open, setOpen] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        mainAccount: "",
        isParent: "Yes",
        glCode: "",
        header: "",
        subHeaderStartRange: "",
        subHeaderEndRange: "",
        subHeader: "",
        glLineItemStartRange: "",
        glLineItemEndRange: "",
      },
      onSubmit: () => {
        setConfirmationModalOpen(true);
      },
      validate: (values) => {
        const errors: any = {};
        if (!values.mainAccount) {
          errors.mainAccount = "Required";
        }
        if (!values.glCode) {
          errors.glCode = "Required";
        }
        if (!values.header) {
          errors.header = "Required";
        }
        if (values.isParent) {
          if (!values.subHeaderStartRange) {
            errors.subHeaderStartRange = "Required";
          }

          if (!values.subHeaderEndRange) {
            errors.subHeaderEndRange = "Required";
          }
        } else {
          if (!values.subHeader) {
            errors.subHeader = "Required";
          }
          if (!values.glLineItemStartRange) {
            errors.glLineItemStartRange = "Required";
          }
          if (!values.glLineItemEndRange) {
            errors.glLineItemEndRange = "Required";
          }
        }
        return errors;
      },
    });
  return (
    <>
      <EditCoAConfirmationModal
        open={confirmationModalOpen}
        onOpenChange={setConfirmationModalOpen}
        handleUpdate={() => {
          setSuccessModalOpen(true);
          setOpen(false);
          setConfirmationModalOpen(false);
        }}
        handleCancel={() => setConfirmationModalOpen(false)}
      />
      <EditCoAModal
        open={successModalOpen}
        onOpenChange={setSuccessModalOpen}
      />
      <Drawer
        open={open}
        onOpenChange={setOpen}
        title="Edit Chart Of Accounts Header/Sub-Header"
        footer={
          <div className="w-full flex-1 flex justify-end items-end gap-3">
            <Button
              emphasis="medium"
              color="secondary"
              size="md"
              onClick={() => setOpen(false)}
              className="w-full"
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
              Submit
            </Button>
          </div>
        }
        {...props}
      >
        <form className="w-full flex-1 flex-col flex gap-10">
          <div className="w-full flex-col flex gap-1 font-semibold">
            <div className="text-sm text-foreground">Chart of Accounts</div>
            <div className="text-xs text-sub-foreground">
              Global COA US-NW-Property
            </div>
          </div>
          <Select
            placeholder="Select Main Account"
            options={[
              {
                description: "first",
                iconLeading: <Globe size={16} weight={"regular"} />,
                label: "Item 1",
                value: "Item 1",
              },
              {
                description: "second",
                iconLeading: <ArrowRight size={16} weight={"bold"} />,
                label: "Item 2",
                value: "Item 2",
              },
              {
                description: "third",
                iconLeading: <Bluetooth size={16} weight={"bold"} />,
                label: "Item 3",
                suffix: "@third",
                value: "Item 3",
              },
            ]}
            required={true}
            label="Main Account"
            onValueChange={(value) =>
              handleChange({
                target: {
                  name: "mainAccount",
                  value,
                },
              })
            }
            value={values.mainAccount}
            error={touched.mainAccount && errors.mainAccount}
            hint={
              touched.mainAccount && errors.mainAccount
                ? errors.mainAccount
                : ""
            }
            className="w-full"
          />
          <div className="w-full flex-col flex gap-3">
            <Label required={true}>Is Parent</Label>
            <RadioGroup
              orientation="horizontal"
              className="w-full flex flex-row items-start gap-5"
              value={values.isParent}
              onValueChange={(value) => {
                handleChange({
                  target: {
                    name: "isParent",
                    value,
                  },
                });
              }}
            >
              <div className="flex flex-row gap-5">
                <RadioGroupItem label="Yes" value="Yes" />
                <RadioGroupItem label="No" value="No" />
              </div>
            </RadioGroup>
          </div>
          <Input
            placeholder="Currency Code"
            required={true}
            label="GL Code"
            showHintIcon={true}
            value={values.glCode}
            error={touched.glCode && errors.glCode}
            hint={touched.glCode && errors.glCode ? errors.glCode : ""}
            onChange={(e) =>
              handleChange({
                target: {
                  name: "glCode",
                  value: e.target.value,
                },
              })
            }
            className="w-full"
          />
          <Select
            placeholder="Select Header"
            options={[
              {
                description: "first",
                iconLeading: <Globe size={16} weight={"regular"} />,
                label: "Item 1",
                value: "Item 1",
              },
              {
                description: "second",
                iconLeading: <ArrowRight size={16} weight={"bold"} />,
                label: "Item 2",
                value: "Item 2",
              },
              {
                description: "third",
                iconLeading: <Bluetooth size={16} weight={"bold"} />,
                label: "Item 3",
                suffix: "@third",
                value: "Item 3",
              },
            ]}
            required={true}
            label="Header"
            onValueChange={(value) =>
              handleChange({
                target: {
                  name: "header",
                  value,
                },
              })
            }
            value={values.header}
            error={touched.header && errors.header}
            hint={touched.header && errors.header ? errors.header : ""}
            className="w-full"
          />
          {values.isParent === "Yes" ? (
            <>
              <Input
                placeholder="Enter Sub-Header Start Range"
                required={true}
                label="Sub-Header Start Range"
                value={values.subHeaderStartRange}
                error={
                  touched.subHeaderStartRange && errors.subHeaderStartRange
                }
                hint={
                  touched.subHeaderStartRange && errors.subHeaderStartRange
                    ? errors.subHeaderStartRange
                    : ""
                }
                onChange={(e) =>
                  handleChange({
                    target: {
                      name: "subHeaderStartRange",
                      value: e.target.value,
                    },
                  })
                }
                className="w-full"
              />
              <Input
                placeholder="Enter Sub-Header End Range"
                required={true}
                label="Sub-Header End Range"
                value={values.subHeaderEndRange}
                error={touched.subHeaderEndRange && errors.subHeaderEndRange}
                hint={
                  touched.subHeaderEndRange && errors.subHeaderEndRange
                    ? errors.subHeaderEndRange
                    : ""
                }
                onChange={(e) =>
                  handleChange({
                    target: {
                      name: "subHeaderEndRange",
                      value: e.target.value,
                    },
                  })
                }
                className="w-full"
              />
            </>
          ) : (
            <>
              <Input
                placeholder="Enter Sub-Header"
                required={true}
                label="Sub-Header"
                value={values.subHeader}
                error={touched.subHeader && errors.subHeader}
                hint={
                  touched.subHeader && errors.subHeader ? errors.subHeader : ""
                }
                onChange={(e) =>
                  handleChange({
                    target: {
                      name: "subHeader",
                      value: e.target.value,
                    },
                  })
                }
                className="w-full"
              />
              <Input
                placeholder="GL Line Item Start Range"
                required={true}
                label="GL Line Item Start Range"
                value={values.glLineItemStartRange}
                error={
                  touched.glLineItemStartRange && errors.glLineItemStartRange
                }
                hint={
                  touched.glLineItemStartRange && errors.glLineItemStartRange
                    ? errors.glLineItemStartRange
                    : ""
                }
                onChange={(e) =>
                  handleChange({
                    target: {
                      name: "glLineItemStartRange",
                      value: e.target.value,
                    },
                  })
                }
                className="w-full"
              />
              <Input
                placeholder="GL Line Item End Range"
                required={true}
                label="GL Line Item End Range"
                value={values.glLineItemEndRange}
                error={touched.glLineItemEndRange && errors.glLineItemEndRange}
                hint={
                  touched.glLineItemEndRange && errors.glLineItemEndRange
                    ? errors.glLineItemEndRange
                    : ""
                }
                onChange={(e) =>
                  handleChange({
                    target: {
                      name: "glLineItemEndRange",
                      value: e.target.value,
                    },
                  })
                }
                className="w-full"
              />
            </>
          )}
        </form>
      </Drawer>
    </>
  );
}
export default AddCurrencyDrawer;
