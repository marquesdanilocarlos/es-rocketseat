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

async function fetch() {
    try {
        const response = await asyncFunction()
        console.log(response)
    } catch (error) {
        alert(`Erro: ${error}`)
    } finally {
        console.log('Execução da Promise finalizada!')
    }
}

fetch()