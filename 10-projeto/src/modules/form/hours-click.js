export function hoursClick() {
    const availableHours = document.querySelectorAll('.hour-available')

    availableHours.forEach(available => {
        available.addEventListener('click', (e) => {
            availableHours.forEach(hour => {
                hour.classList.remove('hour-selected')
            })
            e.target.classList.add('hour-selected')
        })
    })
}