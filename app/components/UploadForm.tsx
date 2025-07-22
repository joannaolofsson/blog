import React from 'react'
import IconButton from './shared/Button/IconButton'
import { RiDriveFill, RiFileAddFill } from "react-icons/ri";
import styles from './UploadForm.module.css';

export default function UploadForm() {
  return (
    <form action="" className={styles.formContainer}>
      <h4>Upload your md files</h4>
      <div className={styles.buttonGroup}>
        <IconButton
          icon={<RiFileAddFill size={24}/>}
        >Upload from file</IconButton>
        <IconButton
          icon={<RiDriveFill size={24}/>}
        >Google Drive</IconButton>
      </div>
    </form>
  )
}

// <input type="file" accept=".md,.txt" />
