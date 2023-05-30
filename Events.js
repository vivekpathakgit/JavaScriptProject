b2.addEventListener('click', function(){
    document.getElementById("b1").style.order = Math.abs(Math.floor(10*Math.random())-5);
    document.getElementById("b2").style.order = Math.abs(Math.floor(10*Math.random())-5);
    document.getElementById("b3").style.order = Math.abs(Math.floor(10*Math.random())-5);
    document.getElementById("b4").style.order = Math.abs(Math.floor(10*Math.random())-5);
    //Testing change in css attribute- oder (ranging 0-5) of box id-b1 : 
    // console.log(document.querySelector('#b1').style.order);
    // console.log(10*Math.random());
});
b3.addEventListener('click', function(){
    document.getElementById("b1").style.order = 1;
    document.getElementById("b2").style.order = 2;
    document.getElementById("b3").style.order = 3;
    document.getElementById("b4").style.order = 4;
});
b1.addEventListener('mouseover', function(){
    console.log('Hii');
    var obj = document.getElementById("b1");
    obj.style.width = "150px";
    obj.style.height = "150px";
    document.getElementById("b2").style.width = "150px";
    document.getElementById("b2").style.height = "150px";
    document.getElementById("b3").style.width = "150px";
    document.getElementById("b3").style.height = "150px";
    document.getElementById("b4").style.width = "150px";
    document.getElementById("b4").style.height = "150px";

});

b1.addEventListener('mouseout', function(){
    var obj = document.getElementById("b1");
    obj.style.width = "100px";
    obj.style.height = "100px";
    document.getElementById("b2").style.width = "100px";
    document.getElementById("b2").style.height = "100px";
    document.getElementById("b3").style.width = "100px";
    document.getElementById("b3").style.height = "100px";
    document.getElementById("b4").style.width = "100px";
    document.getElementById("b4").style.height = "100px";
});

let time, date, timeOffset = document.getElementById('select_box').value;
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
    let dropdownList = document.getElementById('select_box');
    document.getElementById('getTimee').addEventListener('click', function(){
        timeOffset = dropdownList.value;
    });
    let a = new Date();
    var localTime = a.getTime();
    var utcTime = localTime + (a.getTimezoneOffset() * 60000);
    
    a = new Date(utcTime + (3600000 * timeOffset));
    time = a.getHours()+':'+a.getMinutes()+':'+a.getSeconds();
    date = a.toLocaleDateString(undefined, options);
    document.getElementById("time").innerHTML = time + " <br>on " + date;


}, 1000);
