import React, { useState } from "react";
import { IStudentProfile } from "@/interfaces/IProfile.interface";
import styles from "@/styles/components/StudentProfile.module.scss"; // Importa los estilos

interface StudentProfileProps {
  student: IStudentProfile;
}

const StudentProfile: React.FC<StudentProfileProps & { onSave: (updatedStudent: IStudentProfile) => void }> = ({ student, onSave }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedStudent, setEditedStudent] = useState<IStudentProfile>(student);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEditedStudent({ ...editedStudent, [name]: value });
  };

  const handleSave = () => {
    onSave(editedStudent); // Llama a la función de guardado pasada como prop
    setEditMode(false);
  };

  const handleCancel = () => {
    setEditMode(false);
    setEditedStudent(student);
  };

  return (
    <div className={styles.studentProfile}>
      <h2>{editMode ? "Editar Perfil del Estudiante" : "Perfil del Estudiante"}</h2>

      {editMode ? (
        <>
          <label>
            Nombre:
            <input
              type="text"
              name="nombre"
              value={editedStudent.nombre}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Teléfono:
            <input
              type="text"
              name="telefono"
              value={editedStudent.telefono}
              onChange={handleInputChange}
            />
          </label>
          <div className={styles.buttons}>
            <button onClick={handleSave}>Guardar</button>
            <button onClick={handleCancel}>Cancelar</button>
          </div>
        </>
      ) : (
        <>
          <p>
            <strong>Nombre:</strong> {student.nombre}
          </p>
          <p>
            <strong>Teléfono:</strong> {student.telefono}
          </p>
          <button onClick={() => setEditMode(true)}>Editar Perfil</button>
        </>
      )}
    </div>
  );
};


export default StudentProfile;
