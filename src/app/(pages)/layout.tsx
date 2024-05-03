import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { HeaderOptionBar } from "@/components/layout/header-optionbar";

const pages = [
  { name: "Words", path: "/words" },
  { name: "Games", path: "/games" },
];

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header title={"Words Memo"} />
      <HeaderOptionBar
        select={["animal", "verb"]}
        button1="New"
        button2="Edit"
      />
      <main className="flex h-full w-full flex-1 flex-col px-3 py-5">
        {children}
      </main>
      <Footer pages={pages} />
    </>
  );
}
