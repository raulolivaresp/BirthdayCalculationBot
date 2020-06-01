module.exports = {

    calculateDifference : function(nextBirthday, currentDate, differentZoneMilliseconds) {
        
        let birthday = new Date(nextBirthday);

        let missing = ((birthday.getTime()+parseInt(differentZoneMilliseconds)) - currentDate)/86400000;

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
