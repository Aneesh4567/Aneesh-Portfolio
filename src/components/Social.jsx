import React from "react";

const SocialShare = [
  { 
    iconName: "linkedin", 
    link: "https://www.linkedin.com/in/aneesh-gupta-vandanapu-bb0277198/" 
  },
  {
    iconName: "github",
    link: "https://github.com/Aneesh4567",
  },
  {
    iconName: "facebook",
    link: "https://www.facebook.com/aneeshguptavandanapu",
  },
  { 
    iconName: "twitter", 
    link: "https://twitter.com/aneesh4567" 
  },
  {
    iconName: "instagram",
    link: "https://www.instagram.com/aneesh_gupta_4567/",
  },
];
const Social = () => {
  return (
    <>
      <ul className="social">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={`/assets/img/svg/social/${val.iconName}.svg`}
                alt="social"
              ></img>
            </a>
          </li>
        ))}
      </ul>
      {/* END SOCIAL */}
    </>
  );
};

export default Social;
