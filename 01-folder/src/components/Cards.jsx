import React from 'react'

function Card(props) {
  return (
    <>
    <div className="profile-card">

  {/* Top Section */}
  <div className="card-top">

    <img
      className="profile-pic"
      src={props.pic}
      alt="Profile Picture"
    />

    <div className="profile-info">
      <h2 className="profile-name">{props.name}</h2>

      <div className="tech-list">
        <span className="tech-tag">{props.tech_tag[0]}</span>
        <span className="tech-tag">{props.tech_tag[1]}</span>
        <span className="tech-tag">{props.tech_tag[2]}</span>
      </div>
    </div>

  </div>


  {/* Middle Section */}
  <div className="card-middle">

    <p className="profile-description">
      {props.desc}
    </p>

  </div>


  {/* Bottom Section */}
  <div className="card-bottom">

    <button className="apply-btn">
      Apply Now
    </button>

  </div>

</div>
</>
  )
}

export default Card