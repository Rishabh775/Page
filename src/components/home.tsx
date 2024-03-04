import { twMerge } from "tailwind-merge";

interface HomeProps {
  children: React.ReactNode;
  className?: string;
}
export default function Home({ children, className }: HomeProps) {
  return (
    <div
      className={twMerge(
        `bg-white rounded-2xl h-fit max-w-8xl mx-auto relative `,
        className
      )}
    >
      {children}
    </div>
  );
}
