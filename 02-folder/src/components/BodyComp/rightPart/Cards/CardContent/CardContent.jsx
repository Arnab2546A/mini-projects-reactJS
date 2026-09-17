import { ArrowRight } from "lucide-react";
const CardContent = (props) => {
  return (
    <>
      <div className="w-10 h-10 rounded-full bg-white/90 text-black flex items-center justify-center font-bold">
    {props.id+1}
  </div>

  {/* Description */}
  <div className="mt-auto mb-auto">
    <p className="text-lg font-medium max-w-[250px] pt-30 text-white">
      {props.desc}
    </p>
  </div>

  {/* Bottom Buttons */}
  <div className="flex items-center justify-between">

    {/* Status */}
    <button className="px-4 py-2 rounded-full text-white text-sm font-medium"
    style={{backgroundColor:props.color}}
    >
      {props.status}
    </button>

    {/* Arrow */}
    <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200">
      <ArrowRight className="w-5 h-5" />
    </button>

  </div>
    </>
  )
}
export default CardContent