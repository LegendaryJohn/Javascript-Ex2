/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Ex 2.1
var div1 = document.getElementById("blue");
var div2 = document.getElementById("red");
var div3 = document.getElementById("green");
var divArr = [div1, div2, div3];

for(var i = 0; i < divArr.length; i++){
    divArr[i].style.backgroundColor = "blue";
}

//Ex 2.2
var stud1 = {firstName: "John", lastName: "Arne", email: "gg123@live.dk"};
var stud2 = {firstName: "Bob", lastName: "Miley", email: "bob123@live.dk"};
var stud3 = {firstName: "Arne", lastName: "Hansen", email: "arne123@live.dk"};


var arrStud = [stud1, stud2, stud3];


document.write("<table border>");
for (var i = 0; i < arrStud.length; i++) {
    document.write("<tr><td>First name</td>");
    document.write("<td>" + arrStud[i].firstName + "</td></tr>");
    document.write("<tr><td>Last name</td>");
    document.write("<td>" + arrStud[i].lastName + "</td></tr>");
    document.write("<tr><td>Email</td>");
    document.write("<td>" + arrStud[i].email + "</td></tr>");


}
document.write("</table>");


//Ex 2.3 
var div1 = document.getElementById("blue");
div1.onclick = function(){console.log("You clicked blue");};
var div2 = document.getElementById("red");
div2.onclick = function(){console.log("You clicked red");};
var div3 = document.getElementById("green");
div3.onclick = function(){console.log("You clicked green");};

//Ex 2.4
var b1 = document.getElementById("b1");
b1.onmouseover = function(){b1.innerHTML = "Is this blue?";};
b1.onmouseout = function(){b1.innerHTML = "Hover over me";};
var b2 = document.getElementById("b2");
b2.onmouseover = function(){b2.innerHTML = "Hello red";};
b2.onmouseout = function(){b2.innerHTML = "Hover over me";};
var b3 = document.getElementById("b3");
b3.onmouseover = function(){b3.innerHTML = "This is green";};
b3.onmouseout = function(){b3.innerHTML = "Hover over me";};

//Ex 2.5
var form = document.getElementById("try");
form.onsubmit = function(e){
    e.preventDefault();
    var input = document.getElementById("input");
    var cbox = document.getElementById("cbox");
    var radio1 = document.getElementById("radio1");
    var radio2 = document.getElementById("radio2");
    alert("Submit succesful!");
    console.log(input.value);
    console.log(cbox.checked);
    console.log(radio1.checked);
    console.log(radio2.checked);
 
    
    var content="";
    var body1 = document.getElementsByTagName("body")[0];
    
    content+="<p></p>";
    content+="<table border>";
    content+="<tr><td>First name: </td><td>" + input.value + "</td></tr>";
    content+="<tr><td>Above 18: </td>";
    content+="<td>" + cbox.checked + "</td></tr>";
    content+="<tr><td>Male: </td>";
    content+="<td>" + radio1.checked + "</td></tr>";
    content+="<tr><td>Female: </td>";
    content+="<td>" + radio2.checked + "</td></tr>";
    content+="</table>";
    body1.innerHTML += content;
    
    

};

// Ex 2.6

var li = document.getElementsByTagName("li");


for (var i = 0; i < li.length; i++) {
    !function (i) {
        li[i].addEventListener("click", function () {
            console.log("Greetings " + li[i].innerHTML + "!");
        });
        li[i].addEventListener("mouseover", function () {
            li[i].style.fontSize = "xx-large";
        });
        li[i].addEventListener("mouseout", function () {
            li[i].style.fontSize = "medium";
        });
    }(i);
}



