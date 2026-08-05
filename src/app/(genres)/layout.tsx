import { GenreNav } from "@/components/genres/GenreNav";

// Shared by every genre page (illustrations, graphic-design, henna, paintings,
// animations, residencies-workshops-exhibitions, about) — the home page lives
// outside this route group at app/page.tsx, so it never gets the nav.
export default function GenresLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GenreNav />
      {children}
    </>
  );
}
