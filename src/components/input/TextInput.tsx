import { ChangeEventHandler } from "react";

interface TextInputProps {
  type?: "text" | "password";
  value: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}

export function TextInput({ type, value, handleChange }: TextInputProps) {
  return (
    <input
      type={type ? type : "text"}
      value={value}
      onChange={handleChange}
      className="w-full p-1 bg-transparent border-b-2 border-b-amber-600 outline-none"
    />
  );
}
