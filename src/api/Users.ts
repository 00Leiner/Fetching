
import axios, { AxiosResponse } from 'axios';
import { createData, readData, updateData, deleteData } from './endpoints/Users';
import { User, Users } from '../models/Users';

const baseUrl = 'http://localhost:3000';

const readDataURL = `${baseUrl}${readData}`;
const createDataURL = `${baseUrl}${createData}`;
const updateDataURL = `${baseUrl}${updateData}`;
const deleteDataURL = `${baseUrl}${deleteData}`;

export const readAllUsersData = async (): Promise<AxiosResponse<Users>> => {
    const response: AxiosResponse<Users> = await axios.get(readDataURL);
    
    if (response.status === 200) {
        return response;
    } else if (response.status === 404) {
        throw new Error(`No User Found`);
    } else {
        throw new Error(`Unexpected Status: ${response.status}`);
    }
};

export const readUserData = async (userData: User): Promise<AxiosResponse<User>> => {
  
    const id = userData._id
    const url = `${readDataURL}${id}`;
    const response = await axios.get(url);

    if (response.status === 200) {
        return response;
    } else if (response.status === 404) {
        throw new Error(`No User Found`);
    } else{
        throw new Error(`Unexpected Status: ${response.status}`);
    }
};


export const createUserData = async (userData: User): Promise<AxiosResponse<User>> => {
    const response: AxiosResponse<User> = await axios.post(createDataURL, userData);
    if (response.status === 201) {
        return response;
    } else {
        throw new Error(`Creating Unsuccessful: ${response.status}`);
    }
};

export const updateUserData = async (userData: User): Promise<AxiosResponse<User>> => {
    const id = userData._id
    const url = `${updateDataURL}${id}`;
    const response = await axios.put(url, userData);

    if(response.status === 200) {
        return response;
    } else if(response.status === 404){
        throw new Error (`User not found: ${response.status}`);
    }else{
        throw new Error(`Unexpected Status: ${response.status}`);
    }
};

export const deleteUserData = async (userData: User): Promise<AxiosResponse<User>> => {
    const id = userData._id
    const url = `${deleteDataURL}${id}`;
    const response = await axios.delete(url);

    if(response.status === 204) {
        return response;
    } else if(response.status === 404){
        throw new Error (`User not found: ${response.status}`);
    }else{
        throw new Error(`Unexpected Status: ${response.status}`);
    }
};