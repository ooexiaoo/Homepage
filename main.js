let time = document.getElementById("time");
setInterval(() =>{
    let b = new Date();
    time.innerHTML = b.toLocaleTimeString();
},1000)

var myDate = new Date();
var hrs = myDate.getHours();

var greet;

if (hrs < 4)
    greet = ' <img src="/sleep-menhera-chan.png"/><h2>Good Night EXIA</h2>';
else if (hrs >= 4 && hrs < 12)
    greet = ' <img src="/8841-menhera-morning2.png"/><h2>Good Morning EXIA</h2>';
else if (hrs >= 12 && hrs <= 16)
    greet = ' <img src="/5271-menhera-chillout.png"/><h2>Good Afternoon EXIA</h2>';
else if (hrs >= 17 && hrs <= 24)
    greet = '<img src="/1370-menhera-tired.png"/><h2>Good Evening EXIA</h2>';

document.getElementById('hello').innerHTML =
    '<b>' + greet + '</b>';
