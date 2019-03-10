function dateFormatter(date){
    if(typeof date === 'string'){
        date = date.trim().toLocaleLowerCase();
        if(! date.match("^[0-9]{1,2} [A-Za-z]+ [\\d]{4}$")){
            console.log("The date entered was in the wrong format. Please try again");
        }
        else{
            var dateArr = date.split(" ");
            
            var day = parseInt(dateArr[0], 10);
            
            if(day < 1 || day > 31){
                console.log("Invalid day of the month")
            }
            else{
                    if(dateArr[0].length === 1){
                        dateArr[0] = '0' + dateArr[0];
                    }
                    var month = '';
                    switch(dateArr[1]){
                        case 'january':
                        month = '01';
                        break;
                        case 'february':
                        month = '02';
                        break;
                        case 'march':
                        month = '03';
                        break;
                        case 'april':
                        month = '04';
                        break;
                        case 'may':
                        month = '05';
                        break;
                        case 'june':
                        month = '06';
                        break;
                        case 'july':
                        month = '07';
                        break;
                        case 'august':
                        month = '08';
                        break;
                        case 'september':
                        month = '09';
                        break;
                        case 'october':
                        month = '10';
                        break;
                        case 'november':
                        month = '11';
                        break;
                        case 'december':
                        month = '12';
                    }

                    if(month === ""){
                        console.log("Wrong month name entered. Please try again");
                    }
                    else{
                        return dateArr[2] + '-' + month + '-' +dateArr[0];
                    }
                }  
            }
                  
    }
    else{
        console.log("The date inserted is not a string")
    }   
}

console.log(dateFormatter("10 jeune 1970"));