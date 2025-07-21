import React from 'react'
import IconButton from './shared/Button/IconButton'
import { GoFileDirectory } from "react-icons/go";
import { PiGoogleDriveLogoDuotone } from "react-icons/pi";
import styles from './UploadForm.module.css';

// TODO: Button Should be added, if uploading several files. 

export default function UploadForm() {
  return (
    <form action="" className={styles.formContainer}>
      <h4>Upload your md files</h4>
      <div className={styles.buttonGroup}>
        <IconButton
          icon={<GoFileDirectory size={24}/>}
        />
        <IconButton
          icon={<PiGoogleDriveLogoDuotone size={24}/>}
        />
      </div>
    </form>
  )
}

// <input type="file" accept=".md,.txt" />
