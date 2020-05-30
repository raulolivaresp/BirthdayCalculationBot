module.exports = {

    //search for  a word in the message
    findWord: function(word, text) {
        return RegExp('\\b'+ word +'\\b').test(text)
    },

    loopAllWords: function(text, listWords) {
        for (word of listWords){
            if (findWord(word, text) === true){
                return true;
            }
        }
        return false;
    }

}