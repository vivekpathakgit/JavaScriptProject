b2.addEventListener('click', function(){
    document.getElementById("b1").style.order = Math.abs(Math.floor(10*Math.random())-5);
    console.log(document.querySelector('#b1').style.order);
    console.log(10*Math.random());
    document.getElementById("b2").style.order = Math.abs(Math.floor(10*Math.random())-5);
    document.getElementById("b3").style.order = Math.abs(Math.floor(10*Math.random())-5);
    document.getElementById("b4").style.order = Math.abs(Math.floor(10*Math.random())-5);
});
b3.addEventListener('click', function(){
    document.getElementById("b1").style.order = 1;
    document.getElementById("b2").style.order = 2;
    document.getElementById("b3").style.order = 3;
    document.getElementById("b4").style.order = 4;
});
b1.addEventListener('onmouseenter', function(){
    var obj = document.getElementById("b1");
    obj.setAttribute("style", "animation-name : 'increaseSize';");
    document.getElementById("b2").style.animation = "increaseSize 5s 1";
    document.getElementById("b3").style.animation = "increaseSize 5s 1";
    document.getElementById("b4").style.animation = "increaseSize 5s 1";
});