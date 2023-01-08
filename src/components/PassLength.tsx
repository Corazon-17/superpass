import { ChangeEvent, ValueSetter } from "@/types";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { Button, TextInput } from "./input";

interface PassLengthProps {
  value: number;
  setValue: ValueSetter;
}

export function PassLength({ value, setValue }: PassLengthProps) {
  const handleChange = (e: ChangeEvent) => {
    const newValue = e.target.value;

    if (newValue.trim() === "") {
      setValue(1);
    } else if (!Number.isNaN(Number(newValue))) {
      setValue(Number(newValue));
    }
  };

  return (
    <div className="block">
      <label>Password Length</label>
      <div className="flex gap-2">
        <TextInput value={value.toString()} handleChange={handleChange} />
        <Button
          handleClick={() => {
            value !== 1 && setValue(value - 1);
          }}
        >
          <IoMdRemove />
        </Button>
        <Button handleClick={() => setValue(value + 1)}>
          <IoMdAdd />
        </Button>
      </div>
    </div>
  );
}
