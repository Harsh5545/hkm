import React from "react";
import Images from '/course/HomeExplore.webp';
import Teach from '/course/Teach.webp';
import Skill from '/course/Skill.webp';
import Button from "../../components/Button/Button";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

function HomeExplore() {
  return (
    <div className="grid grid-cols-2 ">
          <div className="">
              <img width={700} className="h-[80vh]"  src={Images} alt=""/>
      </div>
      <div className="flex justify-center flex-col">
        <h2 className="text-3xl">EXPLORE THE CREATION OF</h2>
        <h1 className="text-4xl font-medium mb-5">EXISTING OPPORTUNITIES</h1>
        <p className="text-lg mb-5">
          Enjoy each step along the way that takes you into the unknown space.
          Let go and allow your imagination to become alive
        </p>
        <ul className="text-lg mb-5">
          <li>
            <KeyboardDoubleArrowRightIcon />
            Visualization
          </li>
          <li>
        
            <KeyboardDoubleArrowRightIcon />
            Pre-Production
          </li>
          <li>
            <KeyboardDoubleArrowRightIcon />
            Production
          </li>
          <li>
            <KeyboardDoubleArrowRightIcon />
            Post-Preduction
          </li>
        </ul>
        <Button value={"Book A Free Demo Class"} />
        <div className="grid grid-cols-2 mt-5">
                  <div>
                      <img src={Teach} width={100} alt=""/>
            <h2 className="text-2xl">PROFESSIONAL MASTERS</h2>
           <p className="text-lg"> Masters help Imagineers to bring their imagination to life. Making
            the course more simpler to understand.</p>
          </div>
                  <div>
                      <img src={Skill} width={100} alt=""/>
            <h2 className="text-2xl">SKILL BASED COACHING</h2>
            <p className="text-lg">
              Skill-based training will benefit you in ways beyond your
              imagination & opportunity to discover a hidden talent.
            </p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeExplore;
