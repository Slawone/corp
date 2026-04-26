import Link from "next/link";
import { DesktopMenu, Logo } from "@/components";
import { menuItems } from "@/data";

export const Header = () => {
  return (
    <header className="">
      <div className="">
        <Link href={'/'}>
          <Logo className={'w-20 md:w-30 h-auto fill-foreground'} />
        </Link>
        {/* menu */}
        <DesktopMenu items={menuItems} className={'hidden'} />
        {/* contacts button */}
        {/* theme button */}
      </div>
    </header>
  );
};
