"use client";
import { cn } from "@/lib/utils";
import { useRouter, usePathname } from "next/navigation";

export const Footer = ({
  pages,
}: {
  pages: { name: string; path: string }[];
}) => {
  const router = useRouter();
  const pathName = usePathname();
  return (
    <footer className="w-full overflow-hidden rounded-t-xl shadow-up">
      <nav className="flex h-full grow items-center justify-evenly">
        {pages.map((page) => (
          <button
            key={page.path}
            className={cn(
              "flex h-full w-full flex-col items-center justify-center py-5",
              pathName === page.path ? "bg-accent" : "bg-card",
            )}
            onClick={() => router.push(page.path)}
          >
            <span>{page.name}</span>
          </button>
        ))}
      </nav>
    </footer>
  );
};
