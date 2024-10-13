import React from 'react';
import Link from 'next/link';
import styles from '@/styles/components/ButtonProfile.module.scss';
import { IButtonLink } from '@/interfaces/IButtonLink.interface';

const ButtonLink: React.FC<IButtonLink> = ({ url, label }) => {
  return (
    <Link href={url}>
      <button className={styles.profileButton}>
        {label}
      </button>
    </Link>
  );
};

export default ButtonLink;