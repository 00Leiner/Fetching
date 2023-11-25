import { readUserData, createUserData, updateUserData, deleteUserData, readAllUsersData } from '../api/Users';
import { User, Users } from '../models/Users';


export const readAllUsers = async () => {
  try {
    const response = await readAllUsersData();
    const userList: User[] = response.data.users;
    //console.log(userList);
    return userList;
  } catch (error: any) {
    console.error(`Failed to read all users: ${error.message}`);
  }
}

export const readUser = async (getID: string): Promise<User | undefined> => {
  try {
    const user: User = { _id: getID };
    const response = await readUserData(user);

    if (response.status === 200) {
      const userData: User = response.data;
      return userData;
    } else {
      console.log(`Failed to read user data. Status: ${response.status}`);
      return undefined;
    }

  } catch (error: any) {
    console.error(`Failed to read user: ${error.message}`);
    return undefined;
  }
};



export const createUser = async (inputUsername: string, inputPassword: string) => {
  const newUser: User = {
    username: inputUsername,
    password: inputPassword,
  };
  try {
    const response = await createUserData(newUser);
    console.log(`User created successfully:`, response.data);
  } catch (error: any) {
    console.error(`Failed to delete user: ${error.message}`);
  }
};

export const updateUser = async (getID: string, inputUsername: string, inputPassword: string) => {
  const newUser: User = {
    _id: getID,
    username: inputUsername,
    password: inputPassword
  };
  try {
    const response = await updateUserData(newUser);
    console.log(`User update successfully:`, response.data);

  } catch (error: any) {
    console.error(`Failed to update user: ${error.message}`);
  }
};

export const deleteUser = async (getID: string) => {
  const newUser: User = {
    _id: getID
  };
  try {
    const response = await deleteUserData(newUser);
    console.log(`User deleted:`, response.data);

  } catch (error: any) {
    console.error(`Failed to delete user: ${error.message}`);
  }
};
