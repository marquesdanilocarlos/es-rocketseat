import {hoursLoad} from '../form/hours-load.js'
import {fetchSchedulesByDay} from '../../services/fetch-schedules.js'
import {showSchedules} from './show'

const selectedDate = document.querySelector('#date')

export async function schedulesDay() {
    const date = selectedDate.value

    const dailySchedules = await fetchSchedulesByDay({date})

    showSchedules(dailySchedules)

    hoursLoad({date, dailySchedules})
}