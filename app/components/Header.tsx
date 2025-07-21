'use client';
import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";


export default function Header({ backHref = "/" }: { backHref?: string }) {
  return (
    <header style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      <Link href={backHref}>
      <RiArrowRightLine />
        <span>Back</span>
      </Link>
    </header>
  );
}
