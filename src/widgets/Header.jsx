import { Logo } from "@/components";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="">
      <div className="">
        <Link href={'/'}>
          <Logo className={'w-20 md:w-30 h-auto fill-foreground'} />
        </Link>
        {/* menu */}
        {/* contacts button */}
        {/* theme button */}
      </div>
    </header>
  );
};
