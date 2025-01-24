import React from "react";
import Link from "next/link";
import styles from "@/styles/components/ButtonLink.module.scss";
import { Iprops } from "@/components/ButtonLink/Props.interface";

// Componente de botón de enlace

const ButtonLink: React.FC<Iprops> = ({ url, label, onClick }) => {
  return (
    <Link href={url} passHref>
      <button onClick={onClick} className={styles.profileButton}>
        {label}
      </button>
    </Link>
  );
};

export default ButtonLink;
