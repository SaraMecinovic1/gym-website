import { useState } from "react";
import { Bars3Icon,XMarkIcon } from "@heroicons/react/16/solid";
import Logo from "@/assets/Logo.png"
import { nav } from "framer-motion/client";

type Props = {}

const NavBar = (props: Props) => {
const flexBetween="flex items-center justify-between";

  return (
    <nav>
    <div
    className={‘${flexBetween} fixed top-0 z-30 w-full‘}
    >

    </div>
    </nav>
  )
}
export default NavBar ;