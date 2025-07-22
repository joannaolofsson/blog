import styles from './IconButton.module.css';
import React from 'react'

type IconButtonProps = {
  icon: React.ReactNode;               // The icon itself
  label?: string;                     // Optional text label
  ariaLabel?: string;                 // Required if no visible label (for accessibility)
  variant?: "primary" | "ghost" | "danger" | "text"; // Visual style
  size?: "sm" | "md" | "lg";          // Padding and font size
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
};
export default function IconButton({
  icon,
  label,
  ariaLabel,
  variant = "primary",
  size = "md",
  children,
  onClick,
  disabled,
}: IconButtonProps) {
  const isIconOnly = !label;

  return (
    <button
      type="button"
      className={`
        ${styles.button}
        ${styles[variant]}
        ${styles[size]}
        ${isIconOnly ? styles.iconOnly : ''}
      `}
      aria-label={ariaLabel ?? label}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
      {label && <span className={styles.label}>{label}</span>}
    </button>
  );
}
