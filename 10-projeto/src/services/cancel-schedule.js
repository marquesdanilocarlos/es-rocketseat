import {apiConfig} from './api-config.js'

export async function cancelSchedule({id}) {
    try {
        await fetch(`${apiConfig.baseUrl}/schedules/${id}`, {
            method: 'DELETE',
        })

        alert('Agendamento cancelado com sucesso!')
    } catch (err) {
        console.log(err)
        alert('Não foi possível cancelar o agendamento.')
    }
}