import React, { useState } from "react";
import Modal from "react-modal";
import Brand from "./Brand";

Modal.setAppElement("#root");

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="tokyo_tm_about">
        <div className="description">
          <h3 className="name">Aneesh Gupta Vandanapu</h3>
          <h3 className="name">Developer</h3>
          <div className="description_inner">
            <div className="left">
              <p>
                Hi, I am a developer based out of Hyderabad with an experience in working with <b>Full Stack Web and App Development</b>.
                I also work in <b>Machine Learning</b> and <b>Artificial Intelligence</b>.
                I gained a lot of interest in <b>Blockchain</b> recently, and I am continuously trying to learn more about it. 
              </p>
              <p>
                Ping me if you are looking for an <b>Enthusiastic Developer</b> who is ready to take up any challenges.
              </p>
              <div className="tokyo_tm_button">
                <button onClick={toggleModal} className="ib-button">
                  Know More
                </button>
              </div>
              {/* END TOKYO BUTTON for Know More */}
              {/* Next: TOKYO Button for Resume */}
              <div className="tokyo_tm_button"> <br />
                <form target="_blank">
                  <button formaction="https://drive.google.com/file/d/15rO-jioFZKQrzixAlol__WTdiQeUJX-6/view?usp=sharing" className="ib-button">Resume</button><br />
                </form>
              </div>
            </div>
            {/* END LEFT */}
            <div className="right">
              <ul>
                <li>
                  <p>
                    <span>Birthday:</span>07.03.2000
                  </p>
                </li>
                <li>
                  <p>
                    <span>Age:</span>21
                  </p>
                </li>
                <li>
                  <p>
                    <span>Address:</span>Hyderabad, India
                  </p>
                </li>
                <li>
                  <p>
                    <span>Email:</span>
                    <a href="mailto:mail@gmail.com">aneeshguptavandanapu@gmail.com</a>
                  </p>
                </li>
                <li>
                  <p>
                    <span>Phone:</span>
                    <a href="tel:+770221770505">+91 939 195 89 19</a>
                  </p>
                </li>
                <li>
                  <p>
                    <span>Study:</span>BML Munjal University
                  </p>
                </li>
              </ul>
              {/* END UL */}
            </div>
            {/* END RIGHT */}
          </div>
          {/* END DESCRIPTION INNER */}
        </div>
      </div>

      {/* START ABOUT POPUP BOX */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_about">
          <button className="close-modal" onClick={toggleModal}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END POPUP CLOSE BUTTON */}
          <div className="box-inner">
            <div className="description_wrap scrollable">
              <div className="KnowMore">
                <span className="infoHead">Hey</span>
                <p>I was introduced to programming in my 8th class and that is when I knew I wanted to be a software engineer when I grew up. I used to love coding complex programs and it made me happy. I then pursued Computer Science Engineering at BML Munjal University</p>
                <p>I have worked in multiple fields in the last 4 years. I started with UI/UX internships in my first year and my interest in programming made me take up challenging machine learning projects such as Human Robot Interaction Model in Regional Language and Object Detection and Alert System for visually impaired people.</p>
                <p>I took up Blockchain as one of my optional subjects in my 7th semester and I have been fascinated by it ever since. I also worked on a project to verify and store user KYC on Ethereum Blockchain for simplifying the KYC verification process. I am still working on learning Blockchain and its concepts in-depth and trying to work on more Blockchain projects.</p> <br />
                <p>Please reach out to me if you have any interesting opportunities in Blockchain or Machine Learning.</p>
              </div>
              <div className="my_box">
                <div className="left">
                  <div className="about_title">
                    <h3>Developer Skills</h3>
                  </div>
                  {/* END ABOUT TITLE */}

                  <div className="tokyo_progress">

                    <div className="progress_inner" data-value="90">
                      <span>
                        <span className="label">Programming</span>
                        <span className="number">90%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div className="bar_in" style={{width: 90 + '%'}}></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="progress_inner" data-value="85">
                      <span>
                        <span className="label">UI/UX</span>
                        <span className="number">85%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div className="bar_in" style={{width: 85 + '%'}}></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="80">
                      <span>
                        <span className="label">Machine Learning and AI</span>
                        <span className="number">80%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                        <div className="bar_in" style={{width: 80 + '%'}}></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="60">
                      <span>
                        <span className="label">Blockchain</span>
                        <span className="number">60%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                        <div className="bar_in" style={{width: 60 + '%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* END PROGRESS */}
                </div>
                {/* END LEFT */}

                <div className="right">
                  <div className="about_title">
                    <h3>Language Skills</h3>
                  </div>
                  {/* END TITLE */}
                  <div className="tokyo_progress">
                    <div className="progress_inner" data-value="90">
                      <span>
                        <span className="label">English</span>
                        <span className="number">90%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                        <div className="bar_in" style={{width: 90 + '%'}}></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="90">
                      <span>
                        <span className="label">Telugu</span>
                        <span className="number">90%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                        <div className="bar_in" style={{width: 90 + '%'}}></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="80">
                      <span>
                        <span className="label">Hindi</span>
                        <span className="number">80%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                        <div className="bar_in" style={{width: 85 + '%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* EDN TOKYO PROGRESS */}
                </div>
                {/* END RIGHT */}
              </div>
              {/* END MYBOX */}

              <div className="about_title flex-container my_box">
                <div>
                  <h3>Blockchain</h3>
                  <ul>
                    <li>Solidity</li>
                    <li>DEFI</li>
                    <li>Ethereum 2.0</li>
                    <li>Polkadot</li>
                  </ul>
                </div>
                <div>
                  <h3>Full Stack</h3>
                  <ul>
                    <li>HTML {"&"} CSS</li>
                    <li>JavaScript</li>
                    <li>React JS</li>
                    <li>React Native</li>
                    <li>Flutter</li>
                  </ul>
                </div>
                <div>
                  <h3>Programming</h3>
                  <ul>
                    <li>Java</li>
                    <li>Python</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>Dart</li>
                  </ul>
                </div>
                <div>
                  <h3>UI/UX</h3>
                  <ul>
                    <li>Wireframing</li>
                    <li>Prototyping</li>
                    <li>Adobe Xd</li>
                    <li>Illustrator</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </Modal>
      {/* END ABOUT POPUP BOX */}
    </>
  );
};

export default About;
