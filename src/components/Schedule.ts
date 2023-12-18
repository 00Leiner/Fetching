import { 
  deleteAll, readOptions, readAllPrograms, readProgram, readAllSched, readSched
} from '../api/Schedule';
import { scheduleModel, scheduleItemModel, optionsModel, optionModel } from '../models/Schedule';

export const deleteAllOptions = async (): Promise<Array<optionModel> | any> => {
  try {
    const response = await deleteAll();
    console.log('Deleted!', response);

  } catch (error: any) {
    console.error(`Failed to delete schedule: ${error.message}`);
  }
}

export const readAllOptions = async (): Promise<{ allSchedules: Array<optionModel> } | any> => {
  try {
    const response = await readOptions();

    if (Array.isArray(response.schedules)) {
      const allSchedules: optionModel[] = response.schedules.map((schedule: optionsModel) => ({
        _id: schedule._id,
        options: schedule.options,
        programs: schedule.programs,
      }));

    return { allSchedules };

    } else {
      console.error('Invalid response format. Expected an array.');
      return null;
    }

  } catch (error: any) {
    console.error(`Failed to read all schedules: ${error.message}`);
  }
}

export const readAllProgram = async (getID: string): Promise<scheduleModel | any> => {
  try {
    const schedule: scheduleModel = { _id: getID };
    const response: scheduleModel = await readAllPrograms(schedule);

    const _id = response._id;
    const program = response.program;
    const year = response.year; //response.schedule.year
    const semester = response.semester;
    const block = response.block;
    const sched = response.sched;

    return { _id, program, year, semester, block, sched };

  } catch (error: any) {
    console.error(`Failed to read schedule: ${error.message}`);
  }
};

export const readSingleProgram = async (getID: string, getProgramID: string ): Promise<scheduleModel | any> => {
  try {
    const scheduleid: scheduleModel = { _id: getID };
    const programid: scheduleModel = { _id: getProgramID };
    const response: scheduleModel = await readProgram(scheduleid, programid);

    const _id = response._id;
    const program = response.program;
    const year = response.year; //response.schedule.year
    const semester = response.semester;
    const block = response.block;
    const sched = response.sched;

    return { _id, program, year, semester, block, sched };

  } catch (error: any) {
    console.error(`Failed to read schedule: ${error.message}`);
  }
};

export const readAllSchedule = async (getID: string, getProgramID: string ): Promise<scheduleItemModel | any> => {
  try {
    const scheduleid: scheduleItemModel = { _id: getID };
    const programid: scheduleItemModel = { _id: getProgramID };
    const response: scheduleItemModel = await readAllSched(scheduleid, programid);

    const _id = response._id;
    const courseCode = response.courseCode;
    const courseDescription = response.courseDescription; //response.schedule.year
    const courseUnit = response.courseUnit;
    const day = response.day;
    const time = response.time;
    const room = response.room;
    const instructor = response.instructor;

    return { _id, courseCode, courseDescription, courseUnit, day, time, room, instructor };

  } catch (error: any) {
    console.error(`Failed to read schedule: ${error.message}`);
  }
};

export const readSchedule = async (getID: string, getProgramID: string, getSchedID: string ): Promise<scheduleItemModel | any> => {
  try {
    const scheduleid: scheduleItemModel = { _id: getID };
    const programid: scheduleItemModel = { _id: getProgramID };
    const schedId: scheduleItemModel = { _id: getSchedID };
    const response: scheduleItemModel = await readSched(scheduleid, programid, schedId);

    const _id = response._id;
    const courseCode = response.courseCode;
    const courseDescription = response.courseDescription; //response.schedule.year
    const courseUnit = response.courseUnit;
    const day = response.day;
    const time = response.time;
    const room = response.room;
    const instructor = response.instructor;

    return { _id, courseCode, courseDescription, courseUnit, day, time, room, instructor };

  } catch (error: any) {
    console.error(`Failed to read schedule: ${error.message}`);
  }
};