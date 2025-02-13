import dayjs from 'dayjs'

const form = document.querySelector("form")
const selectedDate = document.querySelector("#date")
const clientName = document.querySelector("#client")

const today = dayjs(new Date()).format('YYYY-MM-DD')
selectedDate.value = today
selectedDate.min = today

form.onsubmit = (e) => {
    e.preventDefault();

    try {
        const name = clientName.value.trim()

        if (!name) {
            return alert('Informe o nome do cliente')
        }

        const hourSelected = document.querySelector(".hour-selected")

        if (!hourSelected) {
            return alert('Informe o horário')
        }

        const [hour] = hourSelected.innerText.split(":")
        const when = dayjs(selectedDate.value).add(hour, 'hour')
        const id = new Date().getTime()

        const schedule = {
            id,
            name,
            when
        }
    } catch (error) {
        alert('Não foi possível realizar o agendamento.')
        console.log(error)
    }
}