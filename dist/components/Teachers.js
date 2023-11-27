"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTeacher = exports.updateTeacher = exports.createTeacher = exports.readTeacher = exports.readAllTeachers = void 0;
const Teachers_1 = require("../api/Teachers");
const readAllTeachers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, Teachers_1.readAllTeachersData)();
        if (Array.isArray(response.teachers)) {
            const allTeachers = response.teachers.map((teacher) => ({
                _id: teacher._id,
                name: teacher.name,
                specialized: teacher.specialized
            }));
            return { allTeachers };
        }
        else {
            console.error('Invalid response format. Expected an array.');
            return null;
        }
    }
    catch (error) {
        console.error(`Failed to read all teachers: ${error.message}`);
    }
});
exports.readAllTeachers = readAllTeachers;
const readTeacher = (getID) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const teacher = { _id: getID };
        const response = yield (0, Teachers_1.readTeacherData)(teacher);
        const _id = response.teacher._id;
        const name = response.teacher.name;
        const specialized = response.teacher.specialized;
        return { _id, name, specialized };
    }
    catch (error) {
        console.error(`Failed to read teacher: ${error.message}`);
    }
});
exports.readTeacher = readTeacher;
const createTeacher = (getName, getSpecialized) => __awaiter(void 0, void 0, void 0, function* () {
    const newTeacher = {
        name: getName,
        specialized: getSpecialized,
    };
    try {
        const response = yield (0, Teachers_1.createTeacherData)(newTeacher);
        console.log(`Teacher created successfully:`, response);
        return response.teacher;
    }
    catch (error) {
        console.error(`Failed to delete teacher: ${error.message}`);
    }
});
exports.createTeacher = createTeacher;
const updateTeacher = (getID, getName, getSpecialized) => __awaiter(void 0, void 0, void 0, function* () {
    const newTeacher = {
        _id: getID,
        name: getName,
        specialized: getSpecialized
    };
    try {
        const response = yield (0, Teachers_1.updateTeacherData)(newTeacher);
        console.log(`Teacher update successfully:`, response);
        return response.teachers;
    }
    catch (error) {
        console.error(`Failed to update teacher: ${error.message}`);
    }
});
exports.updateTeacher = updateTeacher;
const deleteTeacher = (getID) => __awaiter(void 0, void 0, void 0, function* () {
    const newTeacher = {
        _id: getID
    };
    try {
        const response = yield (0, Teachers_1.deleteTeacherData)(newTeacher);
        console.log('Teacher Deleted!');
    }
    catch (error) {
        console.error(`Failed to delete teacher: ${error.message}`);
    }
});
exports.deleteTeacher = deleteTeacher;
