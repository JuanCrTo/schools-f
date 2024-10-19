import React, { useState } from "react";
import {
  ISchoolProfile,
  Genero,
  TipoInstitucion,
} from "@/interfaces/IProfile.interface";
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
  const [editableSchool, setEditableSchool] = useState<ISchoolProfile | null>(
    school
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEditableSchool((prevState) =>
      prevState ? { ...prevState, [name]: value } : null
    );
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEditableSchool((prevState) =>
      prevState ? { ...prevState, [name]: value } : null
    );
  };

  if (!school) {
    return <div>Cargando perfil de la escuela...</div>;
  }

  const handleSave = () => {
    if (editableSchool) {
      onSave(editableSchool);
    }
  };

  return (
    <div className={styles.schoolProfile}>
      <strong>Nombre:</strong> <br />
      <h2 className={styles.schoolName}>
        <input
          type="text"
          name="nombre"
          value={editableSchool?.nombre || ""}
          onChange={handleInputChange}
        />
      </h2>

      <p>
        <strong>Descripción:</strong> <br />
        <textarea
          name="descripcion"
          value={editableSchool?.descripcion || ""}
          onChange={handleInputChange}
        />
      </p>

      <div className={styles.profileDetails}>
        <div className={styles.profileSection}>
          <h3>Información Básica</h3>
          <p>
            <FaPhone />
            <strong>Teléfono:</strong>
            <input
              type="text"
              name="telefono"
              value={editableSchool?.telefono || ""}
              onChange={handleInputChange}
            />
          </p>
          <p>
            <FaMapMarkerAlt />
            <strong>Ubicación:</strong>
            <input
              type="text"
              name="ubicacion"
              value={editableSchool?.ubicacion || ""}
              onChange={handleInputChange}
            />
          </p>

          <p>
            <strong>Tipo de Institución:</strong>
            <select
              name="tipoInstitucion"
              value={editableSchool?.tipoInstitucion || TipoInstitucion.PRIVADO}
              onChange={handleSelectChange}
            >
              {Object.values(TipoInstitucion).map((tipo) => (
                <option key={tipo} value={tipo}>
                  {tipo}
                </option>
              ))}
            </select>
          </p>

          <p>
            <strong>Género:</strong>
            <select
              name="genero"
              value={editableSchool?.genero || Genero.MIXTO}
              onChange={handleSelectChange}
            >
              {Object.values(Genero).map((gen) => (
                <option key={gen} value={gen}>
                  {gen}
                </option>
              ))}
            </select>
          </p>
        </div>

        <div className={styles.profileSection}>
          <h3>Estadísticas</h3>
          <p>
            <FaUserGraduate />
            <strong>Número de Estudiantes:</strong>
            <input
              type="number"
              name="numEstudiantes"
              value={editableSchool?.numEstudiantes || 0}
              onChange={handleInputChange}
            />
          </p>
          <p>
            <FaChalkboardTeacher />
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
          <p>
            <FaBookOpen />
            <strong>Servicios:</strong>
            <input
              type="text"
              name="servicios"
              value={editableSchool?.servicios || ""}
              onChange={handleInputChange}
            />
          </p>
          <p>
            <strong>Precio Mensual:</strong>
            <input
              type="number"
              name="precioMensual"
              value={editableSchool?.precioMensual || 0}
              onChange={handleInputChange}
            />
          </p>
          <p>
            <strong>Precio Matrícula:</strong>
            <input
              type="number"
              name="precioMatricula"
              value={editableSchool?.precioMatricula || 0}
              onChange={handleInputChange}
            />
          </p>
        </div>

        <div className={styles.profileSection}>
          <h3>Rendimiento Académico</h3>
          <p>
            <strong>ICFES:</strong>
            <input
              type="number"
              name="icfes"
              value={editableSchool?.icfes || 0}
              onChange={handleInputChange}
            />
          </p>
        </div>

        <div className={styles.profileSection}>
          <h3>Infraestructura</h3>
          <p>
            <strong>Cantidad de Salones:</strong>
            <input
              type="number"
              name="cantidadSalones"
              value={editableSchool?.cantidadSalones || 0}
              onChange={handleInputChange}
            />
          </p>
          <p>
            <strong>Cantidad de Grados:</strong>
            <input
              type="number"
              name="cantidadGrados"
              value={editableSchool?.cantidadGrados || 0}
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
