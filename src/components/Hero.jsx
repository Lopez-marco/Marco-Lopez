import React from "react";
import Texty from "rc-texty";

const Hero = (props) => {
  return (
    <div class="Hero-Area">
      <div class="jasti5v">
        <div class="extra-padding">
          <div class="padding-area">
            <h1 class="Name-area">
              <Texty duration="2000">Marco Lopez</Texty>{" "}
            </h1>
            <h3 class="developer">
              <Texty duration="2000">Junior Web Developer</Texty>
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
