import LeftSide from "./NavBarContent/LeftSide";
import RightSide from "./NavBarContent/RightSide";

function Navbar() {
  return (
    <div className="h-16 flex items-center justify-between px-6">
    <LeftSide/>
    <RightSide/>
  </div>
  );
}

export default Navbar;