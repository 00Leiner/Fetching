export interface studentModel{
    program: string;
    year: string;
    semester: string;
    block: string;
    courses: [
      {
        code: string;
        description: string;
        units: string;
        labOrLec: string;
      },
    ];
  };

export interface studentsModel {
  teacher: studentModel;
}