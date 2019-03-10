function addZero(str){
    if(str.length === 1){
        str = '0' + str;
    }
    return str;
}

function convertTimestamp(timestamp){
    var date = new Date(timestamp * 1000);

    var year = date.getFullYear().toString();
    var month = (date.getMonth() + 1).toString();
    month = addZero(month);
    var day = date.getDate().toString();
    day = addZero(day);
    var hour = date.getHours().toString();
    hour = addZero(hour);
    var minute = date.getMinutes().toString();
    minute = addZero(minute);
    var seconds = date.getSeconds().toString();
    seconds = addZero(seconds);
    
    return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + seconds;
}

console.log(convertTimestamp(1552182434));