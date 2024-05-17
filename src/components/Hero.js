import React from 'react'
import { RiHome2Line } from "react-icons/ri";

export function Hero() {
  return (
    <div className="hero">
      <h2 className="title">
        {" "}
        <span className='span-icon'>
          <RiHome2Line />
        </span>
        Greetings!
      </h2>
      <h1 className='hero-heading'>Amplifying businesses with innovative digital solutions!</h1>
    </div>
  );
}

// export default Hero