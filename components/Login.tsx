import React, { useEffect, useState } from 'react';
import { useUserContext } from './UserContext';
import StudentProfile from './StudentProfile';
import SchoolProfile from './SchoolProfile';
import { IStudentProfile, ISchoolProfile } from '@/interfaces/IProfile.interface';

const Perfil: React.FC = () => {
  const { userId, tipoUsuario } = useUserContext();
  const [profileData, setProfileData] = useState<IStudentProfile | ISchoolProfile | null>(null);
  
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`/api/${tipoUsuario === 'Colegio' ? 'school' : 'student'}/${userId}`);
        if (response.ok) {
          const data = await response.json();
          setProfileData(data);
        } else {
          console.error('Error fetching profile:', response.statusText);
        }
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    if (userId) {
      fetchProfile();
    }
  }, [userId, tipoUsuario]);

  if (!profileData) {
    return <div>Cargando perfil...</div>;
  }

  return (
    <div>
      {tipoUsuario === 'Colegio' ? (
        <SchoolProfile school={profileData as ISchoolProfile} />
      ) : (
        <StudentProfile student={profileData as IStudentProfile} />
      )}
    </div>
  );
};

export default Perfil;