import React, { useEffect } from 'react';
import styles from '@/styles/components/Schools.module.scss';
import { ISchool } from '@/interfaces/ISchool.interface';
import { useRouter } from 'next/router';

interface SchoolsProps {
  schools: ISchool[];
}

const Schools: React.FC<SchoolsProps> = ({ schools }) => {
  const router = useRouter();

  useEffect(() => {
    console.log('Schools recibidas en el componente:', schools);
  }, [schools]);

  const handleSchoolClick = (school: ISchool) => {
    console.log('Colegio clickeado:', school);
    if (school._id) {
      console.log('Navegando a:', `/school/${school._id}`);
      router.push(`/school/${school._id}`);
    } else {
      console.error('ID del colegio no válido:', school);
    }
  };

  return (
    <div className={styles.schoolsContainer}>
      {schools.length === 0 ? (
        <p>No se encontraron colegios que coincidan con los filtros aplicados.</p>
      ) : (
        <ul className={styles.schoolsList}>
          {schools.map((colegio, index) => (
            <li key={colegio._id || `school-${index}`} className={styles.schoolItem}>
              <a
                onClick={() => handleSchoolClick(colegio)}
                className={styles.schoolLink}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleSchoolClick(colegio)}
              >
                <h3 className={styles.schoolName}>{colegio.nombre}</h3>
                <p>ID: {colegio._id || 'No disponible'}</p>
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