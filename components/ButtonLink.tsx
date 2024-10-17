import React from "react";
import Link from "next/link";
import styles from "@/styles/components/ButtonLink.module.scss";
import { IButtonLink } from "@/interfaces/IButtonLink.interface";

const ButtonLink: React.FC<IButtonLink> = ({ url, label, onClick }) => {
  return (
    <Link href={url} passHref>
      <button onClick={onClick} className={styles.profileButton}>
        {label}
      </button>
    </Link>
  );
};

export default ButtonLink;
