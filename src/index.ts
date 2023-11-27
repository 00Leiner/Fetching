import { readAllCourses, readCourse, createCourse, updateCourse, deleteCourse } from './components/Courses';
import { createRoom, deleteRoom, readAllRooms, readRoom, updateRoom } from './components/Rooms';
import { createTeacher, deleteTeacher, readAllTeachers, readTeacher, updateTeacher } from './components/Teachers';
import { readAllUsers, createUser, updateUser, deleteUser, readUser } from './components/Users'
import { courseModel } from './models/Courses';
import { roomModel } from './models/Rooms';
import { teacherModel } from './models/Teachers';
import { userModel, usersModel } from './models/Users';

export class Users{
    async readAll() {
        const userList = await readAllUsers();

        if (userList && userList.allUsers) {
            const allUserDetails = userList.allUsers.map((user: userModel) => {
                const _id = user._id;
                const username = user.username;
                const password = user.password;
                return { _id, username, password };
        });
            return allUserDetails;

        } else {
            console.error('Failed to fetch user data or no users found.');
        }
    }

    async read(userId: string) {
        const response = await readUser(userId);
        return response
    }

    async create(getUsername: string, getPassword: string){
        const response = await createUser(getUsername, getPassword);
        return response
    }

    async update(getID: string, getUsername: string, getPassword: string){
        const response = await updateUser(getID, getUsername, getPassword);
        return response
    }

    async delete(getID: string){
        const response = await deleteUser(getID);
        return response
    }
}

export class Teachers{
    async readAll() {
        const teacherList = await readAllTeachers();

        if (teacherList && teacherList.allTeachers) {
            const allTeacherDetails = teacherList.allTeachers.map((teacher: teacherModel) => {
                const _id = teacher._id;
                const name = teacher.name;
                const specialized = teacher.specialized;
                return { _id, name, specialized };
        });
            return allTeacherDetails;

        } else {
            console.error('Failed to fetch teacher data or no teachers found.');
        }
    }

    async read(teacherId: string) {
        const response = await readTeacher(teacherId);
        return response
    }

    async create(getName: string, getSpecialized: string){
        const response = await createTeacher(getName, getSpecialized);
        return response
    }

    async update(getID: string, getName: string, getSpecialized: string){
        const response = await updateTeacher(getID, getName, getSpecialized);
        return response
    }

    async delete(getID: string){
        const response = await deleteTeacher(getID);
        return response
    }

}

export class Rooms{
    async readAll() {
        const roomList = await readAllRooms();

        if (roomList && roomList.allRooms) {
            const allRoomDetails = roomList.allRooms.map((room: roomModel) => {
                const _id = room._id;
                const name = room.name;
                const type = room.type;
                return { _id, name, type };
        });
            return allRoomDetails;

        } else {
            console.error('Failed to fetch room data or no rooms found.');
        }
    }

    async read(roomId: string) {
        const response = await readRoom(roomId);
        return response
    }

    async create(getName: string, getType: string){
        const response = await createRoom(getName, getType);
        return response
    }

    async update(getID: string, getName: string, getType: string){
        const response = await updateRoom(getID, getName, getType);
        return response
    }

    async delete(getID: string){
        const response = await deleteRoom(getID);
        return response
    }
}

export class Courses{
    async readAll() {
        const courseList = await readAllCourses();

        if (courseList && courseList.allCourses) {
            const allCourseDetails = courseList.allCourses.map((course: courseModel) => {
                const _id = course._id;
                const code = course.code;
                const description = course.description;
                const units = course.units;
                const type = course.type;

                return { _id, code, description, units, type };
        });
            return allCourseDetails;

        } else {
            console.error('Failed to fetch course data or no courses found.');
        }
    }

    async read(getID: string) {
        const response = await readCourse(getID);
        return response
    }

    async create(getCode: string, getDescription: string, getUnits: string, getType: string){
        const response = await createCourse(getCode, getDescription, getUnits, getType);
        return response
    }

    async update(getID: string, getCode: string, getDescription: string, getUnits: string, getType: string){
        const response = await updateCourse(getID, getCode, getDescription, getUnits, getType);
        return response
    }

    async delete(getID: string){
        const response = await deleteCourse(getID);
        return response
    }
}



// here's how we handle the functions
async function approach() {
    
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

 const course = new Courses();
    
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
    // const update = await course.update('6564f59459a483195f288501', 'course 1 update', 'course number 1', '3', 'lab')
    // console.log(update) 

    // //delete course
    // const del = await course.delete( '6564f59459a483195f288501') 
    

    
}

approach()