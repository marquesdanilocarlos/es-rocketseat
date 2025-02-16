import dayjs from 'dayjs'

const morningPeriod = document.querySelector('#period-morning')
const afternoonPeriod = document.querySelector('#period-afternoon')
const nightPeriod = document.querySelector('#period-night')

export function showSchedules(dailySchedules) {

    try {
        morningPeriod.innerHTML = ''
        afternoonPeriod.innerHTML = ''
        nightPeriod.innerHTML = ''

        dailySchedules.forEach(schedule => {
            const item = document.createElement('li')
            const time = document.createElement('strong')
            const name = document.createElement('span')

            item.setAttribute('data-id', schedule.id)
            time.textContent = dayjs(schedule.when).format('HH:mm')
            name.textContent = schedule.name

            const cancelIcon = document.createElement('img')
            cancelIcon.classList.add('cancel-icon')
            cancelIcon.setAttribute('src', `./src/assets/cancel.svg`)
            cancelIcon.setAttribute('alt', `Cancelar`)

            item.append(time, name, cancelIcon)

            const hour = dayjs(schedule.when).hour()

            if (hour <= 12) {
                morningPeriod.append(item)
            } else if (hour > 12 && hour <= 18) {
                afternoonPeriod.append(item)
            } else {
                nightPeriod.append(item)
            }
        })
    } catch (error) {
        console.log(error)
    }
}