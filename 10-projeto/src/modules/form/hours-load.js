import {openingHours} from "../../contants.js"
import dayjs from 'dayjs'
import {hoursClick} from './hours-click.js'

const hoursList = document.querySelector("#hours")

export function hoursLoad({date, dailySchedules}) {

    hoursList.innerHTML = '';

    const unavailableHours = dailySchedules.map(schedule => dayjs(schedule.when).format('HH:mm'))

    const opening = openingHours.map(hour => {
        const [scheduleHour] = hour.split(':')
        const isHourAvailable = dayjs(date).add(scheduleHour, 'hour').isAfter(dayjs())
        const available = !unavailableHours.includes(hour) && isHourAvailable

        return {
            hour,
            available
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