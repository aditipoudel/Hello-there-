const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

const greetings = [
    'hello how you doing',
    'hello how are you',
    'hello how is the weather today',
    'hello god bless you',
    'hiya honey have a good day I love you',
    'hello sweetie did you drink enough water today',
    'hey I missed you',
    'I love you sweetie',
    'gitchee gitchee goo'
];
const non = [
    'have you completed your assignment',
    'Have fun its  holiday',
    'Drink water and take care buddy'
]
const non1 = [
    'take care of animals around you',
    'feed the birds and cats',
    'stay healthy and care for animals',
    'I love nature',
    'We must be kind sweetie'
]


const SpeechRecognition =
 window.SpeechRecognition || window.webkitSpeechRecognition;
const recognisation = new SpeechRecognition();


recognisation.onstart = function()  {
    console.log('voice is activated, you can now speak');
};

recognisation.onresult = function(event) {
  //console.log(event);
      const current = event.resultIndex;

    const trasncript = event.results[current][0].transcript;
    content.textContent = trasncript;
    readOutLoud(trasncript);
};

btn.addEventListener('click', () =>{
    recognisation.start();

});



function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();
    
    speech.text = ' Its nice to be here but Sorry sweetie why dont you try Hi or say how are you or say cool.';
    

    if (message.includes('hi')) {
        const finaltext= greetings[Math.floor(Math.random() * greetings.length)];
    speech.text = finaltext;
    }
    if (message.includes('how are you')) {
        const finaltext= non[Math.floor(Math.random() * non.length)];
    speech.text = finaltext;
    }
    if (message.includes('cool')) {
        const finaltext= non1[Math.floor(Math.random() * non1.length)];
    speech.text = finaltext;
    }
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    
    window.speechSynthesis.speak(speech);
}




