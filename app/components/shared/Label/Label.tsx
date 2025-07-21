import styles from './Label.module.css';
import React from 'react'

export interface LabelProps {
    text: string;
}

export default function Label({text}: LabelProps) {
  return (
    <label htmlFor="">{text}</label>
  )
}
