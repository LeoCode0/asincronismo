const somethingwillHappens = () => {
    return new Promise((resolve, reject) => {
        if (true){
            resolve('Hey!')
        } else{
            reject('Whooops!')
        }
    })
}

somethingwillHappens()
    .then(response => console.log(response))
    .catch(err => console.error(err))

const somethingwillHappens2 = () => {
    return new Promise((resolve, reject) => {
        if(true){
            setTimeout(() => {
                resolve('True')
            }, 2000)
        } else{
            const error = new Error ('Whooops!')
            reject(error)
        }
    })
}

somethingwillHappens2()
    .then(response => console.log(response))
    .catch(err => console.error(err))

Promise.all([somethingwillHappens(), somethingwillHappens2()])
    .then(response => {
        console.log('Array of results', response)
    })
    .catch(err => {
        console.error(err)
    })
