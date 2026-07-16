import Nav from "@/components/Nav";
import PageFrame from "@/components/PageFrame";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Nav />
      <main className="flex-1 flex flex-col">{children}</main>
      <PageFrame />
    </div>
  );
}
