import React, { useEffect, useState } from 'react';
import styles from '@/styles/components/Schools.module.scss';
import { ISchool } from '@/interfaces/ISchool.interface';

const Schools: React.FC = () => {
  const [colegios, setColegios] = useState<ISchool[]>([]);

  useEffect(() => {
    const fetchColegios = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_LOCAL}/school`); // Reemplaza con la URL de tu backend
        const data = await response.json();
        setColegios(data); // Asumiendo que tu backend devuelve un array de colegios
      } catch (error) {
        console.error('Error al obtener los colegios:', error);
      }
    };

    fetchColegios();
  }, []);

  return (
    <div className={styles.schoolsContainer}>
      <ul className={styles.schoolsList}>
        {colegios.map(colegio => (
          <li key={colegio.id} className={styles.schoolItem}>
            <a href={`/perfil-colegio/${colegio.id}`} className={styles.schoolLink}>
              <h3 className={styles.schoolName}>{colegio.nombre}</h3>
              <p>Telefono: {colegio.telefono}</p>
              <p>Dirección: {colegio.direccion}</p>
              <p>Descripción: {colegio.descripcion}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Schools;