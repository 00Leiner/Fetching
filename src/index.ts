import { createTeacher, deleteTeacher, readAllTeachers, readTeacher, updateTeacher } from './components/Teachers';
import { readAllUsers, createUser, updateUser, deleteUser, readUser } from './components/Users'
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


async function approach() {
    // here's how we handle the functions
    
/*     const user = new Users();

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

    const teacher = new Teachers();
/*     
    //read a single teacher
    const read = await teacher.read('655e35a67c3c3cca9a957b20');
    console.log(read) */
/* 
    //read all users
    const readAll = await teacher.readAll()
    if (readAll) {
        //read id 
        console.log('User IDs:', readAll.map((teacher: teacherModel) => teacher._id).join(', ')); //map function is the same function of for loop 
    } else {
        console.error('Failed to read all users.');
    } */
/* 
    //create user
    const create = await teacher.create('teacher2', 'english')
    console.log(create) */
/* 
    //update user
    const update = await teacher.update( '6564e365bf64d6840d2b62e0', 'leiner2', 'science')
    console.log(update)  */

    //delete user
    const del = await teacher.delete( '6564e365bf64d6840d2b62e0') 

}

approach()
