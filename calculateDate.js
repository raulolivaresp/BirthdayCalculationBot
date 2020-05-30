module.exports = {

    calculateDifference : function(nextBirthday, currentDate) {
        
        let birthday = new Date(nextBirthday);

        let missing = (birthday.getTime() - currentDate)/86400000;

        return Math.ceil(missing);

    },

    calculateNextBirhday : function(birthday) {

        let currentYear = new Date().getFullYear();
        let currentDate = new Date().getTime();

        let tentativeDay = birthday+'/'+currentYear;
        let maybeBirthday = new Date(tentativeDay).getTime();

        if (maybeBirthday - currentDate > -86400000 ){
            return maybeBirthday;
        } else {
            return new Date(birthday+'/'+(currentYear+1))
        }
        

    }

}
/*
let currentDate = 1590810141440;


let date = new Date().getTime();


var birthday = new Date("06/02/2020 12:00:00");


let missing = (birthday.getTime() - date)/86400000;

let days = Math.floor(missing);
 
console.log(days);
*/