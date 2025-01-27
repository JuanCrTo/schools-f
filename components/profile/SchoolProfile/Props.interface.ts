import { ISchoolProfile } from "@/components/Profile/Props.interface";

export interface IProps {
  school: ISchoolProfile | null;
  onSave: (updatedSchool: ISchoolProfile) => void;
}
