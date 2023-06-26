import emojipedia from "./emojipedia";

var newArray= emojipedia.map(function(emoji){
    return emoji.meaning.substring(0,100);
});

console.log(newArray);