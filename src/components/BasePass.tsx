import { ValueSetter } from "@/types";
import { useState } from "react";
import { CheckBox, TextInput } from "./input";

interface BasePassProps {
  value: string;
  setValue: ValueSetter;
}

export function BasePass({ value, setValue }: BasePassProps) {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="block">
      <label>Base Password</label>
      <TextInput
        type={show ? "text" : "password"}
        value={value}
        handleChange={(e): void => setValue(e.target.value)}
      />
      <CheckBox
        label="Show Password"
        checked={show}
        handleChange={(): void => setShow(!show)}
      />
    </div>
  );
}
