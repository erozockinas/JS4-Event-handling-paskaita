// const formData = new FormData(event.target);
// const formObject = Object.fromEntries(formData.entries());

//Pirma uzduotis
console.log("Pirma uzduotis");

var myButton1 = document.getElementById('id1');


var myButton2 = document.getElementById('id2');


myButton1.addEventListener('click', () => {
    alert(myButton1.id);
});

myButton2.addEventListener('click', () => {
    alert(myButton2.id);
});

//Antra uzduotis
console.log('----------------');
console.log("Antra uzduotis");

var myInput = document.getElementById('inputid');
myInput.addEventListener('keydown', (event) => {

    var pText = document.querySelector('p');
    if(event.key=="Enter"){
        console.log(event.key);
        
        pText.innerText="paspaudei: " + event.key + ", input isvalytas";
        myInput.value="";
    }
    else{
        console.log(event.key);
        pText.innerText="paspaudei: " + event.key;
    }
    
});

//Trecia uzduotis
console.log('----------------');
console.log("Trecia uzduotis")

var inputValue1 = "";
var inputValue2 = "";
var inputValue3 = "";




var submitButton = document.querySelector('form');
    submitButton.addEventListener('submit', (event) => {
        
    
        // const formData = new FormData(submitButton);
        // console.log(Object.fromEntries(formData.entries()));

        // const formData1 = new FormData(event.target);

        // const formObject = Object.fromEntries(formData1.entries());

        // console.log(formObject);


        
        inputValue1 = document.getElementById("formId1").value;
        inputValue2 = document.getElementById("formId2").value;
        inputValue3 = document.getElementById("formId3").value;

        if(17<inputValue3<100){
            //
        }
        else {
            event.preventDefault();
            alert("Age must be between 18 and 99");
        }



    
        
    });

