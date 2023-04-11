var out_scr = document.getElementById("output-screen");
function display(num){
    out_scr.value += num;
}
function calculate(){
    try{
        out_scr.value = eval(out_scr.value);
    }
    catch(error){
        alert("invalid")
    }
}
function cl(){
    out_scr.value = "";
}
function del(){
    out_scr.value = out_scr.value.slice(0,-1);
}