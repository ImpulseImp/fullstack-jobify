import { UserButton } from "@clerk/nextjs";
import LinksDropDown from "./LinksDropDown";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="lf:px-24 flex items-center justify-between bg-muted px-4 py-4 sm:px-16">
      <div>
        <LinksDropDown />
      </div>

      <div className="flex items-center gap-x-4">
        <ThemeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  );
};
export default Navbar;
