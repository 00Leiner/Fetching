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
exports.Rooms = exports.Teachers = exports.Users = void 0;
const Rooms_1 = require("./components/Rooms");
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
// here's how we handle the functions
function approach() {
    return __awaiter(this, void 0, void 0, function* () {
        /*  const user = new Users();
        
            //read a single user
            const read = await user.read('65622fd76173f67b0bb8a9fa');
            console.log(read._id)
        
            //read all users
            const readAll = await user.readAll()
            if (readAll) {
                //read id
                console.log('User IDs:', readAll.map((user: userModel) => user._id).join(', ')); //map function is the same function of for loop
            } else {
                console.error('Failed to read all users.');
            }
        
            //create user
            const create = await user.create('leiner4', '123')
            console.log(create._id)
        
            //update user
            const update = await user.update( '6563acf43975c81bebf4de23', 'leiner4', '123')
            console.log(update.username)
        
            //delete user
            const del = await user.delete( '6563abe53975c81bebf4de20')
        */
        /*  const teacher = new Teachers();
            
            //read a single teacher
            const read = await teacher.read('655e35a67c3c3cca9a957b20');
            console.log(read)
        
            //read all users
            const readAll = await teacher.readAll()
            if (readAll) {
                //read id
                console.log('User IDs:', readAll.map((teacher: teacherModel) => teacher._id).join(', ')); //map function is the same function of for loop
            } else {
                console.error('Failed to read all users.');
            }
        
            //create user
            const create = await teacher.create('teacher2', 'english')
            console.log(create)
        
            //update user
            const update = await teacher.update( '6564e365bf64d6840d2b62e0', 'leiner2', 'science')
            console.log(update)
        
            //delete user
            const del = await teacher.delete( '6564e365bf64d6840d2b62e0')
        */
        const room = new Rooms();
        //read a single teacher
        const read = yield room.read('655e3853cdba379e4dc7acff');
        console.log(read);
    });
}
