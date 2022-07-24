import React from 'react'

function Pin(props) {
  const { size, imgSrc, name, link } = props.data
  return (
    <div className={`${size} pin`}>
      <a href={link}>
        <img className="mainPic" src={imgSrc} alt={name} />
      </a>

      <div className="content">
        <h3>{name}</h3>
        <div className="search">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIYT8zI4FYMnscype7lkaHhZxmdDEV5lQ7SA&usqp=CAU"
            alt="search"
          />
        </div>
      </div>
    </div>
  )
}

export default Pin
