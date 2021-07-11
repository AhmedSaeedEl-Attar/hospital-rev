// form 1 
var drop =document.getElementById("drop-file") ;
var dropIcon = document.getElementById("drop");

dropIcon.onclick = function (){
    drop.classList.toggle("show-file")
}
// form 2 
var drop2 =document.getElementById("drop-file2") ;
var dropIcon2 = document.getElementById("form2");

dropIcon2.onclick = function (){
    drop2.classList.toggle("show-file")
}
// form 3 
var drop3 =document.getElementById("drop-file3") ;
var dropIcon3 = document.getElementById("form3");

dropIcon3.onclick = function (){
    drop3.classList.toggle("show-file")
}
// form 4 
var drop4 =document.getElementById("drop-file4") ;
var dropIcon4 = document.getElementById("form4");

dropIcon4.onclick = function (){
    drop4.classList.toggle("show-file")
}
// form 5 
var drop5 =document.getElementById("drop-file5") ;
var dropIcon5 = document.getElementById("form5");

dropIcon5.onclick = function (){
    drop5.classList.toggle("show-file")
}
// form 6 
var drop6 =document.getElementById("drop-file6") ;
var dropIcon6 = document.getElementById("form6");

dropIcon6.onclick = function (){
    drop6.classList.toggle("show-file")
}
// form 7 
var drop7 =document.getElementById("drop-file7") ;
var dropIcon7 = document.getElementById("form7");

dropIcon7.onclick = function (){
    drop7.classList.toggle("show-file")
}

////////////////////////////////////////
// to show form
var form =document.getElementById("form") ;
var tree = document.getElementById("open-tree");
var ext = document.getElementById("exit");
var label =document.getElementById("label");

tree.onclick = function (){
    form.classList.toggle("show-form")
    label.classList.toggle("show-form")
}
ext.onclick = function (){
    form.classList.remove("show-form");
    label.classList.remove("show-form");
    console.log("ok");
}

