import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '@/styles/components/SchoolProfile.module.scss';
import { ISchool } from '@/interfaces/ISchool.interface';

const SchoolDetails: React.FC = () => {
  const router = useRouter();
  const [school, setSchool] = useState<ISchool | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSchoolDetails = async () => {
      if (!router.isReady) return;

      const { id } = router.query;
      console.log('Router query:', router.query);
      console.log('ID del colegio en la URL:', id);

      if (!id || Array.isArray(id)) {
        setError('ID de colegio no válido');
        setLoading(false);
        return;
      }

      try {
        const url = `${process.env.NEXT_PUBLIC_API_URL_LOCAL}/school/profile/details/${id}`;
        console.log('URL de la solicitud:', url);

        const response = await fetch(url);
        console.log('Respuesta de la API:', response);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Datos del colegio:', data);
        setSchool(data);
      } catch (error) {
        console.error('Error fetching school details:', error);
        setError('Error al cargar los detalles del colegio');
      } finally {
        setLoading(false);
      }
    };

    fetchSchoolDetails();
  }, [router.isReady, router.query]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!school) {
    return <p>No se encontraron detalles del colegio.</p>;
  }

  return (
    <div className={styles.schoolProfile}>
      <h2 className={styles.schoolName}>{school.nombre}</h2>
      <p>ID: {school._id}</p>
      <p>Teléfono: {school.telefono}</p>
      <p>Ubicación: {school.ubicacion}</p>
      <p>Descripción: {school.descripcion}</p>
    </div>
  );
};

export default SchoolDetails;