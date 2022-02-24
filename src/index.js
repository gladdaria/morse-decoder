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
    let arr = [];
    let binToMorse = [];
    let morseToWords;
    for (let i = 0; i < expr.length; i+=10) {
    arr.push(expr.slice(i, i + 10));
}
  arr.forEach((el) => {
    let str = '';
    for (let i = 0; i < 10; i+=2) {
      let item = el.slice(i, i + 2);
      if (item === '10') {
        str += '.';
      } else if (item === '11') {
        str += '-';
      } else if (item = '00') {
        str += '';
      }
    }
    binToMorse.push(str);
  })
  morseToWords = binToMorse.map((el) => {
    return MORSE_TABLE[el] || ' ';
  })
  return morseToWords.join('');
}

module.exports = {
    decode
}