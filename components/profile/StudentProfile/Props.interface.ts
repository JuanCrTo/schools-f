import { IStudentProfile } from "@/components/Profile/Props.interface";

export interface IProps {
  student: IStudentProfile;
  onSave: (updatedStudent: IStudentProfile) => void;
}
