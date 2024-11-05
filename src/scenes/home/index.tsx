import { Page } from "@/shared/types";
import HomePageText from "@/assets/HomePageText.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/actionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import HomePageGrafic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AloYoga from "@/assets/AloYoga.png"

type Props = {
  setSelectedPage: (value: Page) => void;
};

function Home({ setSelectedPage }: Props) {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}

      <div>
        {/* MAIN HEADER */}
        <div>
          {/* HEADINGS */}
          <div>
            <div>
              <div>
                <img src={HomePageText} alt="home-page-text" />
              </div>
            </div>
            <p className="mt-8 text-sm">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </div>
          {/* ACTIONS */}
          <div>
            <button>
              <ActionButton setSelectedPage={setSelectedPage}>
                Join Now
              </ActionButton>
              <AnchorLink
                className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                onClick={() => setSelectedPage(Page.ContactUs)}
                href={`#${Page.ContactUs}`}
              >
                <p>Learn More</p>
              </AnchorLink>
            </button>
          </div>
        </div>

        {/* IMAGE */}
        <div>
          <img src={HomePageGrafic} alt="home-pageGraphic" />
        </div>
      </div>

      {isAboveMediumScreen && (
        <div>
          <div>
            <div>
              <img src={AloYoga} alt="fortune-sponsor" />
              <img src={SponsorRedBull} alt="redbull-sponsor" />
              <img src={SponsorForbes} alt="forbes-sponsor" />
              <img src={SponsorFortune} alt="fortune-sponsor" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Home;
