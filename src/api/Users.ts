
import axios, { AxiosResponse } from 'axios';
import { createData, readData, updateData, deleteData } from './endpoints/Users';
import { Users } from '../models/Users';

const baseUrl = 'http://localhost:3000';

const readDataURL = `${baseUrl}${readData}`;
const createDataURL = `${baseUrl}${createData}`;
const updateDataURL = `${baseUrl}${updateData}`;
const deleteDataURL = `${baseUrl}${deleteData}`;

export const readUserData = async (): Promise<Users[]> => {
    try{
        const response: AxiosResponse<Users[]> = await axios.get(readDataURL);
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
     }
}
