function asyncFunction() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const isSuccess = false

            if (isSuccess) {
                resolve('Operação concluída com sucesso!');
                return
            }

            reject('Algo deu errado...')
        }, 3000)
    })
}

let promise = asyncFunction()

promise.then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
}).finally(() => {
    console.log('Execução da promise concluída!')
})