// Generated with Ion on 3/5/2024, 9:59:01 PM
// Figma Link: https://www.figma.com/file/p6G5Vjga6BJjcBx86TKgNP?node-id=5315:46032
import Label from "@/components/ion/Label";
import Hint from "@/components/ion/Hint";
import clsx from "clsx";
type FileUploadProps = {
  placeholder?: string;
  label?: string;
  hint?: string;
  iconLeading?: React.ReactNode;
  showLabel?: boolean;
  showHintIcon?: boolean;
  error?: boolean | string;
  value?: File | null;
  onChange?: (file: File | null) => void;
  className?: string;
};

function FileUpload({
  label,
  placeholder,
  hint,
  iconLeading,
  value,
  onChange,
  error,
  className,
}: FileUploadProps) {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    onChange?.(file);
  };

  return (
    <div className={clsx("w-[356px] flex-col flex gap-1 h-fit", className)}>
      {label && <Label required={true}>{label}</Label>}
      <div
        className={clsx(
          "w-full flex justify-between items-center gap-2 py-2 pr-2 pl-3 rounded-radius border",
          { "border-state-error": error }
        )}
      >
        <div className="flex items-center gap-3">
          {iconLeading}
          {/* Display the file name if provided, otherwise show the placeholder */}
          <div className="text-sm">
            {value?.name || (
              <span className="text-soft-foreground">Select File</span>
            )}
          </div>
        </div>
        <label className="text-xs font-semibold text-primary cursor-pointer">
          Browse
          <input
            type="file"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </label>
      </div>
      {hint && (
        <Hint error={error} className="mt-1">
          {hint}
        </Hint>
      )}
    </div>
  );
}
export default FileUpload;
