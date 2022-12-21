import { ChangeEvent, PassOption, ValueSetter } from "@/types";
import { CheckBox } from "./input";

interface OptionProps {
  value: PassOption;
  setValue: ValueSetter;
}

export function Option({ value, setValue }: OptionProps) {
  type ObjectKey = keyof typeof value;

  const updateValue = (e: ChangeEvent, key: ObjectKey) => {
    const copiedValue: typeof value = { ...value };
    copiedValue[key] = e.target.checked;

    setValue(copiedValue);
  };

  return (
    <div className="flex gap-3">
      {Object.keys(value).map((key) => (
        <CheckBox
          key={key}
          label={key.charAt(0).toUpperCase() + key.slice(1)}
          checked={value[key as ObjectKey]}
          handleChange={(e): void => updateValue(e, key as ObjectKey)}
        />
      ))}
    </div>
  );
}
