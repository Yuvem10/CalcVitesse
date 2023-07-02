function calcTime(){
    let distance = document.getElementById("distance").value;
    let time = document.getElementById("time").value;
    let distInt = parseInt(distance);
    let timeInt = parseInt(time);

    distInt = (distInt*1000);
    timeInt = (timeInt*60);

    var vitesse = (distInt/timeInt * 3.6);
    let res = Math.round(vitesse * 100) / 100;
    let phrase = $('#phrase').html('La vitesse à laquelle tu cours est à '+res+' Km/h');
}

function clearAllCases(){
    let element = $('#phrase').text("");
    time.value = "";
    distance.value = "";
    };

    
