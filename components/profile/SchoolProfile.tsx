import React from 'react';
import { ISchoolProfile } from '@/interfaces/IProfile.interface';

interface SchoolProfileProps {
  school: ISchoolProfile | null;
}

const SchoolProfile: React.FC<SchoolProfileProps> = ({ school }) => {
  if (!school) {
    return <div>Cargando perfil de la escuela...</div>;
  }

  return (
    <div className="school-profile">
      <h2>{school.nombre}</h2>
      <p><strong>Teléfono:</strong> {school.telefono}</p>
      <p><strong>Ubicación:</strong> {school.ubicacion}</p>
      <p><strong>Tipo de Institución:</strong> {school.tipoInstitucion}</p>
      <p><strong>Número de Estudiantes:</strong> {school.numEstudiantes}</p>
      <p><strong>Número de Profesores:</strong> {school.numProfesores}</p>
      <p><strong>Descripción:</strong> {school.descripcion}</p>
    </div>
  );
};

export default SchoolProfile;