
import axios, { AxiosResponse } from 'axios';
import { deleteAllData, readData, readSchedData } from './endpoints/Schedule';
import { optionsModel as optionModel, scheduleItemModel, scheduleModel } from '../models/Schedule';

const baseUrl = 'http://ec2-3-27-192-58.ap-southeast-2.compute.amazonaws.com:3000';

const readDataURL = `${baseUrl}${readData}`;
const deleteAllDataURL = `${baseUrl}${deleteAllData}`;
const readScheduleData = `${baseUrl}${readSchedData}`;

export const deleteAll = async (): Promise<any> => {
    const response = await axios.delete(deleteAllDataURL);

    if (response.status === 200) {
        return response.data;
    } else if (response.status === 404) {
        throw new Error(`No Student Found`);
    } else {
        throw new Error(`Unexpected Status: ${response.status}`);
    }
}

export const readOptions = async (): Promise<AxiosResponse<optionModel> | any> => {
    const response: AxiosResponse<optionModel> = await axios.get(readDataURL);
    
    if (response.status === 200) {
        return response.data;
        
    } else if (response.status === 404) {
        throw new Error(`No Schedule Found`);
    } else {
        throw new Error(`Unexpected Status: ${response.status}`);
    }
};

export const readAllPrograms = async (scheduleData: optionModel): Promise<AxiosResponse<scheduleModel> | any> => {
    const id = scheduleData._id
    const url = `${readDataURL}${id}`;

    const response = await axios.get<optionModel>(url);

    if (response.status === 200) {
        return response.data.options;
    } else if (response.status === 404) {
        throw new Error(`No Schedule Found`);
    } else {
        throw new Error(`Unexpected Status: ${response.status}`);
    }
};

export const readProgram = async (scheduleData: optionModel, programData: scheduleModel): Promise<AxiosResponse<scheduleModel> | any> => {
    const id = scheduleData._id
    const program = programData._id
    const url = `${readDataURL}${id}/${program}`;

    const response = await axios.get<scheduleModel>(url);

    if (response.status === 200) {
        return response.data;
    } else if (response.status === 404) {
        throw new Error(`No Schedule Found`);
    } else {
        throw new Error(`Unexpected Status: ${response.status}`);
    }
};

export const readAllSched = async (scheduleData: optionModel, programData: scheduleItemModel): Promise<AxiosResponse<scheduleItemModel> | any> => {
    const id = scheduleData._id
    const program = programData._id
    const url = `${readScheduleData}${id}/${program}`;

    const response = await axios.get<scheduleItemModel>(url);

    if (response.status === 200) {
        return response.data;
    } else if (response.status === 404) {
        throw new Error(`No Schedule Found`);
    } else {
        throw new Error(`Unexpected Status: ${response.status}`);
    }
};

export const readSched = async (scheduleData: optionModel, programData: scheduleModel, schedData: scheduleItemModel): Promise<AxiosResponse<scheduleItemModel> | any> => {
    const id = scheduleData._id
    const program = programData._id
    const sched = schedData._id
    const url = `${readScheduleData}${id}/${program}/${sched}`;

    const response = await axios.get<scheduleItemModel>(url);

    if (response.status === 200) {
        return response.data;
    } else if (response.status === 404) {
        throw new Error(`No Schedule Found`);
    } else {
        throw new Error(`Unexpected Status: ${response.status}`);
    }
};