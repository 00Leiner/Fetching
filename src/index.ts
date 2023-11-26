import { readAllUsers, createUser, updateUser, deleteUser, readUser } from './components/Users'
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

async function approach() {
    const user = new Users();
/* 
    const read = await user.read('65622fd76173f67b0bb8a9fa');
    console.log(read._id)
 */
/* 
    const readAll = await user.readAll()
    if (readAll) {
        console.log('User IDs:', readAll.map((user: userModel) => user._id).join(', '));
    } else {
        console.error('Failed to read all users.');
    }
 */
/* 
    const create = await user.create('leiner4', '123')
    console.log(create._id)
 */
/* 
    const update = await user.update( '6563acf43975c81bebf4de23', 'leiner4', '123')
    console.log(update.username)
    */ 
/* 
    const del = await user.delete( '6563abe53975c81bebf4de20')
     */
}

approach()
