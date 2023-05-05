import { useEffect, useState } from "react";
import useMediaQuery from "./hook/useMediaQuery";
import DotGroup from "./components/DotGroup";
import Landing from "./scenes/Landing";
import Navbar from "./scenes/Navbar";
import LinearGradient from "./components/LinearGradient";
import MySkills from "./scenes/MySkills";
import Projects from "./scenes/Projects";
import AboutMe from "./scenes/AboutMe";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";

const App = () => {
  const [selectedPage, setSelectedPage] = useState<string>("home");
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);

      if (window.scrollY < 750) {
        setSelectedPage("home");
      } else if (window.scrollY < 1500) {
        setSelectedPage("skills");
      } else if (window.scrollY < 3000) {
        setSelectedPage("projects");
      } else if (window.scrollY < 4000) {
        setSelectedPage("about");
      } else if (window.scrollY < 5000) {
        setSelectedPage("contact");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      <div className="mx-auto w-5/6 md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>

      <LinearGradient width="w-full" />

      <div className="mx-auto w-5/6 md:h-full mb-5">
        <MySkills />
      </div>

      <LinearGradient width="w-full" />

      <div className="mx-auto w-5/6 ">
        <Projects />
      </div>

      <LinearGradient width="w-full" />

      <div className="mx-auto w-5/6 md:h-full">
        <AboutMe />
      </div>

      <LinearGradient width="w-full" />

      <div className="mx-auto w-5/6 md:h-full">
        <Contact />
      </div>

      <Footer selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
};

export default App;
