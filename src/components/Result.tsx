import { useState } from "react";
import { MdContentCopy } from "react-icons/md";
import { CheckBox } from "./input";

interface ResultProps {
  value: string;
}

export function Result({ value }: ResultProps) {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="w-full my-4">
      <label>Your Super Password:</label>
      <div
        className="flex group relative"
        onClick={() => navigator.clipboard.writeText(value)}
      >
        <input
          type={show ? "text" : "password"}
          value={value}
          className="w-full px-1 py-2 bg-yellow-900"
          disabled
        />
        <MdContentCopy
          size={20}
          className="hidden group-hover:block cursor-pointer absolute right-2 h-full text-yellow-600"
        />
        <p className="hidden group-hover:block absolute -top-6 right-0">
          *click to copy
        </p>
      </div>

      <CheckBox
        label="Show Super Password"
        checked={show}
        handleChange={(): void => setShow(!show)}
      />
    </div>
  );
}
