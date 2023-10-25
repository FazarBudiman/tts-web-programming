const jawaban = ['I', 'N', 'P','T','U', 'J','A','V','A', 'S', 'C', 'R','I','P','T','B','S','A','L','E','T','S','D','E','D','I','M','G','M','A','R','G','I','N','G']

// Handle Next Input
const inputs = document.querySelectorAll('input');

inputs.forEach((input, index) => {
  input.addEventListener('input', function() {
    focusNextInput(input, index);
  });
});

const focusNextInput = (currentInput, currentIndex ) => {
    const allInputs = document.querySelectorAll('input');
    switch (currentIndex) {
        case 2:
            allInputs[4].focus()
            break;

        case 3: 
            allInputs[6].focus()
            break;

        case 4:
            allInputs[14].focus()
            break;

        case 6:
            allInputs[15].focus()
            break;
        
        case 14:
            allInputs[3].focus()
            break;

        case 15:
            allInputs[18].focus()
            break;

        case 18:
            allInputs[23].focus()
            break;

        case 23:
            allInputs[19].focus()
            break;

        case 20:
            allInputs[10].focus()
            break;

        case 10: 
            allInputs[16].focus()
            break;

        case 16:
            allInputs[21].focus()
            break;

        case 21:
            allInputs[13].focus()
            break;
        
        case 13:
            allInputs[17].focus()
            break;
        case 17:
            allInputs[22].focus()
            break;

        case 22:
            allInputs[24].focus()
            break;

        case 24:
            allInputs[25].focus()
            break;

        case 25:
            allInputs[33].focus()
            break;

        case 33:
            allInputs[34].focus()
            break;

        case 34:
            allInputs[26].focus()
            break;
        
        case 27:
            allInputs[28].focus()
            break;


        default:
            allInputs[currentIndex + 1].focus()
            break;
    }
    
}



// Handle button Check Answer
const displayButton = () => {
    const inputs = document.querySelectorAll('input');
    const buttonCheck = document.getElementById('button-check');
    let isEmpty = false;

    inputs.forEach((input, index) => {
        if (input.value === "") {
            isEmpty = true;
            input.style.removeProperty('border');
        }
    });

    if (isEmpty) {
        buttonCheck.setAttribute('disabled', true);
    } else {
        buttonCheck.removeAttribute('disabled');
    }
};

// Handle cek Jawaban yang Benar
const checkJawaban = () => {
    for (let index = 0; index < jawaban.length; index++) {
        let inputValue = document.getElementById(`${index}`)
        if (jawaban[index] != inputValue.value.toUpperCase()) {
            inputValue.setAttribute('style', 'border: 2px solid red')
            inputValue.value = ""
        } else {
            inputValue.setAttribute('style', 'border: 3px solid green')
        }
    }
}



