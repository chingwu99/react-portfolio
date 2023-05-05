import { CgProfile } from "react-icons/cg";
import { GrGithub } from "react-icons/gr";

const SocialMediaIcons = () => {
  return (
    <div className="my-5 flex justify-center gap-7 md:justify-start ">
      <a
        className="transition duration-500 hover:opacity-50"
        href="https://github.com/chingwu99"
        target="_blank"
        rel="noreferrer"
      >
        <GrGithub className="text-2xl" />
      </a>

      <a
        className="transition duration-500 hover:opacity-50"
        href="https://www.cakeresume.com/s--VKb3I8PzzeuN-7tdoq9aqQ--/henry-wu-bea4e4"
        target="_blank"
        rel="noreferrer"
      >
        <CgProfile className="text-2xl" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
