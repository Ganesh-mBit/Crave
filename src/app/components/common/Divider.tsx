import { twMerge } from "tailwind-merge";

interface DividerProps {
  className?: string;
}

const Divider = ({ className }: DividerProps) => {
  return (
    <div
      className={twMerge(
        "border border-b-0 border-secondary-light z-50",
        className
      )}
    />
  );
};

export default Divider;
