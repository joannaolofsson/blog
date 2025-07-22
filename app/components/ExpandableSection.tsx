
'use client'
import { useState } from 'react';
import styles from './ExpandableSection.module.css';
import IconButton from './shared/Button/IconButton';
import { RiArrowDownSLine } from "react-icons/ri";

interface Props {
  label: string;
  children: React.ReactNode;
}

const ExpandableSection = ({ label, children }: Props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles.sectionContainer}>
      <div className={styles.header} onClick={() => setExpanded(prev => !prev)}>
        <div className={styles.editSectionHeading}>
        <h4>{label}</h4>
        <IconButton 
        icon={<RiArrowDownSLine size={20}/>}>
          {expanded ? 'Collapse' : 'Expand to Edit'}
        </IconButton>
        </div>
      </div>

      {expanded && (
        <div className={styles.content}>
          {children}
        </div>
      )}
    </div>
  );
};

export default ExpandableSection;
