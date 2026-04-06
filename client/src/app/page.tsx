import { auth0 } from "@/lib/auth0";
import NavbarServer from "@/components/NavbarServer";
import HomePageClient from "@/components/HomePageClient";
import prisma from "@/lib/prisma";

export default async function Home() {
  const session = await auth0.getSession();
  
  let dbUserId = "";
  if (session?.user) {
    const dbUser = await prisma.user.findUnique({ where: { authOId: session.user.sub } });
    if (dbUser) dbUserId = dbUser.id;
  }

  return (
    <>
      <NavbarServer />
      <HomePageClient isLoggedIn={!!session?.user} userId={dbUserId} />
    </>
  );
}
