function diviFunc(e){
    if(e%3==0){
        console.log(`${e} 3ga bolinadi`)
    }
    if(e%5==0){
        console.log(`${e} 5ga bolinadi`)
    }
}

for(i=1;i<=100;i++){
    diviFunc(i)
}