import {apiConfig} from './api-config.js'
import dayjs from 'dayjs'
export async function fetchSchedulesByDay({date}) {
    try {
        const response = await fetch(`${apiConfig.baseUrl}/schedules`, {})
        const data = await response.json()
        const dailySchedules = data.filter((schedule) => dayjs(date).isSame(schedule.when, 'day'))
        return dailySchedules
    } catch (err) {
        console.log(err)
        alert('Não foi possível recuperar o agendamento para o dia selecionado.')
    }
}