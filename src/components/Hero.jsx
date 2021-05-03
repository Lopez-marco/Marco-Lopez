import React from "react";
import Texty from "rc-texty";
import Typewriter from "typewriter-effect";

const Hero = (props) => {
  return (
    <div class="Hero-Area">
      <div class="jasti5v">
        <div class="extra-padding">
          <div class="padding-area">
            <h1 class="Name-area">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Marco Lopez")
                    .changeCursor(" ")
                    .start();
                }}
              />
            </h1>
            <h3 class="developer">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                  .changeCursor(" ")
                  .pauseFor(2000)
                  .changeCursor("|")
                  .pauseFor(1000)
                  .typeString("Web Developer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Back End Developer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Front End Developer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Full Stack Developer")
                  .start();
                  // loop: true
                }}
              />
            </h3>
            <p class="Quote-area">
              <Texty duration="2000">
                Whatever you do, work heartily, as for the Lord and not for men,
              </Texty>
            </p>
            <p class="Quote-area">
              <Texty duration="2000">Colossians 3:23</Texty>
            </p>
          </div>
          <div id="about"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
