import { useState } from "react";
import useMediaQuery from "../hook/useMediaQuery";
import Link from "../components/Link";
import MenuIcon from "../assets/menu-icon.svg";
import CloseIcon from "../assets/close-icon.svg";

type Props = {
  selectedPage: string;
  setSelectedPage: (value: string) => void;
  isTopOfPage: boolean;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const [isMenuToggeled, setIsMenuToggeled] = useState<boolean>(false);
  const isAboveSmallScreens = useMediaQuery("(min-width:768px)");
  const navbarBackground = isTopOfPage ? "" : " bg-red-500";

  return (
    <nav className={`${navbarBackground} fixed top-0 z-40 w-full py-6`}>
      <div
        className="mx-auto flex w-5/6 items-center justify-between
    "
      >
        <h4 className=" font-playfair text-3xl font-bold">HW</h4>

        {/* DESKTOP NAV */}
        {isAboveSmallScreens ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
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
              page="Testimonials"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />

            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <button
            className="rounded-full bg-red-400 p-2"
            onClick={() => setIsMenuToggeled(!isMenuToggeled)}
          >
            <img alt="menu-icon" src={MenuIcon} />
          </button>
        )}

        {/* MOBILE MENU POPUP */}
        {!isAboveSmallScreens && isMenuToggeled && (
          <div className="fixed bottom-0 right-0 h-full w-[300px] bg-blue-400">
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggeled(!isMenuToggeled)}>
                <img alt="close-icon" src={CloseIcon} />
              </button>
            </div>

            {/* MENU Items */}
            <div className=" ml-[33px] flex flex-col gap-10 text-2xl text-blue-900">
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
                page="Testimonials"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />

              <Link
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
