function murakkabSon(n) {
    for (let i = 2; i < n; i++) {
        if (!inkor(i)){
        console.log(`${i} tub son`);}
        else{
            console.log(`${i} murakkab son`)
        }
    }
}


function inkor(n) {
    for (let i = 2; i < n; i++){
        if(n%2==0) return true;
    }
    return false;
}
murakkabSon(100)