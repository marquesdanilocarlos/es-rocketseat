import {openingHours} from "../../contants.js"
import dayjs from 'dayjs'

export function hoursLoad(date) {
    return openingHours.map(hour => {
        const [scheduleHour] = hour.split(':')
        const isHourAvailable = dayjs(date).add(scheduleHour, 'hour').isAfter(dayjs())

        return {
            hour,
            available: isHourAvailable
        }
    })
}