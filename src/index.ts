import { readUserData, createUserData } from './api/Users';
import { Users } from './models/Users';


async function fetchDataAndPrint() {
    try {
        const userData = await readUserData();
        console.log(userData);
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

  const handleCreateUser = async () => {
    const newUser: Users = {
      username: 'sdasd',
      password: '123',
    };
    try {
      const response = await createUserData(newUser);
      console.log('User created successfully:', response.data);
    } catch (error) {
      console.error('Failed to create user:', error);
    }
  };

handleCreateUser()