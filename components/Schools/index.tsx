import React, { useEffect } from "react";
import styles from "@/styles/components/Schools.module.scss";
import { IProps } from "./Props.interface";
import { useRouter } from "next/router";

// Componente de lista de Colegios

interface SchoolsProps {
  schools: IProps[];
}

const Schools: React.FC<SchoolsProps> = ({ schools }) => {
  const router = useRouter();

  const handleSchoolClick = (school: IProps) => {
    if (school._id) {
      router.push(`/school/${school._id}`);
    }
  };

  return (
    <div className={styles.schoolsContainer}>
      {schools.length === 0 ? (
        <p>
          No se encontraron colegios que coincidan con los filtros aplicados.
        </p>
      ) : (
        <ul className={styles.schoolsList}>
          {schools.map((colegio, index) => (
            <li
              key={colegio._id || `school-${index}`}
              className={styles.schoolItem}
            >
              <a
                onClick={() => handleSchoolClick(colegio)}
                className={styles.schoolLink}
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  e.key === "Enter" && handleSchoolClick(colegio)
                }
              >
                <h3 className={styles.schoolName}>{colegio.nombre}</h3>
                <p>Teléfono: {colegio.telefono}</p>
                <p>Ubicación: {colegio.ubicacion}</p>
                <p>Descripción: {colegio.descripcion}</p>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Schools;
