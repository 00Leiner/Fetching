import axios, { AxiosResponse } from 'axios';
import { createData, readData, updateData, deleteData } from './endpoints/Teachers';
import { teacherModel, teachersModel } from '../models/Teachers';

const baseUrl = 'http://localhost:3000';

const readDataURL = `${baseUrl}${readData}`;
const createDataURL = `${baseUrl}${createData}`;
const updateDataURL = `${baseUrl}${updateData}`;
const deleteDataURL = `${baseUrl}${deleteData}`;

export const readAllTeachersData = async (): Promise<AxiosResponse<teachersModel> | any> => {
    const response: AxiosResponse<teachersModel> = await axios.get(readDataURL);
    
    if (response.status === 200) {
        return response.data;
        
    } else if (response.status === 404) {
        throw new Error(`No Teacher Found`);
    } else {
        throw new Error(`Unexpected Status: ${response.status}`);
    }
};

export const readTeacherData = async (teacherData: teacherModel): Promise<AxiosResponse<teachersModel> | any> => {
  
    const id = teacherData._id
    const url = `${readDataURL}${id}`;

    const response = await axios.get<teachersModel>(url);

    if (response.status === 200) {
        return response.data;
    } else if (response.status === 404) {
        throw new Error(`No Teacher Found`);
    } else {
        throw new Error(`Unexpected Status: ${response.status}`);
    }
};

export const createTeacherData = async (teacherData: teacherModel): Promise<AxiosResponse<teacherModel> | any> => {
    const response: AxiosResponse<teacherModel> = await axios.post(createDataURL, teacherData);
    if (response.status === 201) {
        return response.data;
    } else {
        throw new Error(`Creating Unsuccessful: ${response.status}`);
    }
};

export const updateTeacherData = async (teacherData: teacherModel): Promise<AxiosResponse<teacherModel> | any> => {
    const id = teacherData._id
    const url = `${updateDataURL}${id}`;
    const response: AxiosResponse<teacherModel> = await axios.put(url, teacherData);

    if(response.status === 200) {
        return response.data;
    } else if(response.status === 404){
        throw new Error (`Teacher not found: ${response.status}`);
    }else{
        throw new Error(`Unexpected Status: ${response.status}`);
    }
};

export const deleteTeacherData = async (teacherData: teacherModel): Promise<AxiosResponse<teacherModel> | any> => {
    const id = teacherData._id
    const url = `${deleteDataURL}${id}`;
    const response = await axios.delete(url);

    if(response.status === 204) {
        return response.data;
    } else if(response.status === 404){
        throw new Error (`Teacher not found: ${response.status}`);
    }else{
        throw new Error(`Unexpected Status: ${response.status}`);
    }
};