import { auth0 } from "@/lib/auth0";
import { LogIn, LogOut, User } from "lucide-react";
import Image from "next/image";

export default async function AuthButton() {
  const session = await auth0.getSession();

  if (session?.user) {
    return (
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3 px-3 py-1.5 glass rounded-full shadow-[0_0_15px_rgba(139,92,246,0.1)]">
          {session.user.picture ? (
            <Image
              src={session.user.picture}
              alt={session.user.name || "User avatar"}
              width={28}
              height={28}
              className="rounded-full"
            />
          ) : (
            <div className="w-7 h-7 rounded-full bg-brand/20 flex items-center justify-center">
              <User className="w-4 h-4 text-brand" />
            </div>
          )}
          <span className="text-sm font-medium text-gray-200 hidden sm:block pr-2">
            {session.user.name}
          </span>
        </div>
        <a
          href="/auth/logout"
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all group active:scale-95 text-red-400 hover:text-red-300 border border-red-500/20 hover:border-red-500/40 hover:bg-red-500/10 rounded-xl"
        >
          <LogOut className="w-4 h-4" />
          <span>Logout</span>
        </a>
      </div>
    );
  }

  return (
    <a
      href="/auth/login"
      className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold transition-all relative group active:scale-95 text-white overflow-hidden rounded-xl bg-brand hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]"
    >
      <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-500 -translate-x-full skew-x-12" />
      <LogIn className="w-4 h-4 relative z-10" />
      <span className="relative z-10">Sign In</span>
    </a>
  );
}
