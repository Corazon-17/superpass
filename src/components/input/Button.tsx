import { MouseEventHandler } from "react";

interface ButtonProps {
  handleClick: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  className?: string;
}

export function Button({ handleClick, children, className }: ButtonProps) {
  return (
    <button onClick={handleClick} className={"px-2 border-2 border-yellow-900 " + className}>
      {children}
    </button>
  );
}
