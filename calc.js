console.log("calc");
let screenValue = '';

let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');

for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        console.log(buttonText);

        if(buttonText=='X'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }        
        else if(buttonText == 'C'){
            screenValue = "";
            screen.value = screenValue;
        }
        else if(buttonText == '='){
            screen.value = eval(screenValue);
        }
        else if(buttonText == 'D'){
            screen.value = screenValue.substr(0, screen.value.length - 1);
            screenValue = screen.value;
        }   
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
        

    })
}

