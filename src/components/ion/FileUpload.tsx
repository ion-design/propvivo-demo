// Generated with Ion on 3/5/2024, 9:59:01 PM
// Figma Link: https://www.figma.com/file/p6G5Vjga6BJjcBx86TKgNP?node-id=5315:46032
import Label from "@/components/ion/Label";
import Hint from "@/components/ion/Hint";
import clsx from "clsx";
type FileUploadProps = {
  text?: string;
  placeholder?: string;
  label?: string;
  showHint?: boolean;
  iconLeading?: React.ReactNode;
  showLabel?: boolean;
  className?: string;
};

function FileUpload({
  text,
  label,
  placeholder,
  showHint,
  iconLeading,
  showLabel,
  className,
}: FileUploadProps) {
  return (
    <div className={clsx("w-[356px] flex-col flex gap-1 h-fit", className)}>
      {showLabel && <Label required={true}>{label}</Label>}
      <div className="w-full flex justify-between items-center gap-2 py-2 pr-2 pl-3 rounded-radius border">
        <div className="flex items-center gap-3">
          {iconLeading}
          <div className="text-sm">{placeholder}</div>
        </div>
        <div className="text-xs font-semibold text-primary">Browse</div>
      </div>
      {showHint && <Hint showIcon={true}>Hint text content</Hint>}
    </div>
  );
}
export default FileUpload;
