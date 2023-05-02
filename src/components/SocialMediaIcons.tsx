import FacebookImg from "../assets/facebook.png";

const SocialMediaIcons = () => {
  return (
    <div className="my-10 flex justify-center gap-7 md:justify-start ">
      <a
        className="transition duration-500 hover:opacity-50"
        href="https://github.com/chingwu99"
        target="_blank"
        rel="noreferrer"
      >
        <img src={FacebookImg} alt="facebook-Img" />
      </a>

      <a
        className="transition duration-500 hover:opacity-50"
        href="https://github.com/chingwu99"
        target="_blank"
        rel="noreferrer"
      >
        <img src={FacebookImg} alt="facebook-Img" />
      </a>
      <a
        className="transition duration-500 hover:opacity-50"
        href="https://github.com/chingwu99"
        target="_blank"
        rel="noreferrer"
      >
        <img src={FacebookImg} alt="facebook-Img" />
      </a>
      <a
        className="transition duration-500 hover:opacity-50"
        href="https://github.com/chingwu99"
        target="_blank"
        rel="noreferrer"
      >
        <img src={FacebookImg} alt="facebook-Img" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
