
// create close element with icon

var nodeList = document.getElementsByTagName("LI");
var i;

for(i=0;i<nodeList.length;i++){

var Span   = document.createElement("SPAN");

var Txt = document.createTextNode("\u00D7");

Span.className = "close";

Span.appendChild(Txt);

nodeList[i].appendChild(Span);

}

// working close

var close = document.getElementsByClassName("close");
var i ;

for(i=0; i<close.length;i++){
    close[i].onclick = function(){
        var div = this.parentElement;

        div.style.display = "none";
    }
}

function newElement(){
    var li = document.createElement("LI");
    var inputValue = document.getElementById("myinput").value;

    var t = document.createTextNode(inputValue);
    li.appendChild(t);
     
    
    if(inputValue === ""){
         alert('you must write something');
     }    else{
         document.getElementById("myUl").appendChild(li);
         li.className = "list-group-item";
     }
     document.getElementById("myinput").value = "";

     var Span   = document.createElement("SPAN");

var Txt = document.createTextNode("\u00D7");

Span.className = "close";

Span.appendChild(Txt);
li.appendChild(Span);

for(i=0; i<close.length;i++){
    close[i].onclick = function(){
        var div = this.parentElement;

        div.style.display = "none";
    }
}
}

