function whatMultipleIsTheNumer (num) {
    const promise = new Promise((res, rej) => {
        if(num % 3 === 0 && num % 5 === 0){
            res('FizzBuzz');
        }
        if (num % 5 === 0 && num % 3 !== 0){
            res('Buzz');
        }
        if (num % 3 === 0 && num % 5 !== 0){
            res('Fizz');
        }
     rej(new Error('Número inválido'));
    })

    return promise;
}

whatMultipleIsTheNumer(150).then(e => console.log(e));