function reverseString(str) {
    var english = /^[A-Za-z0-9]*$/;
    var words = str.split(" ");
    let newText = "";
    for (let i = words.length - 1; i >= 0; i--){
        var word = words[i];
        if(english.test(word) || !isNaN(parseFloat(word))){
            var joinString = word;
        }
        else{
            var word = words[i].split("");
            reversedWord = word.reverse();
            var joinString = reversedWord.join('');
        }
        if(i == words.length - 1){
			newText += joinString;
		}
        else{
			newText += " " + joinString;
		}

    } 

    return newText;
}


function initReverse() {
    var str = $('textarea').val();
    var splitText = str.split("\n");
    var finalText = splitText.map(x=>x=reverseString(x));
    $("textarea").val(finalText.join("\n"));
} 