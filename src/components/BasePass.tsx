import { ValueSetter } from "@/types";
import { useState } from "react";
import { TextInput } from "./input";
import { BiShow, BiHide } from "react-icons/bi";

interface BasePassProps {
  value: string;
  setValue: ValueSetter;
}

export function BasePass({ value, setValue }: BasePassProps) {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="grid relative">
      <label>Base Password</label>
      <TextInput
        type={show ? "text" : "password"}
        value={value}
        handleChange={(e): void => setValue(e.target.value)}
      />
      <button
        className="absolute bottom-2 right-2 text-2xl hover:text-amber-400"
        onClick={() => setShow(!show)}
      >
        {show ? <BiHide /> : <BiShow />}
      </button>
    </div>
  );
}
