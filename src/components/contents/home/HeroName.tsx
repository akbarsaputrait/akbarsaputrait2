import "@styles/hero-name.scss";

import Image from "next/image";

const HeroName: React.FC = () => {
  return (
    <div className="hero-name-container mt-6">
      <Image
        src="/name-light.svg"
        alt=""
        className="hero-name-item"
        width={500}
        height={500}
      />

      <div
        className="hero-profile"
        style={{
          backgroundImage: `url('/profile.jpeg')`,
        }}
      ></div>
    </div>
  );
};

export default HeroName;
