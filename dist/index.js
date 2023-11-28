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
exports.Students = exports.Courses = exports.Rooms = exports.Teachers = exports.Users = void 0;
const Courses_1 = require("./components/Courses");
const Rooms_1 = require("./components/Rooms");
const Students_1 = require("./components/Students");
const Teachers_1 = require("./components/Teachers");
const Users_1 = require("./components/Users");
class Users {
    readAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const userList = yield (0, Users_1.readAllUsers)();
            if (userList && userList.allUsers) {
                const allUserDetails = userList.allUsers.map((user) => {
                    const _id = user._id;
                    const username = user.username;
                    const password = user.password;
                    return { _id, username, password };
                });
                return allUserDetails;
            }
            else {
                console.error('Failed to fetch user data or no users found.');
            }
        });
    }
    read(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, Users_1.readUser)(userId);
            return response;
        });
    }
    create(getUsername, getPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, Users_1.createUser)(getUsername, getPassword);
            return response;
        });
    }
    update(getID, getUsername, getPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, Users_1.updateUser)(getID, getUsername, getPassword);
            return response;
        });
    }
    delete(getID) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, Users_1.deleteUser)(getID);
            return response;
        });
    }
}
exports.Users = Users;
class Teachers {
    readAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const teacherList = yield (0, Teachers_1.readAllTeachers)();
            if (teacherList && teacherList.allTeachers) {
                const allTeacherDetails = teacherList.allTeachers.map((teacher) => {
                    const _id = teacher._id;
                    const name = teacher.name;
                    const specialized = teacher.specialized;
                    return { _id, name, specialized };
                });
                return allTeacherDetails;
            }
            else {
                console.error('Failed to fetch teacher data or no teachers found.');
            }
        });
    }
    read(teacherId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, Teachers_1.readTeacher)(teacherId);
            return response;
        });
    }
    create(getName, getSpecialized) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, Teachers_1.createTeacher)(getName, getSpecialized);
            return response;
        });
    }
    update(getID, getName, getSpecialized) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, Teachers_1.updateTeacher)(getID, getName, getSpecialized);
            return response;
        });
    }
    delete(getID) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, Teachers_1.deleteTeacher)(getID);
            return response;
        });
    }
}
exports.Teachers = Teachers;
class Rooms {
    readAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const roomList = yield (0, Rooms_1.readAllRooms)();
            if (roomList && roomList.allRooms) {
                const allRoomDetails = roomList.allRooms.map((room) => {
                    const _id = room._id;
                    const name = room.name;
                    const type = room.type;
                    return { _id, name, type };
                });
                return allRoomDetails;
            }
            else {
                console.error('Failed to fetch room data or no rooms found.');
            }
        });
    }
    read(roomId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, Rooms_1.readRoom)(roomId);
            return response;
        });
    }
    create(getName, getType) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, Rooms_1.createRoom)(getName, getType);
            return response;
        });
    }
    update(getID, getName, getType) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, Rooms_1.updateRoom)(getID, getName, getType);
            return response;
        });
    }
    delete(getID) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, Rooms_1.deleteRoom)(getID);
            return response;
        });
    }
}
exports.Rooms = Rooms;
class Courses {
    readAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const courseList = yield (0, Courses_1.readAllCourses)();
            if (courseList && courseList.allCourses) {
                const allCourseDetails = courseList.allCourses.map((course) => {
                    const _id = course._id;
                    const code = course.code;
                    const description = course.description;
                    const units = course.units;
                    const type = course.type;
                    return { _id, code, description, units, type };
                });
                return allCourseDetails;
            }
            else {
                console.error('Failed to fetch course data or no courses found.');
            }
        });
    }
    read(getID) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, Courses_1.readCourse)(getID);
            return response;
        });
    }
    create(getCode, getDescription, getUnits, getType) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, Courses_1.createCourse)(getCode, getDescription, getUnits, getType);
            return response;
        });
    }
    update(getID, getCode, getDescription, getUnits, getType) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, Courses_1.updateCourse)(getID, getCode, getDescription, getUnits, getType);
            return response;
        });
    }
    delete(getID) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, Courses_1.deleteCourse)(getID);
            return response;
        });
    }
}
exports.Courses = Courses;
class Students {
    readAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const studentList = yield (0, Students_1.readAllStudents)();
            if (studentList && studentList.allStudents) {
                const allStudentDetails = studentList.allStudents.map((student) => {
                    const _id = student._id;
                    const program = student.program;
                    const year = student.year;
                    const semester = student.semester;
                    const block = student.block;
                    const courses = student.courses;
                    return { _id, program, year, semester, block, courses };
                });
                return allStudentDetails;
            }
            else {
                console.error('Failed to fetch student data or no students found.');
            }
        });
    }
    read(getID) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, Students_1.readStudent)(getID);
            return response;
        });
    }
    create(getProgram, getYear, getSemester, getBlock, getCourses) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, Students_1.createStudent)(getProgram, getYear, getSemester, getBlock, getCourses);
            return response;
        });
    }
    update(getID, getProgram, getYear, getSemester, getBlock, getCourses) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, Students_1.updateStudent)(getID, getProgram, getYear, getSemester, getBlock, getCourses);
            return response;
        });
    }
    delete(getID) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, Students_1.deleteStudent)(getID);
            return response;
        });
    }
    readAllCourses(getID) {
        return __awaiter(this, void 0, void 0, function* () {
            const courseList = yield (0, Students_1.readAllStudentCourses)(getID);
            if (courseList && courseList.allCourses) {
                const allCourseDetails = courseList.allCourses.map((course) => {
                    const _id = course._id;
                    const code = course.code;
                    const description = course.description;
                    const units = course.units;
                    const type = course.type;
                    return { _id, code, description, units, type };
                });
                return allCourseDetails;
            }
            else {
                console.error('Failed to fetch course data or no courses found.');
            }
        });
    }
    readCourse(getStudentID, getCourseID) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, Students_1.readStudentCourse)(getStudentID, getCourseID);
            return response;
        });
    }
    addCourse(getStudentID, getCode, getDescription, getUnits, getType) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, Students_1.addStudentCourse)(getStudentID, getCode, getDescription, getUnits, getType);
            return response;
        });
    }
    updateCourse(getStudentID, getID, getCode, getDescription, getUnits, getType) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, Students_1.updateStudentCourse)(getStudentID, getID, getCode, getDescription, getUnits, getType);
            return response;
        });
    }
    deleteCourse(getStudentID, getCourseID) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, Students_1.deleteStudentCourses)(getStudentID, getCourseID);
            return response;
        });
    }
}
exports.Students = Students;
// here's how we handle the functions
function approach() {
    return __awaiter(this, void 0, void 0, function* () {
        /*  const user = new Users();
        
            // //read a single user
            // const read = await user.read('65622fd76173f67b0bb8a9fa');
            // console.log(read._id)
        
            // //read all users
            // const readAll = await user.readAll()
            // if (readAll) {
            //     //read id
            //     console.log('User IDs:', readAll.map((user: userModel) => user._id).join(', ')); //map function is the same function of for loop
            // } else {
            //     console.error('Failed to read all users.');
            // }
        
            // //create user
            // const create = await user.create('leiner4', '123')
            // console.log(create._id)
        
            // //update user
            // const update = await user.update( '6563acf43975c81bebf4de23', 'leiner4', '123')
            // console.log(update.username)
        
            // //delete user
            // const del = await user.delete( '6563abe53975c81bebf4de20')
        */
        /*  const teacher = new Teachers();
            
            // //read a single teacher
            // const read = await teacher.read('655e35a67c3c3cca9a957b20');
            // console.log(read)
        
            // //read all teacher
            // const readAll = await teacher.readAll()
            // if (readAll) {
            //     //read id
            //     console.log('User IDs:', readAll.map((teacher: teacherModel) => teacher._id).join(', ')); //map function is the same function of for loop
            // } else {
            //     console.error('Failed to read all users.');
            // }
        
            // //create teacher
            // const create = await teacher.create('teacher2', 'english')
            // console.log(create)
        
            // //update teacher
            // const update = await teacher.update( '6564e365bf64d6840d2b62e0', 'leiner2', 'science')
            // console.log(update)
        
            // //delete teacher
            // const del = await teacher.delete( '6564e365bf64d6840d2b62e0')
        */
        /*  const room = new Rooms();
            
            // //read a single teacher
            // const read = await room.read('655e3853cdba379e4dc7acff');
            // console.log(read)
        
            // // read all room
            // const readAll = await room.readAll()
            // if (readAll) {
            //     //read id
            //     console.log('User IDs:', readAll.map((room: roomModel) => room._id).join(', ')); //map function is the same function of for loop
            // } else {
            //     console.error('Failed to read all users.');
            // }
        
            // //create room
            // const create = await room.create('roo3', 'lab')
            // console.log(create)
        
            // //update room
            // const update = await room.update( '6564ec8a4701fb0526023e3d', 'room3', 'lab')
            // console.log(update)
        
            // //delete room
            // const del = await room.delete( '6564ec8a4701fb0526023e3d')  */
        /*  const course = new Courses();
            
            // //read a single course
            // const read = await course.read('6564f59459a483195f288501');
            // console.log(read)
        
            // // read all course
            // const readAll = await course.readAll()
            // if (readAll) {
            //     //read id
            //     console.log('User IDs:', readAll.map((course: courseModel) => course._id).join(', ')); //map function is the same function of for loop
            // } else {
            //     console.error('Failed to read all users.');
            // }
        
            // //create course
            // const create = await course.create('course 1', 'course number 1', '3', 'lab')
            // console.log(create)
        
            // //update course
            // const update = await course.update('65661e3acdfcd96fb654541d', 'course 1 update', 'course number 1', '3', 'lab')
            // console.log(update._id)
        
            // //delete course
            // const del = await course.delete( '6564f59459a483195f288501')  */
        const student = new Students();
        // //read a single student
        // const read = await student.read('655e24d5682d5868cb204864' );
        // console.log(read.courses)
        // // read all student
        // const readAll = await student.readAll()
        // if (readAll) {
        //     //read id 
        //     console.log('User IDs:', readAll.map((student: studentModel) => student._id).join(', ')); //map function is the same function of for loop 
        // } else {
        //     console.error('Failed to read all users.');
        // }
        // //create student
        // const create = await student.create(
        //     'BSCS',
        //     '4', 
        //     '2', 
        //     'a', 
        //     [
        //         {
        //             code: 'course 1', 
        //             description: 'course number 1', 
        //             units: '3', 
        //             type: 'lab'
        //         },
        //         {
        //             code: 'course 2', 
        //             description: 'course number 2', 
        //             units: '3', 
        //             type: 'lab'
        //         }
        //     ]
        //     )
        // console.log(create)
        // //update student
        // const update = await student.update(
        //     '655e24d5682d5868cb204864',
        //     'BSCS',
        //     '1', 
        //     '2', 
        //     'A', 
        //     [
        //         {
        //             code: 'course 1', 
        //             description: 'course number 1', 
        //             units: '3', 
        //             type: 'lab'
        //         },
        //         {
        //             code: 'course 2', 
        //             description: 'course number 2', 
        //             units: '3', 
        //             type: 'lab'
        //         }
        //     ]
        //     )
        // console.log(update)
        // //delete student
        // const del = await student.delete( '656644f9d1217f791417a63b')  
        // //read a single course
        // const readCourse = await student.readCourse('655e24d5682d5868cb204864', '656618c9cdfcd96fb65453f3' );
        // console.log(readCourse)
        // // read all course
        // const readAllCourses = await student.readAllCourses('655e24d5682d5868cb204864')
        // if (readAllCourses) {
        //     //read id 
        //     console.log('User IDs:', readAllCourses.map((course: courseModel) => course._id).join(', ')); //map function is the same function of for loop 
        // } else {
        //     console.error('Failed to read all users.');
        // }
        // //create course
        // const addCourse = await student.addCourse('655e24d5682d5868cb204864','course 2', 'course number 2', '3', 'lab')
        // console.log(addCourse)
        // //update course
        // const updateCourse = await student.updateCourse('655e24d5682d5868cb204864', '656618c9cdfcd96fb65453f3', 'course 4', 'course number 4', '3', 'lab')
        // console.log(updateCourse?._id) 
        // //delete course
        // const del = await student.deleteCourse( '655e24d5682d5868cb204864', '6565b26dbc544465d954b160')  
    });
}
approach();
