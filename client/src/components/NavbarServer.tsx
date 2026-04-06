import { auth0 } from "@/lib/auth0";
import prisma from "@/lib/prisma";
import Navbar from "./Navbar";

export default async function NavbarServer() {
  const session = await auth0.getSession();

  let secretId: string | undefined;
  if (session?.user) {
    const user = await prisma.user.findUnique({
      where: { authOId: session.user.sub },
    });
    if (user) secretId = user.id;
  }

  return (
    <Navbar
      isLoggedIn={!!session?.user}
      userName={session?.user?.name || undefined}
      userPicture={session?.user?.picture || undefined}
      secretId={secretId}
    />
  );
}
