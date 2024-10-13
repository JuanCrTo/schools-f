import React from 'react';
import SchoolProfile from './SchoolProfile';
import StudentProfile from './StudentProfile';
import { ISchoolProfile } from '@/interfaces/IProfile.interface';
import { IStudentProfile } from '@/interfaces/IProfile.interface';

interface ProfilePageProps {
  userType: 'school' | 'student';
  profileData: ISchoolProfile | IStudentProfile;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ userType, profileData }) => {
  return (
    <div className="profile-page">
      {userType === 'school' ? (
        <SchoolProfile school={profileData as ISchoolProfile} />
      ) : (
        <StudentProfile student={profileData as IStudentProfile} />
      )}
    </div>
  );
};

export default ProfilePage;