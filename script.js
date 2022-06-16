let hour = document.querySelector('.hour');
let minute = document.querySelector('.minute');
let second = document.querySelector('.second');

let AmPm = document.querySelector('#AmPm');

let hh = document.querySelector('#hh');
let mm = document.querySelector('#mm');
let ss = document.querySelector('#ss');



setInterval(function(){
    let date = new Date();

    let h = Number(date.getHours());
    let m = Number(date.getMinutes());
    let s = Number(date.getSeconds());

    if( h>=12 ){
        h = h-12;
        AmPm.innerHTML = 'PM';
    }
    else{
        h = h;
        AmPm.innerHTML = 'AM'
    }

    hh.style.strokeDashoffset = 472 + ( (472 / 12) * h );
    mm.style.strokeDashoffset = 472 + ( (472 / 60) * m );
    ss.style.strokeDashoffset = 472 + ( (472 / 60) * s );

    h = ( h < 10) ? '0'+h : h;
    m = ( m < 10) ? '0'+m : m;
    s = ( s < 10) ? '0'+s : s;

    hour.innerHTML = h;
    minute.innerHTML = m;
    second.innerHTML = s;

},1000);