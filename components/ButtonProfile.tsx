import React from 'react';
import Link from 'next/link';
import styles from '@/styles/components/ButtonProfile.module.scss';

const ButtonProfile: React.FC = () => {
  return (
    <Link href="/studentProfile">
      <button className={styles.profileButton}>
        Perfil
      </button>
    </Link>
  );
};

export default ButtonProfile;
