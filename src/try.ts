import { readAllUsers, createUser, updateUser, deleteUser, readUser } from './components/Users'
import { User } from './models/Users';

export class Users{
    //readUser('655eff9f89b8d1c46ff8a6d5')
    //createUser('leiner2', '123')
    //updateUser('6562077e91e87b8717aa15d6', 'leiner3', '123')
    //deleteUser('656221aca948cefdb59a043c')

    // read all list
    async readAll(): Promise<User[] | undefined> {
        try {
            const userList = await readAllUsers();
            return userList;
        } catch (error: any) {
            console.error(`Failed to read all users: ${error.message}`);
            return undefined;
        }
    }
}
