let countEl = document.getElementById("count-el")
console.log(countEl)

let count = 0;
function increase(){
    count = count + 1;
    countEl.innerText = count
}
console.log(count)