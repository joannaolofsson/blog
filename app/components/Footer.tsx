import React from 'react'
import styles from './Footer.mobile.module.css';
import Button from './shared/Button/Button';

export default function Footer() {
  return (
    <div className={styles.footer}>
        <div className={styles.buttonGroup}>
        <Button variant="primary" size='sm'>Reset All</Button> {/** onClick={handleReset} */}
        <Button variant="primary" size='sm'>Preview</Button> {/** onClick={handlePreview} */}
        </div>
    </div>
  )
}
