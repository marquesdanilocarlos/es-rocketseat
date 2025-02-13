import {openingHours} from "../../contants.js"
import dayjs from 'dayjs'

const hoursList = document.querySelector("#hours")

export function hoursLoad(date) {
    const opening = openingHours.map(hour => {
        const [scheduleHour] = hour.split(':')
        const isHourAvailable = dayjs(date).add(scheduleHour, 'hour').isAfter(dayjs())

        return {
            hour,
            available: isHourAvailable
        }
    })

    opening.forEach(({hour, available}) => {
        const li = document.createElement('li')
        li.classList.add('hour')
        li.classList.add(available ? 'hour-available' : 'hour-unavailable')
        li.textContent = hour
        hoursList.append(li)
    })
}