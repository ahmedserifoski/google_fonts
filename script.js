//get the sample text from the input field and display it in the text sample boxes
function tryItOut () {
    let example = document.querySelector('.example').value;
    let display = document.querySelectorAll('.display');

    for( i = 0; i < display.length; i ++) {
        display[i].innerHTML = example;
    }
    
}

//Change the font size of the sample fields
function textSize() {
    let selectArea = document.querySelector(".sizes");
    let sampleText = document.querySelectorAll(".display");

    for (i = 0; i < selectArea.length*2; i ++) {
        sampleText[i].style.fontSize = selectArea.value;
    }
}

//cards values

//Change the font size of the sample fields
function textSize() {
    let text = 'I cannot think of souch a deep thaught for an example text';
    let selectArea = document.querySelector(".sizes");
    let sampleText = document.querySelectorAll(".display");
    let ahmed = "ahmed";

    for (i = 0; i < selectArea.length*2; i ++) {
        sampleText = text;

        

    }
    console.log(text);
}
console.log(text);


