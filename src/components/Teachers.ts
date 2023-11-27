import { readTeacherData, createTeacherData, updateTeacherData, deleteTeacherData, readAllTeachersData } from '../api/Teachers';
import { teacherModel, teachersModel } from '../models/Teachers';


export const readAllTeachers = async (): Promise<{ allTeachers: Array<teachersModel> } | any> => {
  try {
    const response = await readAllTeachersData();

    if (Array.isArray(response.teachers)) {
      const allTeachers = response.teachers.map((teacher: teacherModel) => ({
        _id: teacher._id,
        name: teacher.name,
        specialized: teacher.specialized
      }));

    return { allTeachers };

    } else {
      console.error('Invalid response format. Expected an array.');
      return null;
    }

  } catch (error: any) {
    console.error(`Failed to read all teachers: ${error.message}`);
  }
}

export const readTeacher = async (getID: string): Promise<teachersModel | any> => {
  try {
    const teacher: teacherModel = { _id: getID };
    const response: teachersModel = await readTeacherData(teacher);

    const _id = response.teacher._id;
    const name = response.teacher.name;
    const specialized = response.teacher.specialized;

    return { _id, name, specialized };
    


  } catch (error: any) {
    console.error(`Failed to read teacher: ${error.message}`);
  }
};

export const createTeacher = async (getName: string, getSpecialized: string) => {
  const newTeacher: teacherModel = {
    name: getName,
    specialized: getSpecialized,
  };
  try {
    const response = await createTeacherData(newTeacher);
    console.log(`Teacher created successfully:`, response);
    return response.teacher;
  } catch (error: any) {
    console.error(`Failed to delete teacher: ${error.message}`);
  }
};

export const updateTeacher = async (getID: string, getName: string, getSpecialized: string) => {
  const newTeacher: teacherModel = {
    _id: getID,
    name: getName,
    specialized: getSpecialized
  };
  try {
    const response = await updateTeacherData(newTeacher);
    console.log(`Teacher update successfully:`, response);
    return response.teachers;

  } catch (error: any) {
    console.error(`Failed to update teacher: ${error.message}`);
  }
};

export const deleteTeacher = async (getID: string) => {
  const newTeacher: teacherModel = {
    _id: getID
  };
  try {
    const response = await deleteTeacherData(newTeacher);
    console.log('Teacher Deleted!');

  } catch (error: any) {
    console.error(`Failed to delete teacher: ${error.message}`);
  }
};
