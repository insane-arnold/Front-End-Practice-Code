
function increment(){
    let count_ele = document.getElementById("count_display");
    let count = count_ele.innerHTML;
    count_ele.innerHTML =  parseInt(count) + 1;
}


function decrement(){
    let count_ele = document.getElementById("count_display");
    let count = count_ele.innerHTML;
    if(count > 0){
        count_ele.innerHTML =  parseInt(count) - 1;
    }
}

function reset(){
    let count_ele = document.getElementById("count_display");
    count_ele.innerHTML =  0;
}