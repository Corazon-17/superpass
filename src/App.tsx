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
    const errorMsg =
      basePass == ""
        ? "Base password cannot be empty !"
        : superKey.join("") == ""
        ? "Super Key cannot be empty !"
        : getTypes(option).length < 1
        ? "Select at least 1 character type !"
        : "";

    if (errorMsg) {
      setResult("");
    } else {
      setResult(strengthen(basePass, superKey, passLength, option));
    }

    setError(errorMsg);
  };

  return (
    <div className="flex flex-col min-w-screen min-h-screen overflow-x-clip p-0 items-center justify-center bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 text-amber-500 font-bold">
      <AiOutlineThunderbolt
        size={420}
        className="fixed z-10 text-yellow-700 animate-pulse"
      />
      <div className="content px-2 py-4 border-4 border-double border-amber-500 my-4 z-20">
        <div className="flex justify-center w-full">
          <h1 className="text-4xl font-extrabold tracking-wider">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600">
              SUPER
            </span>
            <span className="text-white">PASS</span>
          </h1>
        </div>
        <p className="text-center font-bold text-white mt-1 mb-4">
          Make your weak password{" "}
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600">
            Stronger
          </span>
        </p>

        <div className="grid gap-4">
          <BasePass value={basePass} setValue={setBasePass} />
          <SuperKey value={superKey} setValue={setSuperKey} />
          <PassLength value={passLength} setValue={setPassLength} />
          <Option value={option} setValue={setOption} />
          <Button
            className="py-2 text-2xl font-extrabold"
            handleClick={giveSuperPower}
          >
            Boost
          </Button>
          {error && <p>{error}</p>}
        </div>

        {result && <Result value={result} />}
      </div>
    </div>
  );
}

export default App;
