//why isn't this a built in Math function?
function randint(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//the function that creates gibberish
function chop(text, phraseSize, phraseCount) {
    let gibberish = "";
    let words = [];
    let lines = text.split("\n");

    //split everything into individual words
    for(let i = 0; i < lines.length; i += 1) {
        if(lines[i] != "")  {
            words.push(...lines[i].split(" "));
            console.log(words);

        }
    }

    //add a random chunk based on the size of phraseCount
    for(let i = 0; i < phraseCount; i += 1) {
        let start = randint(0, words.length - 1);
        let end = Math.min(words.length, start + phraseSize);
        let phrase = words.slice(start,end);
        gibberish += phrase.join(" ") + " ";
    }

    return gibberish;


}

//GUI Elements
const button = document.getElementById("gibberize");
const field = document.getElementById("input-field");
const outputField = document.getElementById("output-field");


const complexitySelect = document.getElementById("complexity");
const outputSizeSelect = document.getElementById("output-size");

//Values from the input size dropdown
const inputSizeValues = new Map();
inputSizeValues.set("short",3)
inputSizeValues.set("small",7)
inputSizeValues.set("medium",10)
inputSizeValues.set("large",15)
inputSizeValues.set("long",28)

//function called when the button is pressed
function gibberizeinput() {
    if(complexitySelect.value == "complexity: " || outputSizeSelect.value == "output size: ") {
        alert("Select complexity and output size before generating.");
        return;
    }

    let txt = field.value;
    let result = chop(txt,parseInt(complexitySelect.value),inputSizeValues.get(outputSizeSelect.value) * (6 - parseInt(complexitySelect.value)))
    outputField.value = chop(txt,parseInt(complexitySelect.value),inputSizeValues.get(outputSizeSelect.value) * (6 - parseInt(complexitySelect.value)));
}

//gibbering goober bunch
button.addEventListener('click',gibberizeinput);

//i'm leaving this in
let c = chop("Uma goes to Clarksville and goes to Target and Tumbleweed!",3,5);