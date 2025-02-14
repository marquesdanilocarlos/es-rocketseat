import {apiConfig} from './api-config.js'

export async function newSchedule({id, name, when}) {
    try {
        await fetch(`${apiConfig.baseUrl}/schedules`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({id, name, when})
        })

        alert('Agendamento realizado com sucesso!')
    } catch (err) {
        alert('Não foi possível agendar. Tente novamente mais tarde.')
    }
}