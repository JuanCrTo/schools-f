import React, { useState } from "react";
import { ISchoolProfile } from "@/interfaces/IProfile.interface";
import styles from "@/styles/components/SchoolProfile.module.scss";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaChalkboardTeacher,
  FaBookOpen,
  FaUserGraduate,
} from "react-icons/fa";

interface SchoolProfileProps {
  school: ISchoolProfile | null;
  onSave: (updatedSchool: ISchoolProfile) => void;
}

const SchoolProfile: React.FC<SchoolProfileProps> = ({ school, onSave }) => {
  const [editableSchool, setEditableSchool] = useState<ISchoolProfile | null>(school);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditableSchool(prevState => prevState ? { ...prevState, [name]: value } : null);
  };

  if (!school) {
    return <div>Cargando perfil de la escuela...</div>;
  }

  const handleSave = () => {
    if (editableSchool) {
      onSave(editableSchool); // Llamar a la función de guardado pasando el nuevo perfil
    }
  };

  return (
    <div className={styles.schoolProfile}>
      <h2 className={styles.schoolName}>
        <input 
          type="text" 
          name="nombre" 
          value={editableSchool?.nombre || ''} 
          onChange={handleInputChange} 
        />
      </h2>
      
      <p>
        <strong>Descripción:</strong>
        <textarea 
          name="descripcion" 
          value={editableSchool?.descripcion || ''} 
          onChange={handleInputChange} 
        />
      </p>

      <div className={styles.profileDetails}>
        <div className={styles.profileSection}>
          <h3>Información Básica</h3>
          <p><FaPhone /> 
            <strong>Teléfono:</strong> 
            <input 
              type="text" 
              name="telefono" 
              value={editableSchool?.telefono || ''} 
              onChange={handleInputChange} 
            />
          </p>
          <p><FaMapMarkerAlt /> 
            <strong>Ubicación:</strong> 
            <input 
              type="text" 
              name="ubicacion" 
              value={editableSchool?.ubicacion || ''} 
              onChange={handleInputChange} 
            />
          </p>
          <p><strong>Tipo de Institución:</strong> 
            <input 
              type="text" 
              name="tipoInstitucion" 
              value={editableSchool?.tipoInstitucion || ''} 
              onChange={handleInputChange} 
            />
          </p>
          <p><strong>Género:</strong> 
            <input 
              type="text" 
              name="genero" 
              value={editableSchool?.genero || ''} 
              onChange={handleInputChange} 
            />
          </p>
        </div>

        <div className={styles.profileSection}>
          <h3>Estadísticas</h3>
          <p><FaUserGraduate /> 
            <strong>Número de Estudiantes:</strong> 
            <input 
              type="number" 
              name="numEstudiantes" 
              value={editableSchool?.numEstudiantes || 0} 
              onChange={handleInputChange} 
            />
          </p>
          <p><FaChalkboardTeacher /> 
            <strong>Número de Profesores:</strong> 
            <input 
              type="number" 
              name="numProfesores" 
              value={editableSchool?.numProfesores || 0} 
              onChange={handleInputChange} 
            />
          </p>
        </div>

        <div className={styles.profileSection}>
          <h3>Servicios y Costos</h3>
          <p><FaBookOpen /> 
            <strong>Servicios:</strong> 
            <input 
              type="text" 
              name="servicios" 
              value={editableSchool?.servicios || ''} 
              onChange={handleInputChange} 
            />
          </p>
          <p><strong>Precio Mínimo Mensual:</strong> 
            <input 
              type="number" 
              name="precioMinMensual" 
              value={editableSchool?.precioMinMensual || 0} 
              onChange={handleInputChange} 
            />
          </p>
          <p><strong>Precio Máximo Mensual:</strong> 
            <input 
              type="number" 
              name="precioMaxMensual" 
              value={editableSchool?.precioMaxMensual || 0} 
              onChange={handleInputChange} 
            />
          </p>
          <p><strong>Precio Mínimo Matrícula:</strong> 
            <input 
              type="number" 
              name="precioMinMatricula" 
              value={editableSchool?.precioMinMatricula || 0} 
              onChange={handleInputChange} 
            />
          </p>
          <p><strong>Precio Máximo Matrícula:</strong> 
            <input 
              type="number" 
              name="precioMaxMatricula" 
              value={editableSchool?.precioMaxMatricula || 0} 
              onChange={handleInputChange} 
            />
          </p>
        </div>

        <div className={styles.profileSection}>
          <h3>Rendimiento Académico</h3>
          <p><strong>ICFES Mínimo:</strong> 
            <input 
              type="number" 
              name="icfesMinimo" 
              value={editableSchool?.icfesMinimo || 0} 
              onChange={handleInputChange} 
            />
          </p>
        </div>

        <div className={styles.profileSection}>
          <h3>Infraestructura</h3>
          <p><strong>Cantidad de Profesores Mínima:</strong> 
            <input 
              type="number" 
              name="cantidadProfesoresMin" 
              value={editableSchool?.cantidadProfesoresMin || 0} 
              onChange={handleInputChange} 
            />
          </p>
          <p><strong>Cantidad de Salones Mínima:</strong> 
            <input 
              type="number" 
              name="cantidadSalonesMin" 
              value={editableSchool?.cantidadSalonesMin || 0} 
              onChange={handleInputChange} 
            />
          </p>
          <p><strong>Cantidad de Grados Mínima:</strong> 
            <input 
              type="number" 
              name="cantidadGradosMin" 
              value={editableSchool?.cantidadGradosMin || 0} 
              onChange={handleInputChange} 
            />
          </p>
        </div>

        <button onClick={handleSave}>Guardar Cambios</button>
      </div>
    </div>
  );
};

export default SchoolProfile;
