import {cancelSchedule} from '../../services/cancel-schedule.js'
import {schedulesDay} from './load.js'

const schedules = document.querySelectorAll('.period')

schedules.forEach(schedule => {
    schedule.addEventListener('click', async (e) => {
        if (!e.target.classList.contains('cancel-icon')) {
            return
        }

        const item = e.target.closest('li')
        const {id} = item.dataset

        if (id) {
            const isConfirm = confirm('Tem certeza que deseja cancelar o agendamento?')

            if (isConfirm) {
                await cancelSchedule({id})
                await schedulesDay()
            }
        }
    })
})