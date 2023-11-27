export interface teacherModel {
  _id?: string;
  name?: string;
  specialized?: string;
}
export interface teachersModel {
  teacher: teacherModel;
}