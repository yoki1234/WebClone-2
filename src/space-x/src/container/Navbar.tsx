import NavbarBtn from "../components/NavbarBtn";
import { ReactComponent as Logo } from "../assets/logo.svg";
import HamburgerMenu from "../components/HamburgerMenu";

type NavbarProp = {
  navbarContent: string[];
};

function Navbar({ navbarContent }: NavbarProp) {
    
  const menuText = navbarContent.splice(0, navbarContent.length - 1);

  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex items-center gap-6">
        <div className="w-56">
          <Logo />
        </div>
        <div className="flex ">
          {menuText.map((item) => {
            return <NavbarBtn key={item} btnText={item} />;
          })}
        </div>
      </div>
      <div className="flex items-center gap-3">
        <NavbarBtn btnText={navbarContent[navbarContent.length - 1]} />
        <div className="w-4 h-4">
          <HamburgerMenu />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
