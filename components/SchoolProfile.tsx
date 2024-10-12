import React from 'react';
import { ISchoolProfile } from '@/interfaces/IProfile.interface';

interface SchoolProfileProps {
  school: ISchoolProfile;
}

const SchoolProfile: React.FC<SchoolProfileProps> = ({ school }) => {
  return (
    <div className="school-profile">
      <h2>{school.nombre}</h2>
      <p><strong>Email:</strong> {school.email}</p>
      <p><strong>Teléfono:</strong> {school.telefono}</p>
      <p><strong>Dirección:</strong> {school.direccion}</p>
      <p><strong>Tipo de Institución:</strong> {school.tipoInstitucion}</p>
      <p><strong>Número de Estudiantes:</strong> {school.numEstudiantes}</p>
      <p><strong>Número de Profesores:</strong> {school.numProfesores}</p>
      <p><strong>Descripción:</strong> {school.descripcion}</p>
      <p><strong>Servicios:</strong> {school.servicios.join(', ')}</p>
    </div>
  );
};

export default SchoolProfile;