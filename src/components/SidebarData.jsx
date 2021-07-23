import React, {useState} from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as HiIcons from "react-icons/hi";
import * as TiIcons from "react-icons/ti";


export const SidebarData = [
    {
        title: "Accueil",
        path: "/",
        icon: <AiIcons.AiFillHome/>,
        cName: "nav-text"
    },
    {
        title: "Galerie",
        path: "/galerie",
        icon: <HiIcons.HiOutlinePhotograph/>,
        cName: "nav-text"
    },
    {
        title: "Ressources",
        path: "/ressources",
        icon: <FaIcons.FaRegCalendarTimes/>,
        cName: "nav-text"
    },
    {
        title: "Contact",
        path: "/contact",
        icon: <TiIcons.TiContacts/>,
        cName: "nav-text"
    },
]