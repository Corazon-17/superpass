import { ChangeEventHandler } from "react";

interface CheckBoxProps {
  label: string;
  checked: boolean;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}

export function CheckBox({ label, checked, handleChange }: CheckBoxProps) {
  return (
    <div className="flex gap-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className="accent-yellow-900"
      />
      <label>{label}</label>
    </div>
  );
}
