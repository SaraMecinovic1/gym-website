import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";

type Props = {};

const NavBar = (props: Props) => {
  const flexBetween = "flex items-center justify-between";

  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        {/* Dodatni sadržaj može ići ovde */}
      </div>
    </nav>
  );
};

export default NavBar; // Ovaj deo osigurava da se komponenta izveze pravilno
