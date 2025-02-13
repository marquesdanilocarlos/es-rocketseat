import dayjs from 'dayjs'

const form = document.querySelector("form")
const selectedDate = document.querySelector("#date")

const today = dayjs(new Date()).format('YYYY-MM-DD')
console.log(today)
selectedDate.value = today
selectedDate.min = today

form.onsubmit = (e) => {
    e.preventDefault();

}