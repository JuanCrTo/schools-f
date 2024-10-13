import React, { useEffect, useState } from 'react';
import { ISchoolProfile } from '@/interfaces/IProfile.interface';
import SchoolProfile from '@/components/SchoolProfile';
import styles from '@/styles/pages/Home.module.scss';

const fetchSchoolProfile = async (schoolId: string) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_LOCAL}/school/${schoolId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Error al obtener la información del colegio');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error en la solicitud:', error);
    return null; // Devolver null en caso de error
  }
};

const SchoolProfilePage: React.FC<{ schoolId: string }> = ({ schoolId }) => {
  const [school, setSchool] = useState<ISchoolProfile | null>(null);

  useEffect(() => {
    const getSchoolProfile = async () => {
      const schoolData = await fetchSchoolProfile(schoolId);
      setSchool(schoolData);
    };

    getSchoolProfile();
  }, [schoolId]);

  if (!school) {
    return <div>Cargando perfil del colegio...</div>; // Mensaje de carga mientras se obtienen los datos
  }

  return (
    <div className={styles.schoolProfileContainer}>
      <SchoolProfile school={school} />
    </div>
  );
};

// Aquí debes pasar el schoolId correspondiente al perfil del colegio que deseas mostrar.
// Puedes obtener este ID de las props, de la URL, o del estado global, dependiendo de tu implementación.
export default function Home() {
  const schoolId = "12345"; // Reemplaza con el ID real del colegio

  return (
    <SchoolProfilePage schoolId={schoolId} />
  );
}
