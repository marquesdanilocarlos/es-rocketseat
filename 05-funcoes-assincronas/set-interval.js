
let value = 10;
const interval = setInterval(() => {
    console.log(value--)

    if (value === 0) {
        clearInterval(interval)
    }
}, 1000)