"use client";
import { useFormContext } from "react-hook-form";
import { IInput } from "@/src/types";
import { Input } from "@heroui/input";

interface IProps extends IInput {
  min?: string | number;
  max?: string | number;
  step?: string | number;
}

export default function PINPUT({
  variant = "bordered",
  size = "md",
  required = false,
  type = "text",
  label,
  name,
  min,
  max,
  step,
}: IProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const registerOptions = type === "number" ? { 
    valueAsNumber: true,
    setValueAs: (value: string) => value === "" ? undefined : Number(value)
  } : {};

  return (
    <Input
      {...register(name, registerOptions)}
      errorMessage={errors[name] ? (errors[name].message as string) : ""}
      isInvalid={!!errors[name]}
      label={label}
      required={required}
      size={size}
      type={type}
      variant={variant}
      min={min}
      max={max}
      step={step}
    />
  );
}