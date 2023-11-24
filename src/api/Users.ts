
import axios, { AxiosResponse } from 'axios';
import { createData, readData, updateData, deleteData } from './endpoints/Users';
import { Users } from '../models/Users';

const baseUrl = 'http://localhost:3000';

const readDataURL = `${baseUrl}${readData}`;
const createDataURL = `${baseUrl}${createData}`;
const updateDataURL = `${baseUrl}${updateData}`;
const deleteDataURL = `${baseUrl}${deleteData}`;

export const readUserData = async (): Promise<Users[] | undefined> => {
    try {
        const response: AxiosResponse<Users[]> = await axios.get(readDataURL);
        if (response.status === 200) {
            return response.data;
        } else if (response.status === 404) {
            console.log('No User Found');
            throw response.status;
        } else{
            console.log('Unexpected Status:', response.status);
            throw new Error(`Unexpected Status: ${response.status}`);
        }
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}

export const createUserData = async (userData: Users): Promise<AxiosResponse> => {
    try {
        const response = await axios.post(createDataURL , userData);
        if (response.status === 201) {
            const responseDataAsString = JSON.stringify(response.data);
            return responseDataAsString;
        } else {
            console.log('Creating Unsuccessful');
            return new Error(`Creating Unsuccessful`);
        }
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}
