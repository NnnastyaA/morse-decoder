const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let str = "";
    let arr = expr.match(/(.{1,10})/gim) || '';
    for (let i = 0; i <= arr.length-1; i++) {
        if (arr[i] == "**********") {
            str = str + " ";
        }
        else {
            let numberWithoutZero = parseInt(arr[i], 10).toString();
            
            numberWithoutZero = numberWithoutZero.replace(/10/g, ".").replace(/11/g, "-");

            for (const morseTableItem in MORSE_TABLE) {
              if (numberWithoutZero == morseTableItem)  {
                str = str + MORSE_TABLE[morseTableItem];
              }
            }
        }
    }

    return str;


}

module.exports = {
    decode
}