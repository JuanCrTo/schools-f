import { IStudent } from "@/interfaces/Students.interface";
import { backendApi } from "./api/config";

export const getStudentService = async (): Promise<IStudent[]> => {
  try {
    const { data } = await backendApi().get<IStudent[]>("/student");
    return data;
  } catch (error: any) {
    console.error(error.response.data);
    throw new Error(error.response);
  }
};

export const createStudentService = async (input: IStudent): Promise<void> => {
  try {
    await backendApi().post("/student", input);
  } catch (error: any) {
    throw new Error(error.response);
  }
};

export const updateStudentService = async (
  id: string,
  input: IStudent
): Promise<void> => {
  try {
    await backendApi().put(`/student/${id}`, input);
  } catch (error: any) {
    throw new Error(error.response);
  }
};

export const deleteStudentService = async (id: string): Promise<void> => {
  try {
    await backendApi().delete(`/student/${id}`);
  } catch (error: any) {
    throw new Error(error.response);
  }
};

export const getStudentByAccountIdService = async (
  accountId: string
): Promise<IStudent[]> => {
  try {
    const { data } = await backendApi().get<IStudent[]>(
      `/student/account/${accountId}`
    );
    return data;
  } catch (error: any) {
    console.error(error.response.data);
    throw new Error(error.response);
  }
};
