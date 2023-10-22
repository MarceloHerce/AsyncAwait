function half(number){
    return new Promise((resolve,reject) => {
        if(number%2 === 0){
            resolve(number/2);
        } else{
            reject("Error: El numero no tiene mitad entera")
        }
    });    
}
half(4).then(console.log).catch();
half(3).then(console.log).catch(er => console.log(er));

const promiseSucces = Promise.resolve(6);
const promiseReject = Promise.reject(1);
promiseSucces.then(console.log);
promiseReject.catch(() => console.log('esto es un error'))

//const fecthPromise = fetch('http://localhost/image');

// fecthPromise.then(response => {
//     console.log(response);
// })

async function hello() {
    return "hello";
}
hello().then(console.log);
let hello2 = async function () {return "hello2"};
let hello3 = async () => "Hola";

hello2().then(console.log);
hello3().then(console.log);

async function run () {
    let value = await hello();
    console.log(value);
    console.log("after");
}
run();
console.log("before");

async function run2() {
    const response = await fetch('http://127.0.0.1:5500')
    console.log(response);
}
run2();
/*
fetch(urlToImage)
    .then(response => response.blob())
    .then(blob => {
        let img = new Image();
        img.src = URL.createObjectURL(blob);
        return img;
    })
    .then(img => {
        document.body.appendChild(img);
    })
    .catch(ex => console.error(ex));

const creatiImageFromBlob = blob => {
    let img = new Image();
        img.src = URL.createObjectURL(blob);
        return img;
};

async function imageFetch() {
    const response = await fetch(urlToImage);
    const blob = await response.blob();
    const img = creatiImageFromBlob(blob);
    document.body.appendChild(img);
};

//Gestion de errores

async function imageFetchTryCatch() {
    try{
        const response = await fetch(urlToImage);
        const blob = await response.blob();
        const img = creatiImageFromBlob(blob);
        document.body.appendChild(img);
    } catch (ex) {
        console.error(ex);
    }
};

imageFetch().catch(ex => console.error(ex));
*/
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

const run4 = async () => {
    let promiseAll = Promise.all([p1,p2,p3]);
    promiseAll.then(console.log);
};
run4();

const run5 = async () => {
    let values = await Promise.all([p1,p2,p3]);
    console.log(values);
};
run5();

const delayValue = (delay, value) => new Promise((resolve) => {
    setTimeout(() => resolve(value), delay);
})
const p4 = delayValue(1000,1);
const p5 = delayValue(2000,2);
const p6 = delayValue(3000,3);

const run6 = async () => {
    let values = await Promise.all([p4,p5,p6]);
    console.log(values);
};
run6();