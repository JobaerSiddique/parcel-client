import { useFormContext } from "react-hook-form";
import { Select, SelectItem } from "@heroui/react";

interface IProps {
  options: string[] | { key: string; label: string }[];
  name: string;
  label?: string;
  variant?: "bordered" | "flat" | "faded" | "underlined";
  disabled?: boolean;
}

export default function PSELECT({
  options,
  name,
  label,
  variant = "bordered",
  disabled,
}: IProps) {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  const selectedValue = watch(name);

  return (
    <Select
      selectedKeys={selectedValue ? [selectedValue] : []}
      onSelectionChange={(keys) => {
        const selected = Array.from(keys)[0];
        setValue(name, selected as string);
      }}
      className="min-w-full sm:min-w-[225px]"
      isDisabled={disabled}
      label={label}
      variant={variant}
    >
      {options.map((option) => {
        if (typeof option === 'string') {
          return <SelectItem key={option}>{option}</SelectItem>;
        }
        return <SelectItem key={option.key}>{option.label}</SelectItem>;
      })}
    </Select>
  );
}