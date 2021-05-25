var getStartBtn = document.getElementById('startBtn');
var getResetBtn = document.getElementById('resetBtn');
var getSecField = document.getElementById('inpSec');
var getMinField = document.getElementById('inpMin');
var getHourField = document.getElementById('inpHour');
var getColon1 = document.getElementById('colon1');
var getColon2 = document.getElementById('colon2');
hideColons();
var interval;
function setTime() {
    hideInpFields();
    var getInpSec = document.getElementById('inpSec').value;
    var getInpMin = document.getElementById('inpMin').value;
    var getInpHour = document.getElementById('inpHour').value;
    var sec = document.getElementById('secs');
    var min = document.getElementById('mins');
    var hour = document.getElementById('hours');
    sec.innerHTML = getInpSec;
    min.innerHTML = getInpMin;
    hour.innerHTML = getInpHour;
    showColons()
    var s = sec.innerHTML;
    var m = min.innerHTML;
    var h = hour.innerHTML;
    getHourField.classList.remove ='hide-input';
    getMinField.classList.remove ='hide-input';
    getSecField.classList.remove ='hide-input';
    function countdown() {
        if (s > 0) {
            disBtn();
            s--
            sec.innerHTML = s;
        }
        else if (m > 0) {
            disBtn()
            m--
            min.innerHTML = m;
            s = 59;
            sec.innerHTML = s;
        }
        else if (h > 0) {
            disBtn()
            h--
            hour.innerHTML = h;
            m = 59;
            min.innerHTML = m;
        }
        else if (h == 0 && m == 0 && s == 0) {
            showInpFields()
            enableBtn();
            clearInterval(countdown);

        }
    }
    interval = setInterval(countdown, 1000);
}

function reset() {
    showInpFields()
    enableBtn();
    clearInterval(interval);
    var sec = document.getElementById('secs');
    var min = document.getElementById('mins');
    var hour = document.getElementById('hours');
    sec.innerHTML = '00';
    min.innerHTML = '00';
    hour.innerHTML = '00';
}


function disBtn() {
    getStartBtn.disabled = true;
    getSecField.disabled = true;
    getMinField.disabled = true;
    getHourField.disabled = true;
}
function enableBtn() {
    getHourField.disabled = false;
    getSecField.disabled = false;
    getMinField.disabled = false;
    getStartBtn.disabled = false;
}
function hideInpFields() {
    getMinField.className = 'hide-input';
    getSecField.className = 'hide-input';
    getHourField.className = 'hide-input';
}
function showInpFields() {
    getMinField.className = 'show-text';
    getSecField.className = 'show-text';
    getHourField.className = 'show-text';
}
function hideColons() {
    getColon1.className = 'hide-input';
    getColon2.className = 'hide-input';
}
function showColons() {
    getColon1.className = 'show-text';
    getColon2.className = 'show-text';
}

//Created by shahzad ali