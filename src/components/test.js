import emojipedia from "../emojipedia";

var subArray=emojipedia.map(function(emoji){
    return emoji.meaning.substring(0,100);
});

console.log(subArray);