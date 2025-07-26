import React from 'react'
import IconButton from './shared/Button/IconButton'
import { RiDriveFill, RiFileAddFill } from "react-icons/ri";
import styles from './UploadForm.module.css';
import { useRef } from 'react';


export type Props = {
  onUpload: (rawText: string) => void;
};

export default function UploadForm({onUpload}: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  return (
    <form action="" className={styles.formContainer}>
      <h4>Upload your md files</h4>
        <div
          className={styles.uploadButton}
          onClick={() => fileInputRef.current?.click()}
          role="button"
          aria-label="Upload files"
        >
          <RiFileAddFill size={24} />
        </div>
        <input
          type="file"
          accept="md"
          onChange={async (e) => {
            const file = e.target.files?.[0];
            if(!file) return;
            const text = await file.text();
            onUpload(text);
          }}
          className={styles.hiddenFileInput}
          ref={fileInputRef}
        />
    </form>
  )
}

