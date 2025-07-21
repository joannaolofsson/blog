import React from 'react'
import styles from './Button.module.css';

// I need a button with icon, a button spinner, might be the same, one button for modal or drawer, one disabled

export interface ButtonProps { 
    variant?: 
    | "primary" 
    | "secondary" 
    | "drawer"
    | "modal" 
    | "success" 
    | "ghost ";
    children: React.ReactNode;
    onClick?: () => void;
    disabled?:  boolean; 
    isLoading?: boolean; // useful for async functions or success feedback
    icon?: React.ReactNode;
    size?: "sm" | "md" | "lg" // controls padding and font-size
    ariaLabel?: string;
    type?: "button" | "submit";
}

export default function Button({
    variant="primary", 
    children, onClick, 
    size = 'md'
}: ButtonProps) {
    return (
        <div>
        <button 
            className={`{styles.button} ${styles[variant]} ${styles[size]}`} 
            onClick={onClick}>{children}
        </button>
        </div>
    )
}

