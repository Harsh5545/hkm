import React from "react";
import Images from "/course/HomeExplore1.webp";
import Teach from "/course/Teach.webp";
import "./homeStyles.css";
import Skill from "/course/Skill.webp";
import Button from "../../components/Button/Button";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { useNavigate } from "react-router-dom";

function HomeExplore() {
  const toNavigate = useNavigate();
  return (
    <div className="grid mt-10 md:grid-cols-2 overflow-hidden grid-cols-1 pb-[5rem]">
      <div className="">
        <img
          width={800}
          className="h-[40vh] p-2  md:h-[80vh]"
          src={Images}
          alt=""
        />
      </div>
      <div className="flex p-2 justify-center flex-col">
        <h2 className="text-3xl">EXPLORE THE CREATION OF</h2>
        <h1 className="text-4xl font-bold mb-5">EXISTING OPPORTUNITIES</h1>
        <p className="text-lg mb-5">
          Enjoy each step along the way that takes you into the unknown space.
          Let go and allow your imagination to become alive
        </p>
        <ul className="text-lg flex gap-4 flex-col mb-8">
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
        <Button
          className="btn"
          onClick={() => toNavigate("/contact")}
          value={"Book A Free Demo Class"}
        />
        <div className="grid grid-cols-2 ">
          <div className="tooltip-container">
            <img
              src={Teach}
              className="rounded-full  hover:p-5"
              width={100}
              alt=""
            />
            <div className="tooltip">
              <h2 className="text-2xl">PROFESSIONAL MASTERS</h2>
              <p className="text-lg">
            
                Masters help Imagineers to bring their imagination to life.
                Making the course more simpler to understand.
              </p>
            </div>
          </div>
          <div className="tooltip-container">
            <img
              src={Skill}
              className="rounded-full hover:p-5  "
              width={100}
              alt=""
            />
            <div className="tooltip">
              <h2 className="text-2xl">SKILL BASED COACHING</h2>
              <p className="text-lg">
                Skill-based training will benefit you in ways beyond your
                imagination & opportunity to discover a hidden talent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeExplore;
