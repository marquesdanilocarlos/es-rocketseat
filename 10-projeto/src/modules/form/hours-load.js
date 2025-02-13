import {openingHours} from "../../contants.js"
import dayjs from 'dayjs'
import {hoursClick} from './hours-click.js'

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

        if (hour === "09:00") {
            hourHeaderAdd('Manhã');
        }

        if (hour === "14:00") {
            hourHeaderAdd('Tarde');
        }

        if (hour === "18:00") {
            hourHeaderAdd('Noite');
        }

        hoursList.append(li)
    })

    hoursClick()
}

function hourHeaderAdd(title) {
    const header = document.createElement('li')
    header.classList.add('hour-period')
    header.textContent = title

    hoursList.append(header)
}