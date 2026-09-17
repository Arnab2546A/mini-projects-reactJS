import Navbar from "./NavBar/Navbar";
import LeftPart from "./BodyComp/leftPart/LeftPart";
import RightPart from "./BodyComp/rightPart/RightPart";
const Section1 = () => {
  return (
   <div className="h-screen bg-[#fffdf2]">

  <Navbar/>
  <div className="flex gap-4 p-4 px-10 h-[calc(100%-64px)]">
<LeftPart/>
<RightPart/>
  </div>

</div>
  )
}

export default Section1