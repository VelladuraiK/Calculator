function displayvalue(val){
    document.getElementById("display-box").value= document.getElementById("display-box").value+val;

}
function cleardisplay(){
    document.getElementById("display-box").value="";
}
function answer(){
    var userInput=document.getElementById("display-box").value;
    var result=eval(userInput);

    document.getElementById ("display-box").value = result;
}  


