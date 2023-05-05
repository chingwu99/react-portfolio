import SocialMediaIcons from "../components/SocialMediaIcons";
import Link from "../components/Link";

type Props = {
  selectedPage: string;
  setSelectedPage: (value: string) => void;
};

const Footer = ({ selectedPage, setSelectedPage }: Props) => {
  return (
    <footer className="h-auto bg-violet-400 pt-10">
      <div className="w-5/6 mx-auto">
        <SocialMediaIcons />
        <div className="flex flex-col items-center md:items-start   gap-5 font-opensans text-sm font-semibold">
          <Link
            page="Home"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />

          <Link
            page="Skills"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />

          <Link
            page="Projects"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />

          <Link
            page="About"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />

          <Link
            page="Contact"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        </div>
        <div className="md:flex justify-center md:justify-between text-center py-5">
          <p className="font-playfair font-semibold text-2xl text-yellow-400">
            HENRY WU
          </p>

          <p className="font-playfair text-md text-yellow-400">
            Copyright © 2023
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
