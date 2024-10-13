import React from 'react';
import styles from '@/styles/components/Schools.module.scss';
import { ISchool } from '@/interfaces/ISchool.interface';

interface SchoolsProps {
  schools: ISchool[];
}

const Schools: React.FC<SchoolsProps> = ({ schools }) => {
  return (
    <div className={styles.schoolsContainer}>
      {schools.length === 0 ? (
        <p>No se encontraron colegios que coincidan con los filtros aplicados.</p>
      ) : (
        <ul className={styles.schoolsList}>
          {schools.map(colegio => (
            <li key={colegio.id} className={styles.schoolItem}>
              <a href={`/perfil-colegio/${colegio.id}`} className={styles.schoolLink}>
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