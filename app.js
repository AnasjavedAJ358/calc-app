function setValue(num){
    var input= document.getElementById("inn")
    input.value += num;
}
function Empty(){
 var input= document.getElementById("inn")
 input.value="";
}

function answer(){
    var input= document.getElementById("inn")
input.value= eval(input.value)
}