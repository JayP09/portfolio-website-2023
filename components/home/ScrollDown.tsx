import React from 'react'
import { UilArrowDown } from '@iconscout/react-unicons'

const ScrollDown = () => {
  return (
    <div className="ml-28 lg:ml-36 hidden md:block">
      <a href="#about" className="buttonFlex" aria-label="ScrollDown Button">
        <svg
          width="32px"
          height="32px"
          viewBox="0 0 247 390"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={{
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 1.5,
          }}
        >
          <path
            className="animate-[scroll_2s_ease_infinite]"
            d="M123.359,79.775l0,72.843"
            style={{
              fill: 'none',
              stroke: '#333333',
              strokeWidth: '20px',
            }}
          ></path>
          <path
            id="mouse"
            d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
            style={{
              fill: 'none',
              stroke: '#333333',
              strokeWidth: '20px',
            }}
          ></path>
        </svg>
        <span className="text-titleColor font-medium mr-1 ml-[2px]">
          Scroll Down
        </span>
        <UilArrowDown className="text-titleColor text-xl animate-bounce" />
      </a>
    </div>
  )
}

export default ScrollDown
