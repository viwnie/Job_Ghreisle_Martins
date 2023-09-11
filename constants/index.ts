import { StaticImageData } from "next/image";

interface NavLink {
    id: string;
    title: string;
}


export const navLinks: NavLink[] = [
    {
        id: "services",
        title: "Services",
    },
    {
        id: "about",
        title: "About",
    },
    {
        id: "contact",
        title: "Contact",
    },
];
