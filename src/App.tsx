import { useState } from "react";
import { BasePass, SuperKey, Option, PassLength, Result } from "./components";
import { Button } from "./components/input";
import { PassOption } from "./types";
import { strengthen, getTypes } from "./utils";
import { AiOutlineThunderbolt } from "react-icons/ai";

function App() {
  const [basePass, setBasePass] = useState<string>("");
  console.log(basePass);
  const [superKey, setSuperKey] = useState<Array<string>>([""]);
  const [option, setOption] = useState<PassOption>({
    lower: true,
    upper: true,
    number: true,
    symbol: true,
  });
  const [passLength, setPassLength] = useState<number>(8);
  const [result, setResult] = useState<string>("");
  const [error, setError] = useState<string>("");

  const giveSuperPower = (): void => {
    const error =
      basePass == ""
        ? "Base password cannot be empty !"
        : superKey.join("") == ""
        ? "Super Key cannot be empty !"
        : getTypes(option).length < 1
        ? "Select at least 1 character type !"
        : "";

    if (error) {
      setError(error);
      setResult("");
    } else {
      setError("");
      setResult(strengthen(basePass, superKey, passLength, option));
    }
  };

  return (
    <div className="flex flex-col min-w-screen min-h-screen overflow-x-clip p-0 items-center justify-center bg-gradient-to-r from-yellow-900 via-black to-yellow-900 text-yellow-600">
      <AiOutlineThunderbolt
        size={420}
        className="fixed z-10 text-yellow-800 animate-pulse"
      />
      <div className="content p-2 border-4 border-yellow-900 my-4 z-20">
        <h2 className="text-3xl font-bold text-center">Superpass</h2>
        <p className="text-md text-center mt-2 mb-6">
          Make your weak password stronger.
        </p>

        <div className="grid gap-4">
          <BasePass value={basePass} setValue={setBasePass} />
          <SuperKey value={superKey} setValue={setSuperKey} />
          <PassLength value={passLength} setValue={setPassLength} />
          <Option value={option} setValue={setOption} />
          <Button
            className="py-2 text-lg font-bold border-4"
            handleClick={giveSuperPower}
          >
            Strengthen
          </Button>
          {error && <p>{error}</p>}
        </div>

        {result && <Result value={result} />}
      </div>
    </div>
  );
}

export default App;
