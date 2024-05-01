import { Footer } from "@/components/layout/footer";

const pages = [
  { name: "First Page", path: "/first" },
  { name: "Second Page", path: "/second" },
  { name: "Third Page", path: "/third" },
];

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="centered h-full w-full flex-1 flex-col py-5">
        {children}
      </main>
      <Footer pages={pages} />
    </>
  );
}
