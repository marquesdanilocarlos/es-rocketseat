import {hoursLoad} from '../form/hours-load.js'
import {fetchSchedulesByDay} from '../../services/fetch-schedules.js'

const selectedDate = document.querySelector('#date')
export async function schedulesDay() {
    const date = selectedDate.value

    const dailySchedule = await fetchSchedulesByDay({date})
    console.log(dailySchedule)

    hoursLoad(date);
}