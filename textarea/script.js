function func() {
    let a = document.getElementsByClassName("text")[0].value;
    const array = a.split(' ');

    let result = document.getElementById("result")
    result.innerHTML = array.length
}