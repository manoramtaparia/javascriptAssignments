function currentTime() {
    var DateObj = new Date();
    var hour = DateObj.getHours();
    var min = DateObj.getMinutes();
    var sec = DateObj.getSeconds();
    var meridiem = 'AM';
    if(hour > 12) {
        meridiem = 'PM';
        hour = hour - 12;
    }
    var currTime = "Current time is " + hour + " : " + min + " : " + sec + " " + meridiem;
    document.querySelector('#displayTime').innerHTML = currTime;
    setTimeout(currentTime, 1000);
}

currentTime();