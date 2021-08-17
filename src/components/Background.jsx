import React, { useState } from "react";
import Modal from "react-modal";
import Social from "./Social";

Modal.setAppElement("#root");

const Background = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }

  return (
    <>
      <div className="tokyo_tm_news">
        <div className="tokyo_tm_title">
          <div className="title_flex">
            <div className="left">
              <span>Background</span>
              <h3>Work Experience</h3>
            </div>
          </div>
        </div>
        {/* END TITLE */}

        <div>
          <h3 className="name">Product Engineer</h3>
          <h3 className="name_italic">Smart Energy Water (Jan 2021-Present)</h3>
          <p>
            <ul>
              <li>Managing SQL Database for SEW's product, Smart Customer Mobile</li>
              <li>Scheduling jobs in Talend ESB for automating database tasks</li>
            </ul>
          </p>
        </div>

        <div>
          <h3 className="name">Full Stack Web Developer - Lendskart.com</h3>
          <h3 className="name_italic">SRS Capital (Oct 2020 - Nov 2020) - Freelance</h3>
          <p>
            <ul>
              <li>Building a full-stack website lendskart.com that showcases SRS Capital's new venture</li>
              <li>Please check UI/UX tab in Projects page to know more about Lendskart.com and SRS Capital</li>
            </ul>
          </p>
        </div>

        <div>
          <h3 className="name">UI/UX Flutter Developer</h3>
          <h3 className="name_italic">cvDragon NextGen Resume Builder (Jun 2020 - Jul 2020)</h3>
          <p>
            <ul>
              <li>Building beautiful and user-friendly UI/UX for CvDragon Resume building application</li>
              <li>Bringing the UI/UX to life using Flutter and building responsive mobile applications using Dart</li>
              <li>Please check UI/UX tab in Projects page to know more about my work for cvDragon</li>
            </ul>
          </p>
        </div>

        <div>
          <h3 className="name">UI/UX Lead Web Designer - KHASM</h3>
          <h3 className="name_italic">GoPro Advanced Engineering Solutions (May 2019 - Jul 2019)</h3>
          <p>
            <ul>
              <li><b>Design Team Head</b> for Khasm - mobile clothing application</li>
              <li>Creating user-friendly UI/UX for Khasm application</li>
              <li>Developing and deploying the application for both Android and iOS</li>
              <li>Please check UI/UX tab in Projects page to know more about my work for KHASM</li>
            </ul>
          </p>
        </div>

        <div className="tokyo_tm_title">
          <div className="title_flex">
            <div className="left">
              <h3>Academics</h3>
            </div>
          </div>
        </div>
        {/* END TITLE */}

        <div>
          <h3 className="name">BML Munjal University</h3>
          <h3 className="name_italic">BTech - CSE, Class of 2021</h3>
          <p>
            <b>CGPA - 8.21</b>
          </p>
        </div>

        <div>
          <h3 className="name">Sri Chaitanya Junior Kalasala</h3>
          <h3 className="name_italic">Intermediate - Telangana Board, 2015 - 2017</h3>
          <p>
            <b>95.6 %</b>
          </p>
        </div>

        <div>
          <h3 className="name">Johnson Grammar School (ICSE)</h3>
          <h3 className="name_italic">School, Class of 2015</h3>
          <p>
            <b>91 %</b>
          </p>
        </div>

      </div>
    </>
  );
};

export default Background;
