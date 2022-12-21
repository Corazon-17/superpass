import { ChangeEvent, ValueSetter } from "@/types";
import { TextInput } from "./input";

interface PassLengthProps {
  value: number;
  setValue: ValueSetter;
}

export function PassLength({ value, setValue }: PassLengthProps) {
  const handleChange = (e: ChangeEvent) => {
    const newValue = e.target.value;

    if (newValue.trim() === "") {
      setValue(0);
    } else if (!Number.isNaN(Number(newValue))) {
      setValue(Number(newValue))
    }
  };
  
  return (
    <div className="block">
      <label>Password Length</label>
      <TextInput value={value.toString()} handleChange={handleChange} />
    </div>
  );
}
