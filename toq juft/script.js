function murakkabSon(n) {
    for (let i = 2; i < n; i++) {
        if (!inkor(i)){
        console.log(`${i} toq son`);}
        else{
            console.log(`${i} juft son`)
        }
    }
}


function inkor(n) {
    for (let i = 2; i < n; i++){
        if(n%2==0) return false;
    }
    return true;
}
murakkabSon(100)