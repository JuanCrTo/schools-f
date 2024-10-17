import React from 'react';
import { ISchoolProfile } from '@/interfaces/IProfile.interface';
import styles from '@/styles/components/SchoolProfile.module.scss'
import { FaPhone, FaMapMarkerAlt, FaUsers, FaChalkboardTeacher, FaInfoCircle, FaMoneyBillWave, FaBookOpen, FaUserGraduate } from 'react-icons/fa';


interface SchoolProfileProps {
  school: ISchoolProfile | null;
}

const SchoolProfile: React.FC<SchoolProfileProps> = ({ school }) => {
  if (!school) {
    return <div>Cargando perfil de la escuela...</div>;
  }

  return (
    <div className={styles.schoolProfile}>
      <h2 className={styles.schoolName}>{school.nombre}</h2>
      
      <p><strong>Descripción:</strong> {school.descripcion}</p>

      <div className={styles.profileDetails}>
        <div className={styles.profileSection}>
          <h3>Información Básica</h3>
          <p><FaPhone /> <strong>Teléfono:</strong> {school.telefono}</p>
          <p><FaMapMarkerAlt /> <strong>Ubicación:</strong> {school.ubicacion}</p>
          <p><strong>Tipo de Institución:</strong> {school.tipoInstitucion}</p>
          <p><strong>Género:</strong> {school.genero}</p>
        </div>
        
        <div className={styles.profileSection}>
          <h3>Estadísticas</h3>
          <p><FaUserGraduate /> <strong>Número de Estudiantes:</strong> {school.numEstudiantes}</p>
          <p><FaChalkboardTeacher /> <strong>Número de Profesores:</strong> {school.numProfesores}</p>
        </div>
        
        <div className={styles.profileSection}>
          <h3>Servicios y Costos</h3>
          <p><FaBookOpen /> <strong>Servicios:</strong> {school.servicios}</p>
          <p><strong>Precio Mínimo Mensual:</strong> ${school.precioMinMensual}</p>
          <p><strong>Precio Máximo Mensual:</strong> ${school.precioMaxMensual}</p>
          <p><strong>Precio Mínimo Matrícula:</strong> ${school.precioMinMatricula}</p>
          <p><strong>Precio Máximo Matrícula:</strong> ${school.precioMaxMatricula}</p>
        </div>

        <div className={styles.profileSection}>
          <h3>Rendimiento Académico</h3>
          <p><strong>ICFES Mínimo:</strong> {school.icfesMinimo}</p>
        </div>

        <div className={styles.profileSection}>
          <h3>Infraestructura</h3>
          <p><strong>Cantidad de Profesores Mínima:</strong> {school.cantidadProfesoresMin}</p>
          <p><strong>Cantidad de Salones Mínima:</strong> {school.cantidadSalonesMin}</p>
          <p><strong>Cantidad de Grados Mínima:</strong> {school.cantidadGradosMin}</p>
        </div>
      </div>
    </div>
  );
};

export default SchoolProfile;