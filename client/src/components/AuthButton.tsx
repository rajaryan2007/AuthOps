import { auth0 } from "@/lib/auth0";
import { LogOut, User, Copy } from "lucide-react";
import Image from "next/image";
import prisma from "@/lib/prisma";

export default async function AuthButton() {
  const session = await auth0.getSession();

  if (session?.user) {
    const user = await prisma.user.findUnique({
      where: { authOId: session.user.sub },
    });

    return (
      <div className="flex items-center gap-3">
        {/* User avatar pill */}
        <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-card border border-border">
          {session.user.picture ? (
            <Image
              src={session.user.picture}
              alt={session.user.name || "User"}
              width={24}
              height={24}
              className="rounded-full"
            />
          ) : (
            <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center">
              <User className="w-3.5 h-3.5 text-primary" />
            </div>
          )}
          <span className="text-xs font-medium text-foreground hidden sm:block">
            {session.user.name}
          </span>
        </div>

        {/* Telegram Secret ID chip */}
        {user && (
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/15">
            <Copy className="w-3 h-3 text-primary/60" />
            <span className="text-[11px] font-mono text-primary/80 select-all cursor-copy" title="Your Telegram linking command">
              /start {user.id.slice(0, 8)}…
            </span>
          </div>
        )}

        {/* Logout */}
        <a
          href="/auth/logout"
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-destructive rounded-full hover:bg-destructive/10 border border-transparent hover:border-destructive/20 transition-all"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Logout</span>
        </a>
      </div>
    );
  }

  return null; // Navbar handles the Sign In button now
}
