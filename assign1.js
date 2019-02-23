const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");


function clockRun() {
    var date = new Date();

    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    
    
    let hrposition = (hr*360/12)+(min*(360/60)/12);
    let minposition = (min*360/60)+(sec*(360/60)/60);
    let secposition = sec*360/60;
    
    
    HOURHAND.style.transform = "rotate(" + hrposition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minposition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secposition + "deg)";

    var d = date.getDay();
    var dayar=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    d = dayar[d];
    var numDate = date.getDate();
    var month = date.getMonth();
    var montharr = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    month = montharr[month];
    var year = date.getFullYear();


    document.getElementById("dateshow").innerHTML = d+": "+month+" "+ numDate +", "+year;
}

var repeat = setInterval(clockRun, 1000);






