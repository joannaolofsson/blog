'use client'
import { useTheme } from "@/app/context/ThemeContext";

// Added the theme here to test it out

import { RiCloseFill } from "react-icons/ri";
import TagBtn from "./TagBtn";
export default function TagBadge() {
  const {theme} = useTheme();
  return (
    <>
    <ul >
      <li 
      style={{backgroundColor: theme.tagColor,
        color: theme.tagTextColor,
        fontSize: theme.headingSize
      }}>
        <span>Tag Name</span>
        <button type="button" className="">
          <RiCloseFill />
        </button>
      </li>
      <li>
        <TagBtn/>
      </li>
    </ul>
    </>
  );
}
