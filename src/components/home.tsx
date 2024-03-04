import { twMerge } from "tailwind-merge";

interface HomeProps {
  children: React.ReactNode;
  className?: string;
}
export default function Home({ children, className }: HomeProps) {
  return (
    <div
      className={twMerge(
        `bg-white rounded-xl h-fit w-[1490px] mx-auto relative `,
        className
      )}
    >
      {children}
    </div>
  );
}
