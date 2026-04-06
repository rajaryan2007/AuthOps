import { auth0 } from "@/lib/auth0";
import NavbarServer from "@/components/NavbarServer";
import HomePageClient from "@/components/HomePageClient";

export default async function Home() {
  const session = await auth0.getSession();

  return (
    <>
      <NavbarServer />
      <HomePageClient isLoggedIn={!!session?.user} />
    </>
  );
}
