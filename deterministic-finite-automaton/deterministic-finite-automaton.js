//Get the data from input
let elementInput = document.querySelector(".entry");

//Select the result element in html to return data
const elementResult = document.querySelector(".result");

//Variables declaration
let word = "";
let terminals = ["a", "b", "c"];
let notTerminals = ["A", "B", "C"];
let fileWords = "";

//Function that reads file and writes in input
document.getElementById('open-file').onclick = function(){
    openFile(function(txt){
        document.getElementById('open-file-result').value = txt; 
        fileWords = txt;
    });
}

function openFile(callBack) {
    var element = document.createElement('input');
    element.setAttribute('type', "file");
    element.setAttribute('id', "btnOpenFile");
    element.onchange = function(){
        readText(this,callBack);
        document.body.removeChild(this);
    }
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
}

function readText(filePath,callBack) {
    var reader;
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        reader = new FileReader();
    } else {
        alert('The File APIs are not fully supported by your browser. Fallback required.');
        return false;
    }
    var output = "";
    if(filePath.files && filePath.files[0]) {           
        reader.onload = function (e) {
            output = e.target.result;
            callBack(output);
        };
        reader.readAsText(filePath.files[0]);
    }
    else {
        return false;
    }       
    return true;
}

//Generate function, activated by the generate button
function generate() {

    //Get the input imported from file and remove line breaks
    let elementInputData = elementInput.value.replace(/(\r\n|\n|\r)/gm, "");
    elementInputData = removeDuplicate(elementInputData);
    
    let counter = 0;
    let prefix = "S ::= ";
    let lineBreak = " \n"

    //For each character
    for (let i = 0; i < elementInputData.length; i++) {
        verifyIfIncluded(elementInputData[i]);
        elementResult.innerHTML += prefix + elementInputData[i] + lineBreak;
    }
}

//Remove duplicates from string
function removeDuplicate(str) {
    var result = "";
    var freq = {};
    for(let i = 0; i < str.length; i++){
        let char = str[i];
        if(freq[char]) {
            freq[char]++;      
        } else {
            freq[char] = 1;
            result = result+char;
        }
    }
    return result;
}

function verifyIfIncluded(character) {
    let findedCharacter = word.search(character);
    console.log(findedCharacter);

    if (findedCharacter != -1) {
        for (let i = 0; i < character.length; i++) {
        word += character;   
        console.log(word);             
        }
    }
}
