// funkcionalnost za navigaciju do odredjene selekcije na sajtu

import { Page } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: Page;
  setSelectedPage: (value: Page) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as Page;
  return (
    <AnchorLink
      onClick={() => setSelectedPage(lowerCasePage)}
      className={`${
        selectedPage === lowerCasePage ? "text-primary-500" : ""
      } transition duration-500 hover:text-primary-300`}
      href={`#${lowerCasePage}`}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
