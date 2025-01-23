import { ISchool } from "@/interfaces/Schools.interface";
import { backendApi } from "./api/config";

export const getSchoolService = async (): Promise<ISchool[]> => {
  try {
    const { data } = await backendApi().get<ISchool[]>("/school");
    return data;
  } catch (error: any) {
    console.error(error.response.data);
    throw new Error(error.response);
  }
};

export const createSchoolService = async (input: ISchool): Promise<void> => {
  try {
    await backendApi().post("/school", input);
  } catch (error: any) {
    throw new Error(error.response);
  }
};

export const updateSchoolService = async (
  id: string,
  input: ISchool
): Promise<void> => {
  try {
    await backendApi().put(`/school/${id}`, input);
  } catch (error: any) {
    throw new Error(error.response);
  }
};

export const deleteSchoolService = async (id: string): Promise<void> => {
  try {
    await backendApi().delete(`/school/${id}`);
  } catch (error: any) {
    throw new Error(error.response);
  }
};

export const getSchoolByAccountIdService = async (
  accountId: string
): Promise<ISchool[]> => {
  try {
    const { data } = await backendApi().get<ISchool[]>(
      `/school/account/${accountId}`
    );
    return data;
  } catch (error: any) {
    console.error(error.response.data);
    throw new Error(error.response);
  }
};
