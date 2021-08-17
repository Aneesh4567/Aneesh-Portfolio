import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import Modal from "react-modal";
import Social from "./Social";

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);

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
  function toggleModalFive() {
    setIsOpen5(!isOpen5);
  }
  function toggleModalSix() {
    setIsOpen6(!isOpen6);
  }
  function toggleModalSeven() {
    setIsOpen7(!isOpen7);
  }
  function toggleModalEight() {
    setIsOpen8(!isOpen8);
  }

  return (
    <>
      <SimpleReactLightbox>
        <div className="tokyo_tm_portfolio">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                <span>Projects</span>
                <h3>Developer Portfolio</h3>
              </div>
            </div>
          </div>
          {/* END TOKYO_TM_TITLE */}
          <div className="portfolio_filter">
            <Tabs>
              <TabList>
                <Tab>All</Tab>
                <Tab>UI/UX</Tab>
                <Tab>ML/AI</Tab>
                <Tab>Blockchain</Tab>
                <Tab>Others</Tab>
              </TabList>
              {/* END TABLIST */}
              <div className="list_wrapper">
                <SRLWrapper>
                  <TabPanel>
                    <ul className="portfolio_list">

                      {/* BLOCKCHAIN PROJECT - KYC USING SOLIDITY ON ETHEREUM BLOCKCHAIN */}
                      {/* Take info from Chan's page */}
                      <li>
                        <div className="list_inner">
                          <div className="image" onClick={toggleModalOne}>
                            <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                            <div
                              className="main"
                              style={{
                                backgroundImage: "url(assets/img/news/KYC/KYCMainImage.PNG)",
                              }}
                            ></div>
                          </div>
                          {/* END IMAGE */}
                          <div className="details">
                            <div className="extra">
                              <p className="date">
                                Blockchain 
                              </p>
                            </div>
                            {/* END EXTRA */}

                            <h3 className="title" onClick={toggleModalOne}>
                              KYC using Solidity on Ethereum Blockchain
                            </h3>
                            <div className="tokyo_tm_read_more">
                              <a onClick={toggleModalOne}>
                                <span>Know More</span>
                              </a>
                            </div>
                            {/* END READ MORE BUTTON */}
                          </div>
                          {/* END DETAILS */}

                          {/* START MODAL */}
                          <Modal
                            isOpen={isOpen}
                            onRequestClose={toggleModalOne}
                            contentLabel="My dialog"
                            className="mymodal"
                            overlayClassName="myoverlay"
                            closeTimeoutMS={500}
                          >
                            <div className="tokyo_tm_modalbox_news">
                              <button className="close-modal" onClick={toggleModalOne}>
                                <img src="assets/img/svg/cancel.svg" alt="close icon" />
                              </button>
                              {/* END CLOSE ICON */}
                              <div className="box_inner">
                                <div className="description_wrap scrollable">
                                  <div className="image">
                                    <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                                    <div
                                      className="main"
                                      style={{
                                        backgroundImage: "url(assets/img/news/KYC/KYCMainImage.PNG)",
                                      }}
                                    ></div>
                                  </div>
                                  {/* END IMAGE */}
                                  <div className="details">
                                    <div className="extra">
                                    <p className="date">
                                        Blockchain
                                      </p>
                                    </div>
                                    <h3 className="title">
                                      KYC using Solidity on Ethereum Blockchain
                                    </h3>
                                  </div>
                                  {/* END DETAILS */}
                                  <div className="main_content ">
                                    <div className="descriptions">
                                      <p className="bigger">
                                        In my Blockchain course, we worked on developing a KYC on Ethereum Blockchain as our project. This project aimed at providing verified data of KYC users to banks on the Ethereum Blockchain. This will reduce the amount of resources and time spent by every bank for verifying a user's KYC everytime.
                                      </p>
                                      <p>
                                        This project makes KYC easier for customers as well as companies. Customers have to upload their KYC details onto the Blockchain only once and they will be saved for future use. When a customer tries to contact a bank, the back directly verifies the customer's KYC details from the Blockchain with the customer's permission and proceeds with their request. This makes the entire KYC process simpler and faster.
                                      </p>
                                      <p>
                                        <a href="https://github.com/Aneesh4567/KYC_Blockchain" target="_blank">Github Repo : KYC on Ethereum Blockchain</a>
                                      </p>
                                      <p>
                                        <b>In this project, </b><br />
                                        <b>React JS</b> is used for the frontend <br />
                                        <b>Solidity</b> is used to create smart contracts <br />
                                        <b>Truffle</b> is the virtual machine that interlinks the frontend with the backend, and <br />
                                        <b>Ganache CLI</b> is used to provide a working Ethereum testing platform to test the DApp before deploying it on the main blockchain
                                      </p>
                                      <img src="assets/img/news/KYC/KYCImageFlow.png" alt="KYC_Flow" />
                                    </div>
                                    {/* END DESCRIPTION */}
                                  </div>
                                </div>
                              </div>
                              {/* END BOX INNER */}
                            </div>
                            {/* END MODALBOX NEWS */}
                          </Modal>
                          {/* END MODAL */}
                        </div>
                      </li>
                      {/* END KYC BLOG */}

                      
                      {/* ML/AI - Human-Robot Interaction Model */}
                      {/* Take info from Report */}
                      <li>
                        <div className="list_inner">
                          <div className="image" onClick={toggleModalThree}>
                            <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                            <div
                              className="main"
                              style={{
                                backgroundImage: "url(assets/img/news/HumanRobotInteraction/HumanRobotInteractionMainImage.PNG)",
                              }}
                            ></div>
                          </div>
                          {/* END IMAGE */}
                          <div className="details">
                            <div className="extra">
                              <p className="date">
                                ML/AI 
                              </p>
                            </div>
                            {/* END EXTRA */}

                            <h3 className="title" onClick={toggleModalThree}>
                              Human-Robot Interaction Model in Telugu
                            </h3>
                            <div className="tokyo_tm_read_more">
                              <a onClick={toggleModalThree}>
                                <span>Know More</span>
                              </a>
                            </div>
                            {/* END READ MORE BUTTON */}
                          </div>
                          {/* END DETAILS */}

                          {/* START MODAL */}
                          <Modal
                            isOpen={isOpen3}
                            onRequestClose={toggleModalThree}
                            contentLabel="My dialog"
                            className="mymodal"
                            overlayClassName="myoverlay"
                            closeTimeoutMS={500}
                          >
                            <div className="tokyo_tm_modalbox_news">
                              <button className="close-modal" onClick={toggleModalThree}>
                                <img src="assets/img/svg/cancel.svg" alt="close icon" />
                              </button>
                              {/* END CLOSE ICON */}
                              <div className="box_inner">
                                <div className="description_wrap scrollable">
                                  <div className="image">
                                    <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                                    <div
                                      className="main"
                                      style={{
                                        backgroundImage: "url(assets/img/news/HumanRobotInteraction/HumanRobotInteractionMainImage.PNG)",
                                      }}
                                    ></div>
                                  </div>
                                  {/* END IMAGE */}
                                  <div className="details">
                                    <div className="extra">
                                    <p className="date">
                                        ML/AI
                                      </p>
                                    </div>
                                    <h3 className="title">
                                      Human-Robot Interaction Model in Telugu
                                    </h3>
                                  </div>
                                  {/* END DETAILS */}
                                  <div className="main_content ">
                                    <div className="descriptions">
                                      <p className="bigger">
                                        In today’s world, human-robot interaction is very important. This technology has seen great heights in the recent past but advancements have been limited in the speech interaction to the English language only. There are many regional languages all around the world and we feel the need for robots to understand these regional languages also. 
                                      </p>
                                      <p>
                                        We are working on a model that will understand Telugu (our native language) and give audio output based on the input it receives.
                                      </p>
                                      <p>
                                        We are attempting to build a speech interactive model that makes the robot understand sentences in regional language and respond to it. We are currently working on the Telugu language. This model will take user voice input, convert it to Telugu text, do the necessary processing, and respond with an audio message of its own.
                                      </p>
                                      <p>
                                        Social Robots play an important role in people’s lives in the future. From waking us up to interacting with customers at the office, they become the new normal, and speech is one of the most important HRIs between humans and robots. But there are various languages in this world which makes the robot less speech interactive with people. As India is a country of different languages and cultures, we want robots to communicate with people in their respective regional languages. And our project can be extended to various languages, more functionalities can be implemented and make robots speak to people in their regional language.
                                      </p>
                                      <p>
                                        <a href="https://drive.google.com/file/d/1PqOJSLByK61bzh_9ZcMVDT_l0AVpFDAq/view?usp=sharing" target="_blank">Report : Human Robot Interaction Model in Telugu</a>
                                      </p>
                                      <p>
                                        <a href="https://github.com/Aneesh4567/Human-Robot-Interaction-Telugu" target="_blank">Github Repo : Human Robot Interaction Model in Telugu</a>
                                      </p>
                                    </div>
                                    {/* END DESCRIPTION */}
                                  </div>
                                </div>
                              </div>
                              {/* END BOX INNER */}
                            </div>
                            {/* END MODALBOX NEWS */}
                          </Modal>
                          {/* END MODAL */}
                        </div>
                      </li>
                      {/* END Human-Robot BLOG */}

                      
                      {/* ML/AI - Object Detection and Alert System for visually impaired people */}
                      {/* Take info from Report */}
                      <li>
                        <div className="list_inner">
                          <div className="image" onClick={toggleModalTwo}>
                            <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                            <div
                              className="main"
                              style={{
                                backgroundImage: "url(assets/img/news/ObjectDetection/ObjectDetectionMainImage.PNG)",
                              }}
                            ></div>
                          </div>
                          {/* END IMAGE */}
                          <div className="details">
                            <div className="extra">
                              <p className="date">
                                ML/AI 
                              </p>
                            </div>
                            {/* END EXTRA */}

                            <h3 className="title" onClick={toggleModalTwo}>
                              Object Detection and Alert System for visually impaired people
                            </h3>
                            <div className="tokyo_tm_read_more">
                              <a onClick={toggleModalTwo}>
                                <span>Know More</span>
                              </a>
                            </div>
                            {/* END READ MORE BUTTON */}
                          </div>
                          {/* END DETAILS */}

                          {/* START MODAL */}
                          <Modal
                            isOpen={isOpen2}
                            onRequestClose={toggleModalTwo}
                            contentLabel="My dialog"
                            className="mymodal"
                            overlayClassName="myoverlay"
                            closeTimeoutMS={500}
                          >
                            <div className="tokyo_tm_modalbox_news">
                              <button className="close-modal" onClick={toggleModalTwo}>
                                <img src="assets/img/svg/cancel.svg" alt="close icon" />
                              </button>
                              {/* END CLOSE ICON */}
                              <div className="box_inner">
                                <div className="description_wrap scrollable">
                                  <div className="image">
                                    <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                                    <div
                                      className="main"
                                      style={{
                                        backgroundImage: "url(assets/img/news/ObjectDetection/ObjectDetectionMainImage.PNG)",
                                      }}
                                    ></div>
                                  </div>
                                  {/* END IMAGE */}
                                  <div className="details">
                                    <div className="extra">
                                    <p className="date">
                                        ML/AI
                                      </p>
                                    </div>
                                    <h3 className="title">
                                      Object Detection and Alert System for visually impaired people
                                    </h3>
                                  </div>
                                  {/* END DETAILS */}
                                  <div className="main_content ">
                                    <div className="descriptions">
                                      <p className="bigger">
                                        Blind and visually impaired people have always faced difficulty in our country. Though the risk of blindness due to numerous diseases has decreased by the means of medications given, it is a well-known fact that after a particular age many people face visual impairment and they fear to miss out on opportunities in life. 
                                      </p>
                                      <p>
                                        With some knowledge, we have proposed a system in which an application can help a blind person using object detection, send alerts and help in navigation via identification of objects present in the surrounding through its camera. This identification and understanding will set out an audio output through which they can achieve better mobility using their hearing abilities.
                                      </p>
                                      <p>
                                        Using computer vision and YOLO(You Only Look Once), our application will be able to detect and recognise objects in front. An alarm system is designed and implemented to notify the user about the recognized objects using a voice assistant and give out a warning if there is any problematic situation.
                                      </p>
                                      <div className="quotebox">
                                        <div className="icon">
                                          <img
                                            className="svg"
                                            src="assets/img/svg/quote.svg"
                                            alt="tumb"
                                          />
                                        </div>
                                        <p>
                                          Our application interface is very simple and easy to use. The application helps in real time object detection and alerts the user using audio notifications. Another feature is that these notifications are not sent continuously, to avoid confusing the user. Instead they are sent after a specific time interval.
                                        </p>
                                      </div>
                                      {/* END QUOTEBOX */}
                                      <p>
                                        <a href="https://drive.google.com/file/d/1xOgMY0URSxCD8Xd6L1uAlfvm3_vLXbEP/view?usp=sharing" target="_blank">Report : Object Detection and Alert System for Visually Impaired people</a>
                                      </p>
                                      <p>
                                        <a href="https://github.com/Aneesh4567/Object-Detection-for-Blind-People" target="_blank">Github Repo : Object Detection and Alert System for Visually Impaired people</a>
                                      </p>
                                    </div>
                                    {/* END DESCRIPTION */}
                                  </div>
                                </div>
                              </div>
                              {/* END BOX INNER */}
                            </div>
                            {/* END MODALBOX NEWS */}
                          </Modal>
                          {/* END MODAL */}
                        </div>
                      </li>
                      {/* END Object Detection BLOG */}

                      
                      {/* ML/AI - A Machine Learning Model on Disease Prediction - A Comparative Study */}
                      {/* Take info from Report */}
                      <li>
                        <div className="list_inner">
                          <div className="image" onClick={toggleModalFour}>
                            <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                            <div
                              className="main"
                              style={{
                                backgroundImage: "url(assets/img/news/ComparativeStudy/ComparativeStudyMainImage.PNG)",
                              }}
                            ></div>
                          </div>
                          {/* END IMAGE */}
                          <div className="details">
                            <div className="extra">
                              <p className="date">
                                ML/AI 
                              </p>
                            </div>
                            {/* END EXTRA */}

                            <h3 className="title" onClick={toggleModalFour}>
                              A Machine Learning Model on Disease Prediction - A Comparative Study
                            </h3>
                            <div className="tokyo_tm_read_more">
                              <a onClick={toggleModalFour}>
                                <span>Know More</span>
                              </a>
                            </div>
                            {/* END READ MORE BUTTON */}
                          </div>
                          {/* END DETAILS */}

                          {/* START MODAL */}
                          <Modal
                            isOpen={isOpen4}
                            onRequestClose={toggleModalFour}
                            contentLabel="My dialog"
                            className="mymodal"
                            overlayClassName="myoverlay"
                            closeTimeoutMS={500}
                          >
                            <div className="tokyo_tm_modalbox_news">
                              <button className="close-modal" onClick={toggleModalFour}>
                                <img src="assets/img/svg/cancel.svg" alt="close icon" />
                              </button>
                              {/* END CLOSE ICON */}
                              <div className="box_inner">
                                <div className="description_wrap scrollable">
                                  <div className="image">
                                    <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                                    <div
                                      className="main"
                                      style={{
                                        backgroundImage: "url(assets/img/news/ComparativeStudy/ComparativeStudyMainImage.PNG)",
                                      }}
                                    ></div>
                                  </div>
                                  {/* END IMAGE */}
                                  <div className="details">
                                    <div className="extra">
                                    <p className="date">
                                        ML/AI
                                      </p>
                                    </div>
                                    <h3 className="title">
                                      A Machine Learning Model on Disease Prediction - A Comparative Study
                                    </h3>
                                  </div>
                                  {/* END DETAILS */}
                                  <div className="main_content ">
                                    <div className="descriptions">
                                      <p className="bigger">
                                        In the era of machine learning and artificial intelligence playing a major role in the healthcare and diagnostics sector, it is a necessary yet a challenging task to predict diseases beforehand. Despite many advances in early prediction of diseases, the majority of patients have a poor prognosis and survival rate for such patients are low. 
                                      </p>
                                      <p>
                                        The goal of the project is to subject 4 different disease datasets of patient samples to machine learning algorithms. The aim is to predict the diseases using these machine learning models and do a comparative study on which algorithms will give the best results in the respective datasets of diseases.
                                      </p>
                                      <p>
                                        This paper describes how machine learning algorithms were used to predict four diseases namely - <b><i>Breast Cancer, Heart Disease, General Diseases and Liver Disease.</i></b> The number of lives one can save by predicting the disease beforehand is not just huge, but also very important in case of rapidly infectious diseases. Several classification algorithms are used in such cases to predict diseases, and are the reason for saving numerous lives. This paper is a comparative study on these machine learning algorithms used to predict diseases. It will answer your questions about which algorithm would be the best one to use for a particular disease.
                                      </p>
                                      <div className="quotebox">
                                        <div className="icon">
                                          <img
                                            className="svg"
                                            src="assets/img/svg/quote.svg"
                                            alt="tumb"
                                          />
                                        </div>
                                        <p>
                                          The comparative study yields the following results: <br />
                                          Support Vector Machine is the best algorithm to predict Breast Cancer. <br />
                                          Logistic Regression is the best against Heart and General Disease dataset. <br />
                                          Decision Tree yields best results for Liver Disease Dataset
                                        </p>
                                      </div>
                                      {/* END QUOTEBOX */}
                                      <p>
                                        <a href="https://drive.google.com/file/d/1S9AMYnh0NeFIu70IeGJxCCpq4c_xmk_K/view?usp=sharing" target="_blank">Report : A Machine Learning Model on Disease Prediction - A Comparative Study </a>
                                      </p>
                                    </div>
                                    {/* END DESCRIPTION */}
                                  </div>
                                </div>
                              </div>
                              {/* END BOX INNER */}
                            </div>
                            {/* END MODALBOX NEWS */}
                          </Modal>
                          {/* END MODAL */}
                        </div>
                      </li>
                      {/* END Comparative Study BLOG */}

                      
                      {/* UI/UX - cvDragon NextGen Resume Builder */}
                      {/* Take info from Adobe Xd */}
                      <li>
                        <div className="list_inner">
                          <div className="image" onClick={toggleModalFive}>
                            <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                            <div
                              className="main"
                              style={{
                                backgroundImage: "url(assets/img/news/cvDragon/cvDragonMainImage.PNG)",
                              }}
                            ></div>
                          </div>
                          {/* END IMAGE */}
                          <div className="details">
                            <div className="extra">
                              <p className="date">
                                UI/UX 
                              </p>
                            </div>
                            {/* END EXTRA */}

                            <h3 className="title" onClick={toggleModalFive}>
                              cvDragon Resume Builder
                            </h3>
                            <div className="tokyo_tm_read_more">
                              <a onClick={toggleModalFive}>
                                <span>Know More</span>
                              </a>
                            </div>
                            {/* END READ MORE BUTTON */}
                          </div>
                          {/* END DETAILS */}

                          {/* START MODAL */}
                          <Modal
                            isOpen={isOpen5}
                            onRequestClose={toggleModalFive}
                            contentLabel="My dialog"
                            className="mymodal"
                            overlayClassName="myoverlay"
                            closeTimeoutMS={500}
                          >
                            <div className="tokyo_tm_modalbox_news">
                              <button className="close-modal" onClick={toggleModalFive}>
                                <img src="assets/img/svg/cancel.svg" alt="close icon" />
                              </button>
                              {/* END CLOSE ICON */}
                              <div className="box_inner">
                                <div className="description_wrap scrollable">
                                  <div className="image">
                                    <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                                    <div
                                      className="main"
                                      style={{
                                        backgroundImage: "url(assets/img/news/cvDragon/cvDragonMainImage.PNG)",
                                      }}
                                    ></div>
                                  </div>
                                  {/* END IMAGE */}
                                  <div className="details">
                                    <div className="extra">
                                    <p className="date">
                                        UI/UX
                                      </p>
                                    </div>
                                    <h3 className="title">
                                      cvDragon NextGen Resume Builder
                                    </h3>
                                  </div>
                                  {/* END DETAILS */}
                                  <div className="main_content ">
                                    <div className="descriptions">
                                      <p className="bigger">
                                        cvDragon is an online platform that helps you create your resume quickly and professionally. It removes the hassle and struggle of figuring out what to include and how to format everything by offering "Key Phrases" written by experts and more than 50 resume formats and styles.
                                      </p>
                                      <p>
                                        I worked with cvDragon as a <b>UI/UX Flutter designer intern</b> and my responsibilty was to redesign their already existing mobile application. The goal of this internship was to redesign cvDragon NextGen Resume Builder mobile application and give it a new look and incorporating better user experience. I worked on the following modules of the aplication : <b>About Us, Frequently Asked Questions, Free Subscription, Main Page, Key Phrases, Knowledge Center, Landing Page, Onboarding, Plcaement, Resume Designs, and Subscription</b>.
                                      </p>
                                      <p>
                                        For this internship, I used <b>Adobe Xd</b> to create user-friendly and beautiful UI/UX and <b>Flutter</b> to develop the mobile application. Designing an updated version of this app was a challange because I did not have the luxury to change the design language of the application. I had to follow the design language and still produce a new look for the app. I did design a few components keeping in mind the design language. The pages I designed gave a completely revamped look to the application and looked up-to-date with the trend. 
                                      </p>
                                      <div className="image">
                                        <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                                        <div
                                          className="main"
                                          style={{
                                            backgroundImage: "url(assets/img/news/cvDragon/cvDragonAllDesigns.PNG)",
                                          }}
                                        ></div>
                                      </div>
                                      <p>
                                        <a href="https://drive.google.com/drive/folders/1XwIdf5segRh3XeN7-nJRm_J5DciBNRjo?usp=sharing" target="_blank">cvDragon All Designs</a>
                                      </p>
                                    </div>
                                    {/* END DESCRIPTION */}
                                  </div>
                                </div>
                              </div>
                              {/* END BOX INNER */}
                            </div>
                            {/* END MODALBOX NEWS */}
                          </Modal>
                          {/* END MODAL */}
                        </div>
                      </li>
                      {/* END cvDragon BLOG */}

                      
                      {/* UI/UX - Khasm - Clothing Application */}
                      {/* Take info from Adobe Xd */}
                      <li>
                        <div className="list_inner">
                          <div className="image" onClick={toggleModalSix}>
                            <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                            <div
                              className="main"
                              style={{
                                backgroundImage: "url(assets/img/news/Khasm/KhasmMainImageDarkBG.PNG)",
                              }}
                            ></div>
                          </div>
                          {/* END IMAGE */}
                          <div className="details">
                            <div className="extra">
                              <p className="date">
                                UI/UX 
                              </p>
                            </div>
                            {/* END EXTRA */}

                            <h3 className="title" onClick={toggleModalSix}>
                              Khasm - Clothing Application
                            </h3>
                            <div className="tokyo_tm_read_more">
                              <a onClick={toggleModalSix}>
                                <span>Know More</span>
                              </a>
                            </div>
                            {/* END READ MORE BUTTON */}
                          </div>
                          {/* END DETAILS */}

                          {/* START MODAL */}
                          <Modal
                            isOpen={isOpen6}
                            onRequestClose={toggleModalSix}
                            contentLabel="My dialog"
                            className="mymodal"
                            overlayClassName="myoverlay"
                            closeTimeoutMS={500}
                          >
                            <div className="tokyo_tm_modalbox_news">
                              <button className="close-modal" onClick={toggleModalSix}>
                                <img src="assets/img/svg/cancel.svg" alt="close icon" />
                              </button>
                              {/* END CLOSE ICON */}
                              <div className="box_inner">
                                <div className="description_wrap scrollable">
                                  <div className="image">
                                    <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                                    <div
                                      className="main"
                                      style={{
                                        backgroundImage: "url(assets/img/news/Khasm/KhasmMainImageDarkBG.PNG)",
                                      }}
                                    ></div>
                                  </div>
                                  {/* END IMAGE */}
                                  <div className="details">
                                    <div className="extra">
                                    <p className="date">
                                        UI/UX
                                      </p>
                                    </div>
                                    <h3 className="title">
                                      Khasm - Clothing Application
                                    </h3>
                                  </div>
                                  {/* END DETAILS */}
                                  <div className="main_content ">
                                    <div className="descriptions">
                                      <p className="bigger">
                                        KHASM means "discount" in Arabic. GoPro Advanced Engineering Solutions wanted to develop an application that makes clothes more affordable and easily available to everyone. Khasm - clothing application brings clothes from all local stores into one place and compares their prices and gives the user clothes at the best possible price.
                                      </p>
                                      <p>
                                        GoPro offers engineering solutions and provides training to students and companies in various software and soft skills. They are also an official reseller of GstarCAD, a competitor of AutoCAD in Egypt. 
                                      </p>
                                      <p>
                                        With the help of AIESEC, I got an opportunity to work with GoPro Advanced Engineering Solutions in Alexandria, Egypt and get the kind of experience and exposure I would have never gotten staying back in India. During my 6-week internship at AIESEC, I worked on launching a brand new clothing application called KHASM. Khasm's main aim was to bring clothing to people at an affordable price and decrease their expenses by showing them where they can find the clothes they want in a single place. GoPro tied up with a few local stores who put up their clothes on the application and the users can surf through the app and choose what they like. Users can block items on the app for a small period of time before which they can go and collect the clothes.
                                      </p>
                                      <p>
                                        Khasm had two parts - one was for the user and the other was for shopkeepers, where they could update their products and also get update regarding any bookings. A common SQL database was created which could be accessed by both the applications. I was the Lead UI/UX Designer and was mainly responsible for building the UI/UX for the application and co-ordinating with android and iOS development teams for smooth functioning of the application on both platforms. 
                                      </p>
                                      <p>
                                        <b>Technologies Used:</b><br />
                                        Database : MySQL <br />
                                        UI/UX : Adobe Xd <br />
                                        App Development : Android Studio and Swift
                                      </p>
                                      <p>
                                        <a href="https://drive.google.com/file/d/1Ce6YTChV3-R5YwqwhM7AtUr3WYT3ALk8/view?usp=sharing" target="_blank">KHASM Design PDF</a>
                                      </p>
                                      <p>
                                        <a href="https://docs.google.com/document/d/1VG0wrJKQHM7-Qh2Js1nzL5EIWO5wxsu-/edit?usp=sharing&ouid=110785875647566598607&rtpof=true&sd=true"target="_blank">KHASM Report</a>
                                      </p>
                                    </div>
                                    {/* END DESCRIPTION */}
                                  </div>
                                </div>
                              </div>
                              {/* END BOX INNER */}
                            </div>
                            {/* END MODALBOX NEWS */}
                          </Modal>
                          {/* END MODAL */}
                        </div>
                      </li>
                      {/* END KHASM BLOG */}

                      
                      {/* UI/UX - Lendskart.com - SRS Capital */}
                      {/* Take info from Adobe Xd and Lendskart.com */}
                      <li>
                        <div className="list_inner">
                          <div className="image" onClick={toggleModalSeven}>
                            <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                            <div
                              className="main"
                              style={{
                                backgroundImage: "url(assets/img/news/Lendskart/Lendskart.PNG)",
                              }}
                            ></div>
                          </div>
                          {/* END IMAGE */}
                          <div className="details">
                            <div className="extra">
                              <p className="date">
                                UI/UX 
                              </p>
                            </div>
                            {/* END EXTRA */}

                            <h3 className="title" onClick={toggleModalSeven}>
                              Lendskart.com - SRS Capital
                            </h3>
                            <div className="tokyo_tm_read_more">
                              <a onClick={toggleModalSeven}>
                                <span>Know More</span>
                              </a>
                            </div>
                            {/* END READ MORE BUTTON */}
                          </div>
                          {/* END DETAILS */}

                          {/* START MODAL */}
                          <Modal
                            isOpen={isOpen7}
                            onRequestClose={toggleModalSeven}
                            contentLabel="My dialog"
                            className="mymodal"
                            overlayClassName="myoverlay"
                            closeTimeoutMS={500}
                          >
                            <div className="tokyo_tm_modalbox_news">
                              <button className="close-modal" onClick={toggleModalSeven}>
                                <img src="assets/img/svg/cancel.svg" alt="close icon" />
                              </button>
                              {/* END CLOSE ICON */}
                              <div className="box_inner">
                                <div className="description_wrap scrollable">
                                  <div className="image">
                                    <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                                    <div
                                      className="main"
                                      style={{
                                        backgroundImage: "url(assets/img/news/Lendskart/Lendskart.PNG)",
                                      }}
                                    ></div>
                                  </div>
                                  {/* END IMAGE */}
                                  <div className="details">
                                    <div className="extra">
                                    <p className="date">
                                        UI/UX
                                      </p>
                                    </div>
                                    <h3 className="title">
                                      Lendskart.com - SRS Capital
                                    </h3>
                                  </div>
                                  {/* END DETAILS */}
                                  <div className="main_content ">
                                    <div className="descriptions">
                                      <p>
                                        <a href="https://www.lendskart.com/" target="_blank">www.lendskart.com</a>
                                      </p>
                                      <p className="bigger">
                                        SRS Capital is a money lending and services firm based in Hyderabad. Through SRS Capital, users can borrow money from multiple trusted business partners. Lendskart allows users to contact SRS Capital online and to avail their services instantly. 
                                      </p>
                                      <p>
                                        In my two months working at SRS Captial, I was tasked with developing their product <b>www.Lendskart.com</b>. The UI/UX had to be built from scratch and a lot of research went into making this product to be like other websites in that area. This website was built on HTML, CSS and JavaScript. This ia s imple website that showcases SRS Capital's work and allows people to contact them directly.
                                      </p>
                                    </div>
                                    {/* END DESCRIPTION */}
                                  </div>
                                </div>
                              </div>
                              {/* END BOX INNER */}
                            </div>
                            {/* END MODALBOX NEWS */}
                          </Modal>
                          {/* END MODAL */}
                        </div>
                      </li>
                      {/* END Lendskart BLOG */}

                      
                      {/* Others | IOT - Sign-to-Speech Converter */}
                      {/* Take info from IOT Project Report gmail - sign to speech converter */}
                      <li>
                        <div className="list_inner">
                          <div className="image" onClick={toggleModalEight}>
                            <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                            <div
                              className="main"
                              style={{
                                backgroundImage: "url(assets/img/news/SignToSpeech/SignToSpeech.PNG)",
                              }}
                            ></div>
                          </div>
                          {/* END IMAGE */}
                          <div className="details">
                            <div className="extra">
                              <p className="date">
                                Others | IOT 
                              </p>
                            </div>
                            {/* END EXTRA */}

                            <h3 className="title" onClick={toggleModalEight}>
                              Sign-to-Speech Converter
                            </h3>
                            <div className="tokyo_tm_read_more">
                              <a onClick={toggleModalEight}>
                                <span>Know More</span>
                              </a>
                            </div>
                            {/* END READ MORE BUTTON */}
                          </div>
                          {/* END DETAILS */}

                          {/* START MODAL */}
                          <Modal
                            isOpen={isOpen8}
                            onRequestClose={toggleModalEight}
                            contentLabel="My dialog"
                            className="mymodal"
                            overlayClassName="myoverlay"
                            closeTimeoutMS={500}
                          >
                            <div className="tokyo_tm_modalbox_news">
                              <button className="close-modal" onClick={toggleModalEight}>
                                <img src="assets/img/svg/cancel.svg" alt="close icon" />
                              </button>
                              {/* END CLOSE ICON */}
                              <div className="box_inner">
                                <div className="description_wrap scrollable">
                                  <div className="image">
                                    <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                                    <div
                                      className="main"
                                      style={{
                                        backgroundImage: "url(assets/img/news/SignToSpeech/SignToSpeech.PNG)",
                                      }}
                                    ></div>
                                  </div>
                                  {/* END IMAGE */}
                                  <div className="details">
                                    <div className="extra">
                                    <p className="date">
                                        Others | IOT
                                      </p>
                                    </div>
                                    <h3 className="title">
                                      Sign-to-Speech Converter
                                    </h3>
                                  </div>
                                  {/* END DETAILS */}
                                  <div className="main_content ">
                                    <div className="descriptions">
                                      <p className="bigger">
                                        Speech and gestures are the two expressions by which human beings communicate, but the deaf and dumb, and paralyzed people can only communicate through gestures. The main problem here is that other people usually do not understand gestures or, sometimes, the deaf and dumb themselves do not understand gestures. This paper is our approach to solve this issue.
                                      </p>
                                      <p>
                                        People who are deaf and dumb often suffer with speech development due to severe problems with communication mainly due to unavailaibility of proper means of commincation in such special cases. Around 5% of the world (360 million approx.) are suffering from the same problem. This project helps such people by detecting the movements of deaf and dumb or paralyzed patients and resulted action is shown on LCD screen.
                                      </p>
                                      <p>
                                        Currently, this problem is tackled using image processing which requires large amounts of data and complex algorithms, and through Visual analysis using cameras. It must be made sure that lighting and the orientation must be perfect to get the correct results. We are overcoming these two major issues by using Arduino software and sensors in place of complex computers and cameras.
                                      </p>
                                      <ul>
                                        <li>
                                            To solve this problem, we will measure the actions performed by the deaf and dumb people using resistors array (analog sensor) attached to the gloves in the hand of the user. 
                                        </li>
                                        <li>
                                            Once the glove is placed in the hands, whenever an action for sign language is performed, the analog voltage value is obtained and the corresponding action is identified by the arduino uno board.  
                                        </li>
                                        <li>
                                            LCD display and Bluetooth is used as an output device to convey the message from the user to the receiver.  
                                        </li>
                                        <li>
                                            Also play-back is used to play the respective sound.
                                        </li>
                                        <li>
                                            Arduino IDE and proteus software tools are used for compiling software coding and simulating the design. 
                                        </li>
                                        <li>
                                            This project detects the movements of deaf and dumb or paralyzed patients and resulting actions are shown on the LCD screen, alerting notifications.
                                        </li>
                                      </ul>
                                      <p>
                                        <a href="https://drive.google.com/file/d/1VGzxScLmFlveByBSn3qahlakzzoyIrsz/view?usp=sharing" target="_blank">Report : Sign-to-Speech Converter </a>
                                      </p>
                                    </div>
                                    {/* END DESCRIPTION */}
                                  </div>
                                </div>
                              </div>
                              {/* END BOX INNER */}
                            </div>
                            {/* END MODALBOX NEWS */}
                          </Modal>
                          {/* END MODAL */}
                        </div>
                      </li>
                      {/* END Sign-to-speech BLOG */}

                      
                      {/* UI/UX - Vihari - SIH */}
                      {/* Take info from Adobe Xd */}
                      <li>
                        <div className="list_inner">
                          <div className="image" onClick={toggleModalSix}>
                            <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                            <div
                              className="main"
                              style={{
                                backgroundImage: "url(assets/img/news/Vihari/Vihari1MainImage.PNG)",
                              }}
                            ></div>
                          </div>
                          {/* END IMAGE */}
                          <div className="details">
                            <div className="extra">
                              <p className="date">
                                UI/UX 
                              </p>
                            </div>
                            {/* END EXTRA */}

                            <h3 className="title" onClick={toggleModalSix}>
                              Vihari - SIH 2020
                            </h3>
                            <div className="tokyo_tm_read_more">
                              <a onClick={toggleModalSix}>
                                <span>Know More</span>
                              </a>
                            </div>
                            {/* END READ MORE BUTTON */}
                          </div>
                          {/* END DETAILS */}

                          {/* START MODAL */}
                          <Modal
                            isOpen={isOpen6}
                            onRequestClose={toggleModalSix}
                            contentLabel="My dialog"
                            className="mymodal"
                            overlayClassName="myoverlay"
                            closeTimeoutMS={500}
                          >
                            <div className="tokyo_tm_modalbox_news">
                              <button className="close-modal" onClick={toggleModalSix}>
                                <img src="assets/img/svg/cancel.svg" alt="close icon" />
                              </button>
                              {/* END CLOSE ICON */}
                              <div className="box_inner">
                                <div className="description_wrap scrollable">
                                  <div className="image">
                                    <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                                    <div
                                      className="main"
                                      style={{
                                        backgroundImage: "url(assets/img/news/Vihari/Vihari1MainImage.PNG)",
                                      }}
                                    ></div>
                                  </div>
                                  {/* END IMAGE */}
                                  <div className="details">
                                    <div className="extra">
                                    <p className="date">
                                        UI/UX
                                      </p>
                                    </div>
                                    <h3 className="title">
                                      Vihari - SIH 2020
                                    </h3>
                                  </div>
                                  {/* END DETAILS */}
                                  <div className="main_content ">
                                    <div className="descriptions">
                                      <p className="bigger">
                                        Smart India Hackathon is a nationwide initiative to provide students with a platform to solve some of the pressing problems we face in our daily lives, and thus inculcate a culture of product innovation and a mindset of problem-solving. Smart India Hackathon has a list of problems and students can take up one problem and try to solve it.
                                      </p>
                                      <div className="quotebox">
                                        <div className="icon">
                                          <img
                                            className="svg"
                                            src="assets/img/svg/quote.svg"
                                            alt="tumb"
                                          />
                                        </div>
                                        <p>
                                          <b>Problem Statement:</b><br />
                                          Every part of our country is very rich in its heritage and culture. However, awareness about the same can be increased among the local residents. What needs to be done increase the ownership amongst the citizens towards the heritage (both tangible and intangible)?
                                        </p>
                                      </div>
                                      {/* END QUOTEBOX */}
                                      <p>
                                        Smart India Hackathon 2020 Prelims were held in our University and we had the opportunity to participate in it. We made a team of 6 people and took up the problem of increasing ownership amongst the citizens towards the heritage. We qualified for the final round of Smart India Hackathon and felt the need to redesign our application to win the competition. 
                                      </p>
                                      <div className="image">
                                        <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                                        <div
                                          className="main"
                                          style={{
                                            backgroundImage: "url(assets/img/news/Vihari/Vihari2MainImage.PNG)",
                                          }}
                                        ></div>
                                      </div>
                                      <p>
                                        Our idea was to develop a mobile application that encourages people to know more about their heritage. We planned to award users with a few points and make it like a game. <br />The main features of the application were :
                                        <ul>
                                          <li>Nearby Places, Local Events</li>
                                          <li>Travel Feed</li>
                                          <li>Bazaar</li>
                                          <li>Crowdsourcing Data contests</li>
                                          <li>Scan QR Code for a interactive 360 view</li>
                                          <li>Local Hosts and guides</li>
                                          <li>Form Communities</li>
                                        </ul>
                                      </p>
                                      <p>
                                        Our goal was to bring about a feeling of ownership amongst locals and tourists towards their heritage. <br />
                                        <b>Impact on Locals: </b><br />
                                        <ul>
                                          <li>Earn money through the following: Local Host, Local Seller, Local Guide</li>
                                          <li>Increased ownership by contributing in building our application via participating in competitions</li>
                                          <li>Easy to give local recommendations to people to help promote local businesses</li>
                                          <li>Earn reward points for doing anything on our application</li>
                                        </ul>
                                        <b>Impact on Tourists: </b>
                                        <ul>
                                          <li>Easy information through maps and blogs</li>
                                          <li>Discover places recommended by locals instead of always trying the same old thing</li>
                                          <li>Explore the local culture with local host, local guide and local seller.</li>
                                          <li>Earn reward points for your activities</li>
                                        </ul>
                                      </p>
                                      <p>
                                        <b>Technologies Used:</b><br />
                                        UI/UX : Adobe Xd / Figma <br />
                                        Frontend : React Native <br />
                                        Backend : Node JX, Axios, MongoDB
                                      </p>
                                      <p>
                                        <a href="https://github.com/gattaloukik123/Vihaari-Final-Codebase"target="_blank">Github Repo : Vihari</a>
                                      </p>
                                    </div>
                                    {/* END DESCRIPTION */}
                                  </div>
                                </div>
                              </div>
                              {/* END BOX INNER */}
                            </div>
                            {/* END MODALBOX NEWS */}
                          </Modal>
                          {/* END MODAL */}
                        </div>
                      </li>
                      {/* END Vihari BLOG */}

          
                      
                    </ul>
                    {/* END PORTFOLIO LIST */}
                  </TabPanel>
                  {/* END ALL PORTFOLIO GALLERY */}

                  <TabPanel>
                    <ul className="portfolio_list">
                      {/* UI/UX - cvDragon NextGen Resume Builder */}
                      {/* Take info from Adobe Xd */}
                      <li>
                        <div className="list_inner">
                          <div className="image" onClick={toggleModalFive}>
                            <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                            <div
                              className="main"
                              style={{
                                backgroundImage: "url(assets/img/news/cvDragon/cvDragonMainImage.PNG)",
                              }}
                            ></div>
                          </div>
                          {/* END IMAGE */}
                          <div className="details">
                            <div className="extra">
                              <p className="date">
                                UI/UX 
                              </p>
                            </div>
                            {/* END EXTRA */}

                            <h3 className="title" onClick={toggleModalFive}>
                              cvDragon Resume Builder
                            </h3>
                            <div className="tokyo_tm_read_more">
                              <a onClick={toggleModalFive}>
                                <span>Know More</span>
                              </a>
                            </div>
                            {/* END READ MORE BUTTON */}
                          </div>
                          {/* END DETAILS */}

                          {/* START MODAL */}
                          <Modal
                            isOpen={isOpen5}
                            onRequestClose={toggleModalFive}
                            contentLabel="My dialog"
                            className="mymodal"
                            overlayClassName="myoverlay"
                            closeTimeoutMS={500}
                          >
                            <div className="tokyo_tm_modalbox_news">
                              <button className="close-modal" onClick={toggleModalFive}>
                                <img src="assets/img/svg/cancel.svg" alt="close icon" />
                              </button>
                              {/* END CLOSE ICON */}
                              <div className="box_inner">
                                <div className="description_wrap scrollable">
                                  <div className="image">
                                    <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                                    <div
                                      className="main"
                                      style={{
                                        backgroundImage: "url(assets/img/news/cvDragon/cvDragonMainImage.PNG)",
                                      }}
                                    ></div>
                                  </div>
                                  {/* END IMAGE */}
                                  <div className="details">
                                    <div className="extra">
                                    <p className="date">
                                        UI/UX
                                      </p>
                                    </div>
                                    <h3 className="title">
                                      cvDragon NextGen Resume Builder
                                    </h3>
                                  </div>
                                  {/* END DETAILS */}
                                  <div className="main_content ">
                                    <div className="descriptions">
                                      <p className="bigger">
                                        cvDragon is an online platform that helps you create your resume quickly and professionally. It removes the hassle and struggle of figuring out what to include and how to format everything by offering "Key Phrases" written by experts and more than 50 resume formats and styles.
                                      </p>
                                      <p>
                                        I worked with cvDragon as a <b>UI/UX Flutter designer intern</b> and my responsibilty was to redesign their already existing mobile application. The goal of this internship was to redesign cvDragon NextGen Resume Builder mobile application and give it a new look and incorporating better user experience. I worked on the following modules of the aplication : <b>About Us, Frequently Asked Questions, Free Subscription, Main Page, Key Phrases, Knowledge Center, Landing Page, Onboarding, Plcaement, Resume Designs, and Subscription</b>.
                                      </p>
                                      <p>
                                        For this internship, I used <b>Adobe Xd</b> to create user-friendly and beautiful UI/UX and <b>Flutter</b> to develop the mobile application. Designing an updated version of this app was a challange because I did not have the luxury to change the design language of the application. I had to follow the design language and still produce a new look for the app. I did design a few components keeping in mind the design language. The pages I designed gave a completely revamped look to the application and looked up-to-date with the trend. 
                                      </p>
                                      <div className="image">
                                        <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                                        <div
                                          className="main"
                                          style={{
                                            backgroundImage: "url(assets/img/news/cvDragon/cvDragonAllDesigns.PNG)",
                                          }}
                                        ></div>
                                      </div>
                                      <p>
                                        <a href="https://drive.google.com/drive/folders/1XwIdf5segRh3XeN7-nJRm_J5DciBNRjo?usp=sharing" target="_blank">cvDragon All Designs</a>
                                      </p>
                                    </div>
                                    {/* END DESCRIPTION */}
                                  </div>
                                </div>
                              </div>
                              {/* END BOX INNER */}
                            </div>
                            {/* END MODALBOX NEWS */}
                          </Modal>
                          {/* END MODAL */}
                        </div>
                      </li>
                      {/* END cvDragon BLOG */}

                      
                      {/* UI/UX - Khasm - Clothing Application */}
                      {/* Take info from Adobe Xd */}
                      <li>
                        <div className="list_inner">
                          <div className="image" onClick={toggleModalSix}>
                            <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                            <div
                              className="main"
                              style={{
                                backgroundImage: "url(assets/img/news/Khasm/KhasmMainImageDarkBG.PNG)",
                              }}
                            ></div>
                          </div>
                          {/* END IMAGE */}
                          <div className="details">
                            <div className="extra">
                              <p className="date">
                                UI/UX 
                              </p>
                            </div>
                            {/* END EXTRA */}

                            <h3 className="title" onClick={toggleModalSix}>
                              Khasm - Clothing Application
                            </h3>
                            <div className="tokyo_tm_read_more">
                              <a onClick={toggleModalSix}>
                                <span>Know More</span>
                              </a>
                            </div>
                            {/* END READ MORE BUTTON */}
                          </div>
                          {/* END DETAILS */}

                          {/* START MODAL */}
                          <Modal
                            isOpen={isOpen6}
                            onRequestClose={toggleModalSix}
                            contentLabel="My dialog"
                            className="mymodal"
                            overlayClassName="myoverlay"
                            closeTimeoutMS={500}
                          >
                            <div className="tokyo_tm_modalbox_news">
                              <button className="close-modal" onClick={toggleModalSix}>
                                <img src="assets/img/svg/cancel.svg" alt="close icon" />
                              </button>
                              {/* END CLOSE ICON */}
                              <div className="box_inner">
                                <div className="description_wrap scrollable">
                                  <div className="image">
                                    <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                                    <div
                                      className="main"
                                      style={{
                                        backgroundImage: "url(assets/img/news/Khasm/KhasmMainImageDarkBG.PNG)",
                                      }}
                                    ></div>
                                  </div>
                                  {/* END IMAGE */}
                                  <div className="details">
                                    <div className="extra">
                                    <p className="date">
                                        UI/UX
                                      </p>
                                    </div>
                                    <h3 className="title">
                                      Khasm - Clothing Application
                                    </h3>
                                  </div>
                                  {/* END DETAILS */}
                                  <div className="main_content ">
                                    <div className="descriptions">
                                      <p className="bigger">
                                        KHASM means "discount" in Arabic. GoPro Advanced Engineering Solutions wanted to develop an application that makes clothes more affordable and easily available to everyone. Khasm - clothing application brings clothes from all local stores into one place and compares their prices and gives the user clothes at the best possible price.
                                      </p>
                                      <p>
                                        GoPro offers engineering solutions and provides training to students and companies in various software and soft skills. They are also an official reseller of GstarCAD, a competitor of AutoCAD in Egypt. 
                                      </p>
                                      <p>
                                        With the help of AIESEC, I got an opportunity to work with GoPro Advanced Engineering Solutions in Alexandria, Egypt and get the kind of experience and exposure I would have never gotten staying back in India. During my 6-week internship at AIESEC, I worked on launching a brand new clothing application called KHASM. Khasm's main aim was to bring clothing to people at an affordable price and decrease their expenses by showing them where they can find the clothes they want in a single place. GoPro tied up with a few local stores who put up their clothes on the application and the users can surf through the app and choose what they like. Users can block items on the app for a small period of time before which they can go and collect the clothes.
                                      </p>
                                      <p>
                                        Khasm had two parts - one was for the user and the other was for shopkeepers, where they could update their products and also get update regarding any bookings. A common SQL database was created which could be accessed by both the applications. I was the Lead UI/UX Designer and was mainly responsible for building the UI/UX for the application and co-ordinating with android and iOS development teams for smooth functioning of the application on both platforms. 
                                      </p>
                                      <p>
                                        <b>Technologies Used:</b><br />
                                        Database : MySQL <br />
                                        UI/UX : Adobe Xd <br />
                                        App Development : Android Studio and Swift
                                      </p>
                                      <p>
                                        <a href="https://drive.google.com/file/d/1Ce6YTChV3-R5YwqwhM7AtUr3WYT3ALk8/view?usp=sharing" target="_blank">KHASM Design PDF</a>
                                      </p>
                                      <p>
                                        <a href="https://docs.google.com/document/d/1VG0wrJKQHM7-Qh2Js1nzL5EIWO5wxsu-/edit?usp=sharing&ouid=110785875647566598607&rtpof=true&sd=true"target="_blank">KHASM Report</a>
                                      </p>
                                    </div>
                                    {/* END DESCRIPTION */}
                                  </div>
                                </div>
                              </div>
                              {/* END BOX INNER */}
                            </div>
                            {/* END MODALBOX NEWS */}
                          </Modal>
                          {/* END MODAL */}
                        </div>
                      </li>
                      {/* END KHASM BLOG */}

                      
                      {/* UI/UX - Lendskart.com - SRS Capital */}
                      {/* Take info from Adobe Xd and Lendskart.com */}
                      <li>
                        <div className="list_inner">
                          <div className="image" onClick={toggleModalSeven}>
                            <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                            <div
                              className="main"
                              style={{
                                backgroundImage: "url(assets/img/news/Lendskart/Lendskart.PNG)",
                              }}
                            ></div>
                          </div>
                          {/* END IMAGE */}
                          <div className="details">
                            <div className="extra">
                              <p className="date">
                                UI/UX 
                              </p>
                            </div>
                            {/* END EXTRA */}

                            <h3 className="title" onClick={toggleModalSeven}>
                              Lendskart.com - SRS Capital
                            </h3>
                            <div className="tokyo_tm_read_more">
                              <a onClick={toggleModalSeven}>
                                <span>Know More</span>
                              </a>
                            </div>
                            {/* END READ MORE BUTTON */}
                          </div>
                          {/* END DETAILS */}

                          {/* START MODAL */}
                          <Modal
                            isOpen={isOpen7}
                            onRequestClose={toggleModalSeven}
                            contentLabel="My dialog"
                            className="mymodal"
                            overlayClassName="myoverlay"
                            closeTimeoutMS={500}
                          >
                            <div className="tokyo_tm_modalbox_news">
                              <button className="close-modal" onClick={toggleModalSeven}>
                                <img src="assets/img/svg/cancel.svg" alt="close icon" />
                              </button>
                              {/* END CLOSE ICON */}
                              <div className="box_inner">
                                <div className="description_wrap scrollable">
                                  <div className="image">
                                    <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                                    <div
                                      className="main"
                                      style={{
                                        backgroundImage: "url(assets/img/news/Lendskart/Lendskart.PNG)",
                                      }}
                                    ></div>
                                  </div>
                                  {/* END IMAGE */}
                                  <div className="details">
                                    <div className="extra">
                                    <p className="date">
                                        UI/UX
                                      </p>
                                    </div>
                                    <h3 className="title">
                                      Lendskart.com - SRS Capital
                                    </h3>
                                  </div>
                                  {/* END DETAILS */}
                                  <div className="main_content ">
                                    <div className="descriptions">
                                      <p>
                                        <a href="https://www.lendskart.com/" target="_blank">www.lendskart.com</a>
                                      </p>
                                      <p className="bigger">
                                        SRS Capital is a money lending and services firm based in Hyderabad. Through SRS Capital, users can borrow money from multiple trusted business partners. Lendskart allows users to contact SRS Capital online and to avail their services instantly. 
                                      </p>
                                      <p>
                                        In my two months working at SRS Captial, I was tasked with developing their product <b>www.Lendskart.com</b>. The UI/UX had to be built from scratch and a lot of research went into making this product to be like other websites in that area. This website was built on HTML, CSS and JavaScript. This ia s imple website that showcases SRS Capital's work and allows people to contact them directly.
                                      </p>
                                    </div>
                                    {/* END DESCRIPTION */}
                                  </div>
                                </div>
                              </div>
                              {/* END BOX INNER */}
                            </div>
                            {/* END MODALBOX NEWS */}
                          </Modal>
                          {/* END MODAL */}
                        </div>
                      </li>
                      {/* END Lendskart BLOG */}

                      
                      {/* UI/UX - Vihari - SIH */}
                      {/* Take info from Adobe Xd */}
                      <li>
                        <div className="list_inner">
                          <div className="image" onClick={toggleModalSix}>
                            <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                            <div
                              className="main"
                              style={{
                                backgroundImage: "url(assets/img/news/Vihari/Vihari1MainImage.PNG)",
                              }}
                            ></div>
                          </div>
                          {/* END IMAGE */}
                          <div className="details">
                            <div className="extra">
                              <p className="date">
                                UI/UX 
                              </p>
                            </div>
                            {/* END EXTRA */}

                            <h3 className="title" onClick={toggleModalSix}>
                              Vihari - SIH 2020
                            </h3>
                            <div className="tokyo_tm_read_more">
                              <a onClick={toggleModalSix}>
                                <span>Know More</span>
                              </a>
                            </div>
                            {/* END READ MORE BUTTON */}
                          </div>
                          {/* END DETAILS */}

                          {/* START MODAL */}
                          <Modal
                            isOpen={isOpen6}
                            onRequestClose={toggleModalSix}
                            contentLabel="My dialog"
                            className="mymodal"
                            overlayClassName="myoverlay"
                            closeTimeoutMS={500}
                          >
                            <div className="tokyo_tm_modalbox_news">
                              <button className="close-modal" onClick={toggleModalSix}>
                                <img src="assets/img/svg/cancel.svg" alt="close icon" />
                              </button>
                              {/* END CLOSE ICON */}
                              <div className="box_inner">
                                <div className="description_wrap scrollable">
                                  <div className="image">
                                    <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                                    <div
                                      className="main"
                                      style={{
                                        backgroundImage: "url(assets/img/news/Vihari/Vihari1MainImage.PNG)",
                                      }}
                                    ></div>
                                  </div>
                                  {/* END IMAGE */}
                                  <div className="details">
                                    <div className="extra">
                                    <p className="date">
                                        UI/UX
                                      </p>
                                    </div>
                                    <h3 className="title">
                                      Vihari - SIH 2020
                                    </h3>
                                  </div>
                                  {/* END DETAILS */}
                                  <div className="main_content ">
                                    <div className="descriptions">
                                      <p className="bigger">
                                        Smart India Hackathon is a nationwide initiative to provide students with a platform to solve some of the pressing problems we face in our daily lives, and thus inculcate a culture of product innovation and a mindset of problem-solving. Smart India Hackathon has a list of problems and students can take up one problem and try to solve it.
                                      </p>
                                      <div className="quotebox">
                                        <div className="icon">
                                          <img
                                            className="svg"
                                            src="assets/img/svg/quote.svg"
                                            alt="tumb"
                                          />
                                        </div>
                                        <p>
                                          <b>Problem Statement:</b><br />
                                          Every part of our country is very rich in its heritage and culture. However, awareness about the same can be increased among the local residents. What needs to be done increase the ownership amongst the citizens towards the heritage (both tangible and intangible)?
                                        </p>
                                      </div>
                                      {/* END QUOTEBOX */}
                                      <p>
                                        Smart India Hackathon 2020 Prelims were held in our University and we had the opportunity to participate in it. We made a team of 6 people and took up the problem of increasing ownership amongst the citizens towards the heritage. We qualified for the final round of Smart India Hackathon and felt the need to redesign our application to win the competition. 
                                      </p>
                                      <div className="image">
                                        <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                                        <div
                                          className="main"
                                          style={{
                                            backgroundImage: "url(assets/img/news/Vihari/Vihari2MainImage.PNG)",
                                          }}
                                        ></div>
                                      </div>
                                      <p>
                                        Our idea was to develop a mobile application that encourages people to know more about their heritage. We planned to award users with a few points and make it like a game. <br />The main features of the application were :
                                        <ul>
                                          <li>Nearby Places, Local Events</li>
                                          <li>Travel Feed</li>
                                          <li>Bazaar</li>
                                          <li>Crowdsourcing Data contests</li>
                                          <li>Scan QR Code for a interactive 360 view</li>
                                          <li>Local Hosts and guides</li>
                                          <li>Form Communities</li>
                                        </ul>
                                      </p>
                                      <p>
                                        Our goal was to bring about a feeling of ownership amongst locals and tourists towards their heritage. <br />
                                        <b>Impact on Locals: </b><br />
                                        <ul>
                                          <li>Earn money through the following: Local Host, Local Seller, Local Guide</li>
                                          <li>Increased ownership by contributing in building our application via participating in competitions</li>
                                          <li>Easy to give local recommendations to people to help promote local businesses</li>
                                          <li>Earn reward points for doing anything on our application</li>
                                        </ul>
                                        <b>Impact on Tourists: </b>
                                        <ul>
                                          <li>Easy information through maps and blogs</li>
                                          <li>Discover places recommended by locals instead of always trying the same old thing</li>
                                          <li>Explore the local culture with local host, local guide and local seller.</li>
                                          <li>Earn reward points for your activities</li>
                                        </ul>
                                      </p>
                                      <p>
                                        <b>Technologies Used:</b><br />
                                        UI/UX : Adobe Xd / Figma <br />
                                        Frontend : React Native <br />
                                        Backend : Node JX, Axios, MongoDB
                                      </p>
                                      <p>
                                        <a href="https://github.com/gattaloukik123/Vihaari-Final-Codebase"target="_blank">Github Repo : Vihari</a>
                                      </p>
                                    </div>
                                    {/* END DESCRIPTION */}
                                  </div>
                                </div>
                              </div>
                              {/* END BOX INNER */}
                            </div>
                            {/* END MODALBOX NEWS */}
                          </Modal>
                          {/* END MODAL */}
                        </div>
                      </li>
                      {/* END Vihari BLOG */}
                    </ul>
                    {/* END PORTFOLIO LIST */}
                  </TabPanel>
                  {/* END UI/UX GALLERY */}

                  <TabPanel>
                    <ul className="portfolio_list">
                      
                      {/* ML/AI - Human-Robot Interaction Model */}
                      {/* Take info from Report */}
                      <li>
                        <div className="list_inner">
                          <div className="image" onClick={toggleModalThree}>
                            <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                            <div
                              className="main"
                              style={{
                                backgroundImage: "url(assets/img/news/HumanRobotInteraction/HumanRobotInteractionMainImage.PNG)",
                              }}
                            ></div>
                          </div>
                          {/* END IMAGE */}
                          <div className="details">
                            <div className="extra">
                              <p className="date">
                                ML/AI 
                              </p>
                            </div>
                            {/* END EXTRA */}

                            <h3 className="title" onClick={toggleModalThree}>
                              Human-Robot Interaction Model in Telugu
                            </h3>
                            <div className="tokyo_tm_read_more">
                              <a onClick={toggleModalThree}>
                                <span>Know More</span>
                              </a>
                            </div>
                            {/* END READ MORE BUTTON */}
                          </div>
                          {/* END DETAILS */}

                          {/* START MODAL */}
                          <Modal
                            isOpen={isOpen3}
                            onRequestClose={toggleModalThree}
                            contentLabel="My dialog"
                            className="mymodal"
                            overlayClassName="myoverlay"
                            closeTimeoutMS={500}
                          >
                            <div className="tokyo_tm_modalbox_news">
                              <button className="close-modal" onClick={toggleModalThree}>
                                <img src="assets/img/svg/cancel.svg" alt="close icon" />
                              </button>
                              {/* END CLOSE ICON */}
                              <div className="box_inner">
                                <div className="description_wrap scrollable">
                                  <div className="image">
                                    <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                                    <div
                                      className="main"
                                      style={{
                                        backgroundImage: "url(assets/img/news/HumanRobotInteraction/HumanRobotInteractionMainImage.PNG)",
                                      }}
                                    ></div>
                                  </div>
                                  {/* END IMAGE */}
                                  <div className="details">
                                    <div className="extra">
                                    <p className="date">
                                        ML/AI
                                      </p>
                                    </div>
                                    <h3 className="title">
                                      Human-Robot Interaction Model in Telugu
                                    </h3>
                                  </div>
                                  {/* END DETAILS */}
                                  <div className="main_content ">
                                    <div className="descriptions">
                                      <p className="bigger">
                                        In today’s world, human-robot interaction is very important. This technology has seen great heights in the recent past but advancements have been limited in the speech interaction to the English language only. There are many regional languages all around the world and we feel the need for robots to understand these regional languages also. 
                                      </p>
                                      <p>
                                        We are working on a model that will understand Telugu (our native language) and give audio output based on the input it receives.
                                      </p>
                                      <p>
                                        We are attempting to build a speech interactive model that makes the robot understand sentences in regional language and respond to it. We are currently working on the Telugu language. This model will take user voice input, convert it to Telugu text, do the necessary processing, and respond with an audio message of its own.
                                      </p>
                                      <p>
                                        Social Robots play an important role in people’s lives in the future. From waking us up to interacting with customers at the office, they become the new normal, and speech is one of the most important HRIs between humans and robots. But there are various languages in this world which makes the robot less speech interactive with people. As India is a country of different languages and cultures, we want robots to communicate with people in their respective regional languages. And our project can be extended to various languages, more functionalities can be implemented and make robots speak to people in their regional language.
                                      </p>
                                      <p>
                                        <a href="https://drive.google.com/file/d/1PqOJSLByK61bzh_9ZcMVDT_l0AVpFDAq/view?usp=sharing" target="_blank">Report : Human Robot Interaction Model in Telugu</a>
                                      </p>
                                      <p>
                                        <a href="https://github.com/Aneesh4567/Human-Robot-Interaction-Telugu" target="_blank">Github Repo : Human Robot Interaction Model in Telugu</a>
                                      </p>
                                    </div>
                                    {/* END DESCRIPTION */}
                                  </div>
                                </div>
                              </div>
                              {/* END BOX INNER */}
                            </div>
                            {/* END MODALBOX NEWS */}
                          </Modal>
                          {/* END MODAL */}
                        </div>
                      </li>
                      {/* END Human-Robot BLOG */}

                      
                      {/* ML/AI - Object Detection and Alert System for visually impaired people */}
                      {/* Take info from Report */}
                      <li>
                        <div className="list_inner">
                          <div className="image" onClick={toggleModalTwo}>
                            <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                            <div
                              className="main"
                              style={{
                                backgroundImage: "url(assets/img/news/ObjectDetection/ObjectDetectionMainImage.PNG)",
                              }}
                            ></div>
                          </div>
                          {/* END IMAGE */}
                          <div className="details">
                            <div className="extra">
                              <p className="date">
                                ML/AI 
                              </p>
                            </div>
                            {/* END EXTRA */}

                            <h3 className="title" onClick={toggleModalTwo}>
                              Object Detection and Alert System for visually impaired people
                            </h3>
                            <div className="tokyo_tm_read_more">
                              <a onClick={toggleModalTwo}>
                                <span>Know More</span>
                              </a>
                            </div>
                            {/* END READ MORE BUTTON */}
                          </div>
                          {/* END DETAILS */}

                          {/* START MODAL */}
                          <Modal
                            isOpen={isOpen2}
                            onRequestClose={toggleModalTwo}
                            contentLabel="My dialog"
                            className="mymodal"
                            overlayClassName="myoverlay"
                            closeTimeoutMS={500}
                          >
                            <div className="tokyo_tm_modalbox_news">
                              <button className="close-modal" onClick={toggleModalTwo}>
                                <img src="assets/img/svg/cancel.svg" alt="close icon" />
                              </button>
                              {/* END CLOSE ICON */}
                              <div className="box_inner">
                                <div className="description_wrap scrollable">
                                  <div className="image">
                                    <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                                    <div
                                      className="main"
                                      style={{
                                        backgroundImage: "url(assets/img/news/ObjectDetection/ObjectDetectionMainImage.PNG)",
                                      }}
                                    ></div>
                                  </div>
                                  {/* END IMAGE */}
                                  <div className="details">
                                    <div className="extra">
                                    <p className="date">
                                        ML/AI
                                      </p>
                                    </div>
                                    <h3 className="title">
                                      Object Detection and Alert System for visually impaired people
                                    </h3>
                                  </div>
                                  {/* END DETAILS */}
                                  <div className="main_content ">
                                    <div className="descriptions">
                                      <p className="bigger">
                                        Blind and visually impaired people have always faced difficulty in our country. Though the risk of blindness due to numerous diseases has decreased by the means of medications given, it is a well-known fact that after a particular age many people face visual impairment and they fear to miss out on opportunities in life. 
                                      </p>
                                      <p>
                                        With some knowledge, we have proposed a system in which an application can help a blind person using object detection, send alerts and help in navigation via identification of objects present in the surrounding through its camera. This identification and understanding will set out an audio output through which they can achieve better mobility using their hearing abilities.
                                      </p>
                                      <p>
                                        Using computer vision and YOLO(You Only Look Once), our application will be able to detect and recognise objects in front. An alarm system is designed and implemented to notify the user about the recognized objects using a voice assistant and give out a warning if there is any problematic situation.
                                      </p>
                                      <div className="quotebox">
                                        <div className="icon">
                                          <img
                                            className="svg"
                                            src="assets/img/svg/quote.svg"
                                            alt="tumb"
                                          />
                                        </div>
                                        <p>
                                          Our application interface is very simple and easy to use. The application helps in real time object detection and alerts the user using audio notifications. Another feature is that these notifications are not sent continuously, to avoid confusing the user. Instead they are sent after a specific time interval.
                                        </p>
                                      </div>
                                      {/* END QUOTEBOX */}
                                      <p>
                                        <a href="https://drive.google.com/file/d/1xOgMY0URSxCD8Xd6L1uAlfvm3_vLXbEP/view?usp=sharing" target="_blank">Report : Object Detection and Alert System for Visually Impaired people</a>
                                      </p>
                                      <p>
                                        <a href="https://github.com/Aneesh4567/Object-Detection-for-Blind-People" target="_blank">Github Repo : Object Detection and Alert System for Visually Impaired people</a>
                                      </p>
                                    </div>
                                    {/* END DESCRIPTION */}
                                  </div>
                                </div>
                              </div>
                              {/* END BOX INNER */}
                            </div>
                            {/* END MODALBOX NEWS */}
                          </Modal>
                          {/* END MODAL */}
                        </div>
                      </li>
                      {/* END Object Detection BLOG */}

                      
                      {/* ML/AI - A Machine Learning Model on Disease Prediction - A Comparative Study */}
                      {/* Take info from Report */}
                      <li>
                        <div className="list_inner">
                          <div className="image" onClick={toggleModalFour}>
                            <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                            <div
                              className="main"
                              style={{
                                backgroundImage: "url(assets/img/news/ComparativeStudy/ComparativeStudyMainImage.PNG)",
                              }}
                            ></div>
                          </div>
                          {/* END IMAGE */}
                          <div className="details">
                            <div className="extra">
                              <p className="date">
                                ML/AI 
                              </p>
                            </div>
                            {/* END EXTRA */}

                            <h3 className="title" onClick={toggleModalFour}>
                              A Machine Learning Model on Disease Prediction - A Comparative Study
                            </h3>
                            <div className="tokyo_tm_read_more">
                              <a onClick={toggleModalFour}>
                                <span>Know More</span>
                              </a>
                            </div>
                            {/* END READ MORE BUTTON */}
                          </div>
                          {/* END DETAILS */}

                          {/* START MODAL */}
                          <Modal
                            isOpen={isOpen4}
                            onRequestClose={toggleModalFour}
                            contentLabel="My dialog"
                            className="mymodal"
                            overlayClassName="myoverlay"
                            closeTimeoutMS={500}
                          >
                            <div className="tokyo_tm_modalbox_news">
                              <button className="close-modal" onClick={toggleModalFour}>
                                <img src="assets/img/svg/cancel.svg" alt="close icon" />
                              </button>
                              {/* END CLOSE ICON */}
                              <div className="box_inner">
                                <div className="description_wrap scrollable">
                                  <div className="image">
                                    <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                                    <div
                                      className="main"
                                      style={{
                                        backgroundImage: "url(assets/img/news/ComparativeStudy/ComparativeStudyMainImage.PNG)",
                                      }}
                                    ></div>
                                  </div>
                                  {/* END IMAGE */}
                                  <div className="details">
                                    <div className="extra">
                                    <p className="date">
                                        ML/AI
                                      </p>
                                    </div>
                                    <h3 className="title">
                                      A Machine Learning Model on Disease Prediction - A Comparative Study
                                    </h3>
                                  </div>
                                  {/* END DETAILS */}
                                  <div className="main_content ">
                                    <div className="descriptions">
                                      <p className="bigger">
                                        In the era of machine learning and artificial intelligence playing a major role in the healthcare and diagnostics sector, it is a necessary yet a challenging task to predict diseases beforehand. Despite many advances in early prediction of diseases, the majority of patients have a poor prognosis and survival rate for such patients are low. 
                                      </p>
                                      <p>
                                        The goal of the project is to subject 4 different disease datasets of patient samples to machine learning algorithms. The aim is to predict the diseases using these machine learning models and do a comparative study on which algorithms will give the best results in the respective datasets of diseases.
                                      </p>
                                      <p>
                                        This paper describes how machine learning algorithms were used to predict four diseases namely - <b><i>Breast Cancer, Heart Disease, General Diseases and Liver Disease.</i></b> The number of lives one can save by predicting the disease beforehand is not just huge, but also very important in case of rapidly infectious diseases. Several classification algorithms are used in such cases to predict diseases, and are the reason for saving numerous lives. This paper is a comparative study on these machine learning algorithms used to predict diseases. It will answer your questions about which algorithm would be the best one to use for a particular disease.
                                      </p>
                                      <div className="quotebox">
                                        <div className="icon">
                                          <img
                                            className="svg"
                                            src="assets/img/svg/quote.svg"
                                            alt="tumb"
                                          />
                                        </div>
                                        <p>
                                          The comparative study yields the following results: <br />
                                          Support Vector Machine is the best algorithm to predict Breast Cancer. <br />
                                          Logistic Regression is the best against Heart and General Disease dataset. <br />
                                          Decision Tree yields best results for Liver Disease Dataset
                                        </p>
                                      </div>
                                      {/* END QUOTEBOX */}
                                      <p>
                                        <a href="https://drive.google.com/file/d/1S9AMYnh0NeFIu70IeGJxCCpq4c_xmk_K/view?usp=sharing" target="_blank">Report : A Machine Learning Model on Disease Prediction - A Comparative Study </a>
                                      </p>
                                    </div>
                                    {/* END DESCRIPTION */}
                                  </div>
                                </div>
                              </div>
                              {/* END BOX INNER */}
                            </div>
                            {/* END MODALBOX NEWS */}
                          </Modal>
                          {/* END MODAL */}
                        </div>
                      </li>
                      {/* END Comparative Study BLOG */}
                    </ul>
                    {/* END PORTFOLIO LIST */}
                  </TabPanel>
                  {/* END ML/AI GALLERY */}

                  <TabPanel>
                    <ul className="portfolio_list">
                      
                      {/* BLOCKCHAIN PROJECT - KYC USING SOLIDITY ON ETHEREUM BLOCKCHAIN */}
                      {/* Take info from Chan's page */}
                      <li>
                        <div className="list_inner">
                          <div className="image" onClick={toggleModalOne}>
                            <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                            <div
                              className="main"
                              style={{
                                backgroundImage: "url(assets/img/news/KYC/KYCMainImage.PNG)",
                              }}
                            ></div>
                          </div>
                          {/* END IMAGE */}
                          <div className="details">
                            <div className="extra">
                              <p className="date">
                                Blockchain 
                              </p>
                            </div>
                            {/* END EXTRA */}

                            <h3 className="title" onClick={toggleModalOne}>
                              KYC using Solidity on Ethereum Blockchain
                            </h3>
                            <div className="tokyo_tm_read_more">
                              <a onClick={toggleModalOne}>
                                <span>Know More</span>
                              </a>
                            </div>
                            {/* END READ MORE BUTTON */}
                          </div>
                          {/* END DETAILS */}

                          {/* START MODAL */}
                          <Modal
                            isOpen={isOpen}
                            onRequestClose={toggleModalOne}
                            contentLabel="My dialog"
                            className="mymodal"
                            overlayClassName="myoverlay"
                            closeTimeoutMS={500}
                          >
                            <div className="tokyo_tm_modalbox_news">
                              <button className="close-modal" onClick={toggleModalOne}>
                                <img src="assets/img/svg/cancel.svg" alt="close icon" />
                              </button>
                              {/* END CLOSE ICON */}
                              <div className="box_inner">
                                <div className="description_wrap scrollable">
                                  <div className="image">
                                    <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                                    <div
                                      className="main"
                                      style={{
                                        backgroundImage: "url(assets/img/news/KYC/KYCMainImage.PNG)",
                                      }}
                                    ></div>
                                  </div>
                                  {/* END IMAGE */}
                                  <div className="details">
                                    <div className="extra">
                                    <p className="date">
                                        Blockchain
                                      </p>
                                    </div>
                                    <h3 className="title">
                                      KYC using Solidity on Ethereum Blockchain
                                    </h3>
                                  </div>
                                  {/* END DETAILS */}
                                  <div className="main_content ">
                                    <div className="descriptions">
                                      <p className="bigger">
                                        In my Blockchain course, we worked on developing a KYC on Ethereum Blockchain as our project. This project aimed at providing verified data of KYC users to banks on the Ethereum Blockchain. This will reduce the amount of resources and time spent by every bank for verifying a user's KYC everytime.
                                      </p>
                                      <p>
                                        This project makes KYC easier for customers as well as companies. Customers have to upload their KYC details onto the Blockchain only once and they will be saved for future use. When a customer tries to contact a bank, the back directly verifies the customer's KYC details from the Blockchain with the customer's permission and proceeds with their request. This makes the entire KYC process simpler and faster.
                                      </p>
                                      <p>
                                        <a href="https://github.com/Aneesh4567/KYC_Blockchain" target="_blank">Github Repo : KYC on Ethereum Blockchain</a>
                                      </p>
                                      <p>
                                        <b>In this project, </b><br />
                                        <b>React JS</b> is used for the frontend <br />
                                        <b>Solidity</b> is used to create smart contracts <br />
                                        <b>Truffle</b> is the virtual machine that interlinks the frontend with the backend, and <br />
                                        <b>Ganache CLI</b> is used to provide a working Ethereum testing platform to test the DApp before deploying it on the main blockchain
                                      </p>
                                      <img src="assets/img/news/KYC/KYCImageFlow.png" alt="KYC_Flow" />
                                    </div>
                                    {/* END DESCRIPTION */}
                                  </div>
                                </div>
                              </div>
                              {/* END BOX INNER */}
                            </div>
                            {/* END MODALBOX NEWS */}
                          </Modal>
                          {/* END MODAL */}
                        </div>
                      </li>
                      {/* END KYC BLOG */}
                      {/* END SOUNDCLOUD */}
                    </ul>
                    {/* END PORTFOLIO LIST */}
                  </TabPanel>
                  {/* END Blockchain GALLERY */}

                  <TabPanel>
                    <ul className="portfolio_list">
                      
                      {/* Others | IOT - Sign-to-Speech Converter */}
                      {/* Take info from IOT Project Report gmail - sign to speech converter */}
                      <li>
                        <div className="list_inner">
                          <div className="image" onClick={toggleModalEight}>
                            <img src="assets/img/thumbs/4-3.jpg" alt="thumb" />
                            <div
                              className="main"
                              style={{
                                backgroundImage: "url(assets/img/news/SignToSpeech/SignToSpeech.PNG)",
                              }}
                            ></div>
                          </div>
                          {/* END IMAGE */}
                          <div className="details">
                            <div className="extra">
                              <p className="date">
                                Others | IOT 
                              </p>
                            </div>
                            {/* END EXTRA */}

                            <h3 className="title" onClick={toggleModalEight}>
                              Sign-to-Speech Converter
                            </h3>
                            <div className="tokyo_tm_read_more">
                              <a onClick={toggleModalEight}>
                                <span>Know More</span>
                              </a>
                            </div>
                            {/* END READ MORE BUTTON */}
                          </div>
                          {/* END DETAILS */}

                          {/* START MODAL */}
                          <Modal
                            isOpen={isOpen8}
                            onRequestClose={toggleModalEight}
                            contentLabel="My dialog"
                            className="mymodal"
                            overlayClassName="myoverlay"
                            closeTimeoutMS={500}
                          >
                            <div className="tokyo_tm_modalbox_news">
                              <button className="close-modal" onClick={toggleModalEight}>
                                <img src="assets/img/svg/cancel.svg" alt="close icon" />
                              </button>
                              {/* END CLOSE ICON */}
                              <div className="box_inner">
                                <div className="description_wrap scrollable">
                                  <div className="image">
                                    <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                                    <div
                                      className="main"
                                      style={{
                                        backgroundImage: "url(assets/img/news/SignToSpeech/SignToSpeech.PNG)",
                                      }}
                                    ></div>
                                  </div>
                                  {/* END IMAGE */}
                                  <div className="details">
                                    <div className="extra">
                                    <p className="date">
                                        Others | IOT
                                      </p>
                                    </div>
                                    <h3 className="title">
                                      Sign-to-Speech Converter
                                    </h3>
                                  </div>
                                  {/* END DETAILS */}
                                  <div className="main_content ">
                                    <div className="descriptions">
                                      <p className="bigger">
                                        Speech and gestures are the two expressions by which human beings communicate, but the deaf and dumb, and paralyzed people can only communicate through gestures. The main problem here is that other people usually do not understand gestures or, sometimes, the deaf and dumb themselves do not understand gestures. This paper is our approach to solve this issue.
                                      </p>
                                      <p>
                                        People who are deaf and dumb often suffer with speech development due to severe problems with communication mainly due to unavailaibility of proper means of commincation in such special cases. Around 5% of the world (360 million approx.) are suffering from the same problem. This project helps such people by detecting the movements of deaf and dumb or paralyzed patients and resulted action is shown on LCD screen.
                                      </p>
                                      <p>
                                        Currently, this problem is tackled using image processing which requires large amounts of data and complex algorithms, and through Visual analysis using cameras. It must be made sure that lighting and the orientation must be perfect to get the correct results. We are overcoming these two major issues by using Arduino software and sensors in place of complex computers and cameras.
                                      </p>
                                      <ul>
                                        <li>
                                            To solve this problem, we will measure the actions performed by the deaf and dumb people using resistors array (analog sensor) attached to the gloves in the hand of the user. 
                                        </li>
                                        <li>
                                            Once the glove is placed in the hands, whenever an action for sign language is performed, the analog voltage value is obtained and the corresponding action is identified by the arduino uno board.  
                                        </li>
                                        <li>
                                            LCD display and Bluetooth is used as an output device to convey the message from the user to the receiver.  
                                        </li>
                                        <li>
                                            Also play-back is used to play the respective sound.
                                        </li>
                                        <li>
                                            Arduino IDE and proteus software tools are used for compiling software coding and simulating the design. 
                                        </li>
                                        <li>
                                            This project detects the movements of deaf and dumb or paralyzed patients and resulting actions are shown on the LCD screen, alerting notifications.
                                        </li>
                                      </ul>
                                      <p>
                                        <a href="https://drive.google.com/file/d/1VGzxScLmFlveByBSn3qahlakzzoyIrsz/view?usp=sharing" target="_blank">Report : Sign-to-Speech Converter </a>
                                      </p>
                                    </div>
                                    {/* END DESCRIPTION */}
                                  </div>
                                </div>
                              </div>
                              {/* END BOX INNER */}
                            </div>
                            {/* END MODALBOX NEWS */}
                          </Modal>
                          {/* END MODAL */}
                        </div>
                      </li>
                      {/* END Sign-to-speech BLOG */}
                      
                      {/* END SOUNDCLOUD */}
                    </ul>
                    {/* END PORTFOLIO LIST */}
                  </TabPanel>
                  {/* END Others GALLERY */}
                </SRLWrapper>
                {/* END TABPANEL */}
              </div>
              {/* END LIST WRAPPER */}
            </Tabs>
          </div>
        </div>
      </SimpleReactLightbox>
    </>
  );
};

export default Portfolio;
