import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoMailOpenOutline,
} from "react-icons/io5";

import "@styles/header-info.scss";

interface ISocialMedia {
  url: string;
  icon: React.ReactNode;
}

const HeaderInfo: React.FC = () => {
  const socialMedias: ISocialMedia[] = [
    {
      url: "https://github.com/akbarsaputrait",
      icon: <IoLogoGithub size={24} />,
    },
    {
      url: "https://www.linkedin.com/in/akbarsaputrait/",
      icon: <IoLogoLinkedin size={24} />,
    },
    {
      url: "https://twitter.com/akbarsaputrait",
      icon: <IoLogoTwitter size={24} />,
    },
    {
      url: "https://www.instagram.com/akbarsaputrait/",
      icon: <IoLogoInstagram size={24} />,
    },
    {
      url: "mailto:akbarsaputrait@outlook.com",
      icon: <IoMailOpenOutline size={24} />,
    },
  ];

  return (
    <div className="header-info-container">
      <div>
        <p className="font-bold">Frontend Web Developer</p>
        <p>Since 2019</p>
      </div>

      <div className="social-content">
        {socialMedias.map((soc, index) => (
          <a href={soc.url} key={index} target="_blank" rel="noreferrer">
            {soc.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default HeaderInfo;
