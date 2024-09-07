"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-5 md:top-8 inset-x-0 max-w-2xl mx-auto z-50 ", className)}
            
        >

            <Menu setActive={setActive}>
                <Link href={"/"}>
                    <MenuItem setActive={setActive} active={active} item="Home">
                    </MenuItem>
                </Link>
                <MenuItem setActive={setActive} active={active} item="Lets Connect">
                    <div className="flex flex-col space-y-8 text-xl p-4 ">
                        <HoveredLink  href="https://www.linkedin.com/in/tejas-dherange-54a6a627b">LinkedIn</HoveredLink>
                        <HoveredLink  href="https://www.instagram.com/tejasdherange_2182">Instagram</HoveredLink>
                        <HoveredLink  href="https://github.com/Tejas-Dherange">GitHub</HoveredLink>
                        <HoveredLink  href="https://x.com/Tejas_0099">Twitter</HoveredLink>
                    </div>
                </MenuItem>
                <Link href={"/contact"}>
                    <MenuItem setActive={setActive} active={active} item="Contact Me">
                    </MenuItem>
                </Link>
                
            </Menu>
        </div>
    )

};
export default Navbar;