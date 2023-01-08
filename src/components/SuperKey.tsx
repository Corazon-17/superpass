import { ValueSetter, ChangeEvent } from "@/types";
import { useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { Button, CheckBox, TextInput } from "./input";

interface SuperKeyprops {
  value: Array<string>;
  setValue: ValueSetter;
}

export function SuperKey({ value, setValue }: SuperKeyprops) {
  const [show, setShow] = useState<boolean>(false);
  const ShowButton: React.FC = () => {
    return (
      <button
        className="absolute bottom-2 right-[3.25rem] text-2xl hover:text-amber-500"
        onClick={() => setShow(!show)}
      >
        {show ? <BiHide /> : <BiShow />}
      </button>
    );
  };

  const addValue = () => {
    let copiedValue = [...value];
    copiedValue.push("");

    setValue(copiedValue);
  };

  const updateValue = (e: ChangeEvent, index: number): void => {
    let copiedValue = [...value];
    copiedValue[index] = e.target.value;

    setValue(copiedValue);
  };

  const deleteValue = (index: number) => {
    let copiedValue = [...value];
    copiedValue.splice(index, 1);

    setValue(copiedValue);
  };

  return (
    <div className="block">
      <label>Super Key</label>
      <div className="grid gap-2">
        {value.length > 1 &&
          [...Array(value.length - 1)].map((_, index) => (
            <div key={index} className="flex relative justify-between gap-2">
              <TextInput
                type={show ? "text" : "password"}
                value={value[index]}
                handleChange={(e): void => updateValue(e, index)}
              />
              <Button handleClick={(): void => deleteValue(index)}>
                <IoMdRemove />
              </Button>
            </div>
          ))}
        <div className="flex relative justify-between gap-2">
          <TextInput
            type={show ? "text" : "password"}
            value={value[value.length - 1]}
            handleChange={(e): void => updateValue(e, value.length - 1)}
          />
          <ShowButton />
          <Button handleClick={addValue}>
            <IoMdAdd />
          </Button>
        </div>
      </div>
    </div>
  );
}
