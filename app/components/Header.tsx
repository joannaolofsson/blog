'use client';
import Link from "next/link";
import { RiArrowLeftLine } from "react-icons/ri";
import styles from './Header.module.css';

export default function Header({ backHref = "/" }: { backHref?: string }) {
  return (
    <header className={styles.headerContainer}>
      <Link href={backHref} className={styles.headerContent}>
      <RiArrowLeftLine />
        <span>Back</span>
      </Link>
    </header>
  );
}
