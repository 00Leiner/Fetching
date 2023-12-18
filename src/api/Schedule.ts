
import axios, { AxiosResponse } from 'axios';
import { readData } from './endpoints/Schedule';
import { scheduleModel, schedulesModel } from '../models/Schedule';

const baseUrl = 'http://ec2-3-27-192-58.ap-southeast-2.compute.amazonaws.com:3000';

const readDataURL = `${baseUrl}${readData}`;

export const readOptions = async (): Promise<AxiosResponse<schedulesModel> | any> => {
    const response: AxiosResponse<schedulesModel> = await axios.get(readDataURL);
    
    if (response.status === 200) {
        return response.data;
        
    } else if (response.status === 404) {
        throw new Error(`No Schedule Found`);
    } else {
        throw new Error(`Unexpected Status: ${response.status}`);
    }
};

export const readScheduleData = async (scheduleData: scheduleModel): Promise<AxiosResponse<schedulesModel> | any> => {
    const id = scheduleData._id
    const url = `${readDataURL}${id}`;

    const response = await axios.get<schedulesModel>(url);

    if (response.status === 200) {
        return response.data.schedule;
    } else if (response.status === 404) {
        throw new Error(`No Schedule Found`);
    } else {
        throw new Error(`Unexpected Status: ${response.status}`);
    }
};
