import React from 'react'

function Card(props) {
  return (
    <>
    <div className="w-[350px] bg-white rounded-xl p-5 shadow-[0_4px_15px_rgba(0,0,0,0.1)]">

  {/* Top Section */}
  <div className="flex items-center gap-[15px] pb-[15px] border-b border-[#ddd]">

    <img
      className="w-20 h-20 rounded-full object-cover"
      src={props.pic}
      alt="Profile Picture"
    />

    <div className="flex-1">
      <h2 className="m-0 mb-[10px] text-xl">{props.name}</h2>

      <div className="flex flex-wrap gap-[6px]">
        <span className="py-[5px] px-2 bg-[#e8f0ff] text-[#3158c9] rounded-[5px] text-xs">{props.tech_tag[0]}</span>
        <span className="py-[5px] px-2 bg-[#e8f0ff] text-[#3158c9] rounded-[5px] text-xs">{props.tech_tag[1]}</span>
        <span className="py-[5px] px-2 bg-[#e8f0ff] text-[#3158c9] rounded-[5px] text-xs">{props.tech_tag[2]}</span>
      </div>
    </div>

  </div>


  {/* Middle Section */}
  <div className="m-0 text-[#666] text-sm leading-[1.5]">

    <p className="profile-description">
      {props.desc}
    </p>

  </div>


  {/* Bottom Section */}
  <div className="pt-[15px] border-t border-[#ddd]">

    <button className="w-full p-[10px] border-0 rounded-[6px] bg-[#2563eb] text-white text-[15px] cursor-pointer hover:bg-[#1d4ed8]">
      Apply Now
    </button>

  </div>

</div>
</>
  )
}

export default Card